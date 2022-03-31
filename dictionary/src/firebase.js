// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBdYxqPuAsFDpvtwSnCb_3s2fATKF6k0k",
  authDomain: "sparta-react-basic-9b462.firebaseapp.com",
  projectId: "sparta-react-basic-9b462",
  storageBucket: "sparta-react-basic-9b462.appspot.com",
  messagingSenderId: "772696941841",
  appId: "1:772696941841:web:0c8b23bbfe917b763fd8b0",
  measurementId: "G-J4EQ37MV83"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();