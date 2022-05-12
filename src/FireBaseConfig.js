import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmU2qrDXmTjqbyCFtFqm0JsJF9nNiSSz8",
    authDomain: "solar-system-c222b.firebaseapp.com",
    projectId: "solar-system-c222b",
    storageBucket: "solar-system-c222b.appspot.com",
    messagingSenderId: "1054125566833",
    appId: "1:1054125566833:web:72e618cd66bb315ea524d0",
    measurementId: "G-S4SLYCXNPJ"
  };

  const app = initializeApp(firebaseConfig)
  export const db =getFirestore(app);