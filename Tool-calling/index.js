import Groq from "groq-sdk";

import { tavily } from "@tavily/core";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

async function main() {
  const message = [
    {
      role: "system",
      content: `You are a smart personal assistant who answers the asked questions.
        You have access to a tool called webSearch which you can use to search the web for information.
        1. searchWeb({query}: {query: string}) //Search the web for information and real time data on the internet.
        `,
    },
    {
      role: "user",
      content: "When was iphone 16 launched?",
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
              description: "The search query to perform search on.",
            },
          },
          required: ["query"],
        },
      },
    },
  ];

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
    return;// means we got our final result
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
        name: functionName,
        tool_call_id: tool.id,
        content: toolCallResult,
      });
    }

    const finalCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0,
      max_completion_tokens: 200,
      messages: message, // incremented messages
      tools: tools,
      tool_choice: "auto",
    });

    console.log(JSON.stringify(finalCompletion.choices[0]?.message?.content));
  }
}

main().catch(console.error);

async function webSearch({ query, maxResults = 1 }) {
  //{query} are for object destructuring
  console.log("Calling web search...");
  const response = await tvly.search(query);
  console.log("Web search response: ", response);

  // join converted array into a string sepeated by a line
  const finalResult = response.results
    .map((result) => result.content)
    .join("\n");

  console.log("finalResult: ", finalResult);

  return finalResult;
}
