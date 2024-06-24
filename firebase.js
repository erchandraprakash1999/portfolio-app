// Import the functions you need from the SDKs you need
import {initializeApp } from 'firebase/app';
import { EmailAuthProvider, getAuth, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAU18Ya3ysWLr0rVNOexdmKc5dvl_LEqQE",
    authDomain: "portfolio-app-459a5.firebaseapp.com",
    projectId: "portfolio-app-459a5",
    storageBucket: "portfolio-app-459a5.appspot.com",
    messagingSenderId: "1073961326672",
    appId: "1:1073961326672:web:87481012665424643fd955",
    measurementId: "G-2QXJBGJC6N"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase
export const emailAuthProvider = EmailAuthProvider;
export const checkUserWithCredential = reauthenticateWithCredential;
export const userUpdatePassword = updatePassword;
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;