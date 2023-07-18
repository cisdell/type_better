import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//
//firebase config
import { firebaseConfig } from "./FirebaseConfig.js";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// init firestore
const db = getFirestore();


//init firebase auth
const auth = getAuth()
export { auth, db };
