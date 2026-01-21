/**
 * HIREPILOT PUBLIC CONFIGURATION
 * These values are safe to be public as they are restricted by 
 * domain whitelisting in Firebase and Razorpay consoles.
 */
const firebaseConfig = {
    apiKey: "AIzaSyBDbSczTlXrmW6xymRTwBDNJaJ32vljKIE", // [cite: 2]
    authDomain: "vantixpro.firebaseapp.com", // [cite: 2]
    projectId: "vantixpro", // [cite: 2]
    storageBucket: "vantixpro.firebasestorage.app", // [cite: 2]
    messagingSenderId: "389313918468", // [cite: 2]
    appId: "1:389313918468:web:6ae01268eaa1af59d7e751", // [cite: 2]
    measurementId: "G-77X9883ZLX" // [cite: 2]
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

/**
 * SENSITIVE KEYS
 * During local development, these will look for a global 'CONFIG' object.
 * In production, these should be handled via Vercel Environment Variables.
 */
const CONFIG = {
    // Razorpay Public Key (Safe to expose)
    RAZORPAY_KEY_ID: "rzp_live_S61J7p7YKjOlxz", // 

    // Gemini API Key 
    // SECURITY NOTE: To fully hide this, a Vercel Serverless function is required.
    // For this Vanilla JS build, we pull from a secure source or build-time injection.
    GEMINI_API_KEY: window.ENV_GEMINI_KEY || ""
};