// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import firebase from "firebase/app";
// import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJZjvAoaF3S7uHw8KbKkA6sWSR1YpzqXs",
    authDomain: "mit-full-stack-banking-app.firebaseapp.com",
    databaseURL: "https://mit-full-stack-banking-app-default-rtdb.firebaseio.com",
    projectId: "mit-full-stack-banking-app",
    storageBucket: "mit-full-stack-banking-app.appspot.com",
    messagingSenderId: "265626287175",
    appId: "1:265626287175:web:8ac0226cd3dd67e0dbc562"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };