export default async function handler(req, res) {
    const { baseResume, jobDescription } = req.body;
    const apiKey = process.env.GEMINI_API_KEY; // Pulled from Vercel Env Vars 

    const prompt = `Rewrite this resume for this job: ${jobDescription}. Base: ${baseResume}`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    });

    const data = await response.json();
    res.status(200).json(data);
}