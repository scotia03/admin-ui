import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 


const firebaseConfig = {
  apiKey: "AIzaSyBoOrG6XonDqdQRjyezOihJ0TJ-ccNSZS0",
  authDomain: "store-tutorial-add4f.firebaseapp.com",
  projectId: "store-tutorial-add4f",
  storageBucket: "store-tutorial-add4f.appspot.com",
  messagingSenderId: "731807069989",
  appId: "1:731807069989:web:ecce2bd34d83d1941ecccc",
  measurementId: "G-CXXZ9S94JD"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);