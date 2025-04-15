import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVe9PF7i6FPEyOdL7ljsNTqcG_xyjfQ0U",
  authDomain: "ff-app-f4825.firebaseapp.com",
  projectId: "ff-app-f4825",
  storageBucket: "ff-app-f4825.firebasestorage.app",
  messagingSenderId: "55644345340",
  appId: "1:55644345340:web:aa7a69560be0f730589879",
  measurementId: "G-MLH8FRF0KF"
};

const app = initializeApp(firebaseConfig);

export { app };
