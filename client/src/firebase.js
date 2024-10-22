import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-blog-c5ec1.firebaseapp.com",
  projectId: "mern-blog-c5ec1",
  storageBucket: "mern-blog-c5ec1.appspot.com",
  messagingSenderId: "1068853820942",
  appId: "1:1068853820942:web:d7f126a2d612ac4183465f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
