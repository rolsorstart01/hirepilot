// js/config.js
const firebaseConfig = {
    apiKey: "AIzaSyBDbSczTlXrmW6xymRTwBDNJaJ32vljKIE",
    authDomain: "vantixpro.firebaseapp.com",
    projectId: "vantixpro",
    storageBucket: "vantixpro.firebasestorage.app",
    messagingSenderId: "389313918468",
    appId: "1:389313918468:web:6ae01268eaa1af59d7e751",
    measurementId: "G-77X9883ZLX"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Global scope definition
window.auth = firebase.auth();
window.db = firebase.firestore();

const RAZORPAY_KEY_ID = "rzp_live_S61J7p7YKjOlxz";