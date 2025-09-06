
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj5kneplB3y5SsAz84FEfNdUmXLLTv7eA",
  authDomain: "photo-55932.firebaseapp.com",
  databaseURL: "https://photo-55932-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "photo-55932",
  storageBucket: "photo-55932.firebasestorage.app",
  messagingSenderId: "162277519752",
  appId: "1:162277519752:web:c1b2185352cad3ace90a3d",
  measurementId: "G-CFFFNYYWKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const _analytics = getAnalytics(app);


// const app=initializeApp(firebaseConfig);
// export const auth=getAuth(app);