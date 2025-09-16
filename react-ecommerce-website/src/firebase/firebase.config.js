// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjZGF0m9QrB9HEzbiIhf6dU1w4nGHVj10",
  authDomain: "ecommarce-react-js-baec5.firebaseapp.com",
  projectId: "ecommarce-react-js-baec5",
  storageBucket: "ecommarce-react-js-baec5.firebasestorage.app",
  messagingSenderId: "32046276499",
  appId: "1:32046276499:web:948630b5691588e2b35266",
  measurementId: "G-M1JXQR3CMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;