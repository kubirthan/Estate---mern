// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-mern-fd150.firebaseapp.com",
  projectId: "estate-mern-fd150",
  storageBucket: "estate-mern-fd150.firebasestorage.app",
  messagingSenderId: "1094678056339",
  appId: "1:1094678056339:web:59d578139a30e037882c66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);