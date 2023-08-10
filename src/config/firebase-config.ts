// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "queuing-system-cc959.firebaseapp.com",
  projectId: "queuing-system-cc959",
  storageBucket: "queuing-system-cc959.appspot.com",
  messagingSenderId: "430239310569",
  appId: "1:430239310569:web:4e0801388a0a7916734678",
  measurementId: "G-8QB67VF1E2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export default database;
