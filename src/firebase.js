import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2_Wc79C6XQ1109VF39iOz6AbRT_Jfjg0",
  authDomain: "todo-app-652e3.firebaseapp.com",
  projectId: "todo-app-652e3",
  storageBucket: "todo-app-652e3.appspot.com",
  messagingSenderId: "1018755652655",
  appId: "1:1018755652655:web:4dd900e000e9c06b457ada",
  measurementId: "G-P9NLWX5M0K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
