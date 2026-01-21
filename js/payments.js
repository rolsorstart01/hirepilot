async function checkout(amount, planType) {
    const user = auth.currentUser;
    if (!user) return window.location.href = 'login.html';

    const options = {
        "key": RAZORPAY_KEY_ID, // 
        "amount": amount * 100, // Amount in paise
        "currency": "INR",
        "name": "HirePilot",
        "description": `${planType} Plan Purchase`,
        "handler": async function (response) {
            // Update user credits/status in Firestore
            await db.collection('users').doc(user.uid).update({
                credits: firebase.firestore.FieldValue.increment(planType === 'pro' ? 50 : 1),
                status: 'active',
                lastPaymentId: response.razorpay_payment_id
            });
            alert('Payment Successful! Automation started.');
            window.location.href = 'dashboard.html';
        },
        "prefill": {
            "email": user.email
        },
        "theme": { "color": "#2563eb" }
    };

    const rzp = new Razorpay(options);
    rzp.open();
}