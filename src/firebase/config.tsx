import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./FirebaseConfig";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('hello')
// console.log(firebaseConfig)

//init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();


//init firebase auth
const auth = getAuth()

export { db, auth };

