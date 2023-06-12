// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, setDoc, doc, Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCobTdUX2DnKVVi0VX9E3r69imLCc3Pt58",
  authDomain: "feather-quest-15e50.firebaseapp.com",
  projectId: "feather-quest-15e50",
  storageBucket: "feather-quest-15e50.appspot.com",
  messagingSenderId: "896175282066",
  appId: "1:896175282066:web:911a685d20cfdef3a2934b",
  measurementId: "G-621Y1M7ZYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app };


// console.log(getData())