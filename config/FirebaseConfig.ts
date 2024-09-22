// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop-e3790.firebaseapp.com",
  projectId: "loop-e3790",
  storageBucket: "loop-e3790.appspot.com",
  messagingSenderId: "828065677891",
  appId: "1:828065677891:web:ea8583f55a23102e53caf6",
  measurementId: "G-TRRCEFGK5Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);