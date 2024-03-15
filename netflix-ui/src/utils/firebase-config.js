import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAKXlT3pwYZ2fECcFXm5M5MdyhWjgiQOQ8",
  authDomain: "netflix-clone-5f9c4.firebaseapp.com",
  projectId: "netflix-clone-5f9c4",
  storageBucket: "netflix-clone-5f9c4.appspot.com",
  messagingSenderId: "352178529258",
  appId: "1:352178529258:web:1b8e580556c9ca03440893",
  measurementId: "G-J9MEE2ZQXT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
