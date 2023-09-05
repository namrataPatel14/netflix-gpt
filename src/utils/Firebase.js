// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbXRvf0w1hqm-V101GDHho7X_o3zLLrIc",
  authDomain: "netflixgpt-6657b.firebaseapp.com",
  projectId: "netflixgpt-6657b",
  storageBucket: "netflixgpt-6657b.appspot.com",
  messagingSenderId: "812540206658",
  appId: "1:812540206658:web:8b94c4578792b9f93217db",
  measurementId: "G-M9RR4098D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)
export const auth = getAuth();