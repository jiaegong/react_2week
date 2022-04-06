import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYpn_LfFJWB444Jb6BlWED1u1EVbCsPh8",
  authDomain: "image-community-f7258.firebaseapp.com",
  projectId: "image-community-f7258",
  storageBucket: "image-community-f7258.appspot.com",
  messagingSenderId: "494475665293",
  appId: "1:494475665293:web:edc158096abacdb764e7c4",
  measurementId: "G-QEV7D7XRZZ",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
