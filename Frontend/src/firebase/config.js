// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWQezXy8lyJMW2DKQlqcxKp6ZTclHToOQ",
  authDomain: "bharatgo-project.firebaseapp.com",
  projectId: "bharatgo-project",
  storageBucket: "bharatgo-project.appspot.com",
  messagingSenderId: "722990495304",
  appId: "1:722990495304:web:6c10bfd9bca6933925ca7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Signup function
export const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup Successful!");
  } catch (error) {
    alert(error.message);
  }
};

// Login function
export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword
    (auth, email, password);
    alert("Login Successful!");
  } catch (error) {
    alert(error.message);
  }
};

// Logout function
export const logout = async () => {
  await signOut(auth);
};
