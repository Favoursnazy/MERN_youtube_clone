// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCynEla2SafIFyhNQCDMHMMNUHd6m7mUv4",
  authDomain: "video-fe18f.firebaseapp.com",
  projectId: "video-fe18f",
  storageBucket: "video-fe18f.appspot.com",
  messagingSenderId: "42391872840",
  appId: "1:42391872840:web:23d3f32d17c3542226bf7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
