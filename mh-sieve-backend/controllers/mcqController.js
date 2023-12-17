import dotenv from 'dotenv'
dotenv.config()
import { OpenAI } from 'openai'
const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})
export async function GenerateMCQ(req, res) {
    try {
        console.log(req.body);
        const { videoDescription } = req.body;

        // Replace Windows-style line endings with regular line breaks
        const sanitizedVideoDescription = videoDescription.replace(/\r\n/g, '\n');

        const mcqPrompt =
            sanitizedVideoDescription +
            '\n\n' +
            '*Question 1:*\nWhat is the main topic of Video 1?\noptions: [1: "Option A", 2: "Option B", 3: "Option C", 4: "Option D"]\nanswer: ""\n\n' +
            '*Question 2:*\nIn Video 2, what is the key concept discussed?\noptions: [1: "Option A", 2: "Option B", 3: "Option C", 4: "Option D"]\nanswer: ""\n\n' +
            '... (continue for other questions)';

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: 'system',
                    content: "You are tasked with generating multiple-choice questions based on the description of videos in a playlist."
                },
                {
                    role: 'assistant',
                    content: JSON.stringify({ mcqPrompt })
                },
                {
                    role: "user",
                    content: `Generate the 10 questions by taking ${sanitizedVideoDescription} into consideration.`
                }
            ],
        });
        const mcqQuestions = JSON.parse(completion.choices[0].message.content);
        console.log(mcqQuestions);
        res.json({ mcqQuestions });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
}
