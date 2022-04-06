import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "slack-neo.firebaseapp.com",
    projectId: "slack-neo",
    storageBucket: "slack-neo.appspot.com",
    messagingSenderId: "437947007312",
    appId: "1:437947007312:web:ef159fb95be18c6bfdac55",
    measurementId: "G-GE86KJCCZV"
  };

  