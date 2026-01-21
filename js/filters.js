document.getElementById('filters-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    const filters = {
        role: document.getElementById('role').value,
        location: document.getElementById('location').value,
        minSalary: document.getElementById('min-salary').value,
        experience: document.getElementById('experience-level').value,
        jobType: document.getElementById('job-type').value
    };

    // Save filters and base resume text to Firestore
    await db.collection('users').doc(user.uid).update({
        filters: filters,
        baseResume: "Extracted text from uploaded file..." // Ideally use a PDF parser here
    });

    alert("Preferences saved! Redirecting to dashboard.");
    window.location.href = 'dashboard.html';
});