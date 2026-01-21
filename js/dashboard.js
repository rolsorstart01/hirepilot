auth.onAuthStateChanged(async (user) => {
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('user-name').innerText = user.email.split('@')[0];

    // Load Stats
    const appsSnapshot = await db.collection('applications')
        .where('userId', '==', user.uid).get();

    document.getElementById('total-applied').innerText = appsSnapshot.size;

    const list = document.getElementById('app-list');
    list.innerHTML = '';

    appsSnapshot.forEach(doc => {
        const app = doc.data();
        list.innerHTML += `
            <tr>
                <td>${app.jobTitle}</td>
                <td>${app.company}</td>
                <td><span class="badge">${app.status}</span></td>
                <td>${app.timestamp?.toDate().toLocaleDateString() || 'Today'}</td>
                <td><button onclick="downloadResume('${doc.id}')">View AI Resume</button></td>
            </tr>
        `;
    });
});