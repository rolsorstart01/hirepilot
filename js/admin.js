async function accessAdmin() {
    const pass = document.getElementById('admin-pass').value;
    if (pass === "HIRE_PILOT_2026") {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        loadAdminData();
    }
}

async function loadAdminData() {
    const users = await db.collection('users').get();
    let totalRevenue = 0;

    users.forEach(u => {
        const data = u.data();
        if (data.status === 'active') totalRevenue += 1499; // Simple estimation
    });

    document.getElementById('total-revenue').innerText = `₹${totalRevenue}`;
    document.getElementById('user-count').innerText = users.size;
}