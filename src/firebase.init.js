

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//Danger: DO NOT PUSH CONFIG TO PUBLIC
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB8YXYyqK0Ulpk56RZTy2wcnxkCCduvrI",
  authDomain: "explore-email-password-a-31985.firebaseapp.com",
  projectId: "explore-email-password-a-31985",
  storageBucket: "explore-email-password-a-31985.firebasestorage.app",
  messagingSenderId: "944773798170",
  appId: "1:944773798170:web:670799c82b43db5f55f4a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);