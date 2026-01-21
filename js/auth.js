document.getElementById('signup-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        // Create user profile in Firestore
        await db.collection('users').doc(userCredential.user.uid).set({
            email: email,
            credits: 0,
            status: 'inactive',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        window.location.href = 'filters.html';
    } catch (error) {
        alert(error.message);
    }
});

// Login Logic
document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await auth.signInWithEmailAndPassword(email, password);
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert("Invalid credentials.");
    }
});