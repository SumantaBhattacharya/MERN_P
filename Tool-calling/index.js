import Groq from "groq-sdk";

// node inbuild package
import readline from "node:readline/promises";

import { tavily } from "@tavily/core";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

async function main() {
  // creating an interface for readline
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const message = [
    {
      role: "system",
      content: `You are a SigmaGPT, a smart personal assistant who answers the asked questions.
        You have access to a tool called webSearch which you can use to search the web for information.
        1. searchWeb({query}: {query: string}) //Search the web for information and real time data on the internet.
        current date and time: ${new Date().toUTCString()}
        `,
    },
    // {
    //   role: "user",
    //   content: "HEY, WHO ARE YOU?",
    // },
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
              description: "The search query to perform search on.",
            },
          },
          required: ["query"],
        },
      },
    },
  ];

  while (true) {
    // Once it enters the first loop, User input loops, We dont want to end the loop once the question input is done answering Once, user input is done answering we want to create an interface again so the user can ask hes/her next query to it.
    const question = await rl.question("You: ");

    if (question.toLowerCase().trim() === "stop") {
      console.log("👋 Thanks! for visiting out site.");
      break;
    }

    message.push({
      role: "user",
      content: "question",
    });

    while (true) {
      const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0,
        max_completion_tokens: 200,
        messages: message,
        tools: tools,
        tool_choice: "auto",
      });

      const assistantMessage = completion.choices[0].message;
      // push the assistant message to the message array
      message.push(assistantMessage);

      const toolCalls = completion.choices[0].message?.tool_calls;

      if (!toolCalls) {
        console.log(`Assistant: ${completion.choices[0].message?.content}`);
        break; // means we got our final result
      }

      // We be using loop as there can multiple toolCalls, toolCalls is an array,
      for (const tool of toolCalls) {
        console.log("tool: ", tool);

        const functionName = tool.function.name;
        const functionArguments = tool.function.arguments;

        if (functionName === "webSearch") {
          // as webSearch is async we have to use await
          const toolCallResult = await webSearch(JSON.parse(functionArguments)); // JSON.parse(functionArguments) = {query: "iphone 16 launch date"}
          console.log("toolCallResult: ", toolCallResult); // its a json string, We have to parse it into js object

          // now send the web search result to the assistant
          message.push({
            role: "tool",
            // name: functionName,
            tool_call_id: tool.id,
            content: toolCallResult,
          });
        }

        // instaed of sending the message again in final completion, We can also use while (true) to run the same code until tool calling is done and instead of return we will use break to stop the loop
      }
    }
  }
  rl.close();
}

main().catch(console.error);

async function webSearch({ query, maxResults = 1 }) {
  //{query} are for object destructuring
  console.log("Calling web search...");
  const response = await tvly.search(query);
  console.log("Web search response: ", response);

  // join converted array into a string sepeated by a line
  const finalResult = response.results.map((result) => result.content).join("\n");

  console.log("finalResult: ", finalResult);

  return finalResult;
}
