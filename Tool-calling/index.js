import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0,
    max_completion_tokens: 200,
    messages: [
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
    ],
    tools: [
      {
        type: "function",
        function: {
          name: "webSearch", // tool/function name
          description: "Search the web for information and real time data on the internet.",
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
    ],
    tool_choice: "auto",
  });

  const toolCalls = completion.choices[0].message?.tool_calls;

  if (!toolCalls) {
    console.log(`Assistant: ${completion.choices[0].message?.content}`);
    return;
  }

  // toolCalls is an array
  for(const tool of toolCalls) {
    console.log('tool:', tool);

    const functionName = tool.function.name;
    const functionArguments = tool.function.arguments;

    if (functionName === "webSearch") {
      // as webSearch is async we have to use await
      const result = await webSearch(JSON.parse(functionArguments));
      console.log('result:', result) // its a json string, We have to parse it into js object
    };
  }

  // console.log(JSON.stringify(completion.choices[0]?.message?.content));

}

main().catch(console.error);

async function webSearch({query}) {
  return "Iphone was launched on 20 september 2024";
}