async function optimizeResume(baseResume, jobDescription) {
    const prompt = `
        You are an ATS Expert. Rewrite the following resume specifically for this job description.
        Job Description: ${jobDescription}
        Base Resume: ${baseResume}
        
        Requirements:
        1. Match keywords from the job description.
        2. Keep it professional and high-impact.
        3. Output only the final resume content in plain text.
    `;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        }); // 

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("AI Error:", error);
        return baseResume; // Fallback
    }
}

// Autonomous Automation Loop
async function runAutomationLoop() {
    const user = auth.currentUser;
    const userData = (await db.collection('users').doc(user.uid).get()).data();

    if (userData.credits <= 0) return;

    // 1. Fetch Job Postings (Simulated search based on filters)
    const jobs = await fetchJobs(userData.filters);

    for (let job of jobs) {
        // 2. Rewrite Resume per job 
        const customResume = await optimizeResume(userData.baseResume, job.description);

        // 3. Record Application
        await db.collection('applications').add({
            userId: user.uid,
            jobTitle: job.title,
            company: job.company,
            resumeVersion: customResume,
            status: 'Applied',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        // 4. Deduct Credit
        await db.collection('users').doc(user.uid).update({
            credits: firebase.firestore.FieldValue.increment(-1)
        });
    }
}