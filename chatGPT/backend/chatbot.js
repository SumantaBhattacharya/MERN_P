import Groq from "groq-sdk";

import { tavily } from "@tavily/core";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

export async function generate({ userMessage }) {
  const message = [
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


    message.push({
      role: "user",
      content: userMessage,
    });

    while (true) {
      // AI invoke loop
      const chatCompletion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,
        max_completion_tokens: 200,
        messages: message,
        tools: tools,
        tool_choice: "auto",
      });

      // now push the assistant message to the message array to save the context
      const assistant_message = chatCompletion.choices[0].message;
      message.push(assistant_message);

      const toolCalling = chatCompletion.choices[0].message?.tool_calls;

      if (!toolCalling) {
        console.log("Assistant: ", assistant_message?.content);
        return assistant_message?.content;
        // break;
      }else{

        for (const tool of toolCalling) {
          const functionName = tool.function.name;
          const functionArguments = tool.function.arguments;

          if (functionName === "webSearch") {
            const toolCallResult = await webSearch(JSON.parse(functionArguments));

            message.push(
              {
                role: "tool",
                tool_call_id: tool.id,
                content: toolCallResult,
              }
            )

          }
          
          if (functionName === "calcDate") {
            const toolCallResult = await calcDate();

            message.push(
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