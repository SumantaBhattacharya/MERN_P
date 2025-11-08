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
                    content: `You are SigmaGPT, a interview grade assistant. Your task is to generate candidate review evaluation score.
                    Respond only with JSON.
                    The response must:
                        1. Include ALL fields
                        2. Use only the exact field names shown
                        3. Follow the exact data type specified
                        4. Contain ONLY the JSON object and nothing else
                    `
                },
                {
                    role: 'user',
                    content: `
                    Q. What does === do in JavaScript?
                    A. It checks strick equality-both value and type must match.

                    Q: How do you create a promise that resolves after 1 second?
                    A: const p = new Promise(r => setTimeout(r, 1000));

                    Q: What is hoisting?
                    A: JavaScript moves declarations (but not initializations) to the top of their scope before code runs.

                    Q: What use of let instead of var?
                    A: let is block scoped, avoiding the function scope quirks and redeclaration issues of var.`
                }
            ],
            response_format: { type: "json_schema",
                schema: {
                    type: "object",
                    properties: {
                        overall_evaluation: {
                            type: "object",
                            properties: {
                                // interviewer_Q: { type: "string" },
                                total_questions: { type: "number" },
                                // Candidate_answer: { type: "string" },
                                correct_answers: { type: "number" },
                                confidence_score: { type: "number" },
                                accuracy: { type: "number" },
                                rating: { type: "number" },
                                pass: { type: "boolean" },
                                summary: { type: "string" }
                            }
                        }
                    }
                }
             }
        }
    )

    let data = (JSON.parse(completion.choices[0].message.content));// in completion we get an array choices 
    console.log("📊 Interview Evaluation:", data);

}

main();