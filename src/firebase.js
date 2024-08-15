// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API,
  authDomain: "book-ai-1b6eb.firebaseapp.com",
  projectId: "book-ai-1b6eb",
  storageBucket: "book-ai-1b6eb.appspot.com",
  messagingSenderId: "1067200742139",
  appId: "1:1067200742139:web:0d5cc815d0bec30f0e665e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
