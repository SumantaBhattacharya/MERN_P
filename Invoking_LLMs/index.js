import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
    const completion = await groq.chat.completions.create(
        {
            temperature: 0.3, // default is 1.0
            top_p: 1.0, // range - 0.0 to 1.0
            stop: null,
            max_completion_tokens: 300, // 225-240 words
            frequency_penalty: 1.0, // word repetition
            presence_penalty: 0.3, // diversity
            model: 'llama-3.3-70b-versatile',  
            messages: [
                {
                    role: 'system',
                    content: `You are SigmaGPT, a smart review grader. Your task is to Classify the review as positive, neutral or nagative?. Output must be a single word`
                },
                {
                    role: 'user',
                    content: `Review: These headphones arrived quickly and look great, but the left earcup stopped working after a week.
                    Sentiment:`
                }
            ]
        }
    )

    console.log(completion.choices[0].message.content);// in completion we get an array choices 

}

main();