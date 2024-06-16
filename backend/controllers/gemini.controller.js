import { GoogleGenerativeAI } from '@google/generative-ai';

export const generateContent = async (req, res) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const { q } = req.body;
        const result = await model.generateContent(q);
        const response = result.response;
        const text = response.text();
        res.status(200).json({ message: text });
    } catch (error) {
        res.status(500).json({message: "Someting wrong happned"})
        console.log(`Error occured in gemini output ${error}`);
    }
}