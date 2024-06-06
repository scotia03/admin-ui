// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoOrG6XonDqdQRjyezOihJ0TJ-ccNSZS0",
  authDomain: "store-tutorial-add4f.firebaseapp.com",
  projectId: "store-tutorial-add4f",
  storageBucket: "store-tutorial-add4f.appspot.com",
  messagingSenderId: "731807069989",
  appId: "1:731807069989:web:ecce2bd34d83d1941ecccc",
  measurementId: "G-CXXZ9S94JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();