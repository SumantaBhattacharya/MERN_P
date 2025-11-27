import Groq from "groq-sdk";

import { tavily } from "@tavily/core";

import NodeCache from "node-cache";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

//  Good for single server, development. But if server restarts → ALL memory lost. Multiple servers → each has different memory.
const myCache = new NodeCache(// temporary memory - any entry that passed 24 hours it will remove
  {
    stdTTL: 60 * 60 * 24 , // 0 = infinity (standart time to leave in seconds) (60 seconds means 1 minute multipled by 60 make it an hour)
  }
);// the data in here is stored in key value pairs

export async function generate({ userMessage, threadId }) {
  // console.log("User Message: ", userMessage); // this is the user input message that we're passing to the function generate() in chat-controller.js

  const systemMessage = [
    {
      role: "system",
      content: `You are SigmaGPT, a smart personal assistant who answers the questions asked 
      if you know the answer to a question, answer it directly in plain Englist.and 
      if the information is not available within you and that requires real-time, local, or up-to-date information or if you dont know the answer then you do function call i. web search and 
      when the date needed to answer the query then do call ii. calcDate.
      `,
    },
  ];

  const tools = [
    {
      type: "function",
      function: {
        name: "webSearch", // tool/function name
        description:
          "Search the web for information and real time data on the internet.",
        parameters: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "The search query to perform web search on.",
            },
          },
          required: ["query"],
        },
      },
    },
    {
      type: "function",
      function: {
        name: "calcDate",
        description: "Get the current date and time.",
        parameters: {
          type: "object",
          properties: {},
          required: [],
        },
      },
    },
  ];

    // check: for a given threadId, do we have any previous messages?. the system message will go to the llm only once
    const cachedMessages = myCache.get(threadId) ?? []; // threadId is the key - this way all the meesages for a perticular thread id will be get. if no thread id is present then create a thread id and attach the message array to it

    /*cachedMessages.push({
      role: "user",
      content: userMessage,
    });*/

      console.log('🔍 DEBUG - conversationHistory:', cachedMessages);
      console.log('🔍 DEBUG - threadId:', threadId);
      console.log('🔍 DEBUG - cache has threadId?', myCache.has(threadId));

    const Messages = [
      ...systemMessage, // so system meesage is going multiple time as the user sends a meesage the system message goes with it basically its not getting stored in cache
      ...cachedMessages,
      {
      role: "user",
      content: userMessage,
      }
    ];

    console.log('🔍 DEBUG - messages to send:', Messages.map(m => ({role: m.role, content: m.content.substring(0, 50) + '...'})));

    // The loop allows the AI to make multiple tool calls in sequence if needed i. tool call: Search for current weather ii. tool call: Get current date to add context. iii. Final answer combining both results
    while (true) { // so this way ai can use multiple tools at the same time
      // AI invoke loop
      const chatCompletion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,
        max_completion_tokens: 200,
        messages: Messages, // all the context will be saved to the llm
        tools: tools,
        tool_choice: "auto",
      });

      // now push the assistant message to the message array to save the context
      const assistant_message = chatCompletion.choices[0].message;
      Messages.push(assistant_message);

      const toolCalling = chatCompletion.choices[0].message?.tool_calls;

      if (!toolCalling) {
        // console.log("Assistant: ", assistant_message?.content);
        // here we end the chatbot response

        // user-assistant conversation to save in cache not system message
        const user_assistantConversationHistory = [
          ...cachedMessages,
          {
            role: "user",
            content: userMessage,
          },
          {
            role: "assistant",
            content: assistant_message?.content,
          }
        ]

        myCache.set(threadId, user_assistantConversationHistory); // update the message history
        console.log(JSON.stringify(myCache.data));
        console.log('💾 DEBUG - saved to cache:', user_assistantConversationHistory.map(m => ({role: m.role})));
        console.log();
        
        return assistant_message?.content;
        // break;
      }else{

        for (const tool of toolCalling) {
          const functionName = tool.function.name;
          const functionArguments = tool.function.arguments;

          if (functionName === "webSearch") {
            const toolCallResult = await webSearch(JSON.parse(functionArguments));

            Messages.push(
              {
                role: "tool",
                tool_call_id: tool.id,
                content: toolCallResult,
              }
            )

          }
          
          if (functionName === "calcDate") {
            const toolCallResult = await calcDate();

            Messages.push(
              {
                role: "tool",
                tool_call_id: tool.id,
                content: toolCallResult,
              }
            )
          }

        }

      }

    }
  
}

async function webSearch({query}) {
  try {
  const response = await tvly.search(query);
  
  // Tavily returns objects but LLM tools expect "content": string.
  const finalResult = response.results.map((result) => result.content).join("\n"); // This turns Tavily’s object array → into a single string

  return finalResult.toString();
  } catch (error) {
    console.error("Tavily Test Error:", error);
  }
}

async function calcDate () {
  return new Date().toUTCString();
}