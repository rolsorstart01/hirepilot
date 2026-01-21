// Public Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDbSczTlXrmW6xymRTwBDNJaJ32vljKIE",
    authDomain: "vantixpro.firebaseapp.com",
    projectId: "vantixpro",
    storageBucket: "vantixpro.firebasestorage.app",
    messagingSenderId: "389313918468",
    appId: "1:389313918468:web:6ae01268eaa1af59d7e751"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// This key is safe to be public as per Razorpay docs
const RAZORPAY_KEY_ID = "rzp_live_S61J7p7YKjOlxz";