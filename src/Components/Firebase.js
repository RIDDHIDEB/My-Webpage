// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDalf68Uh2OBIQVsc_sGTev8l4-Tyttoyc",
  authDomain: "otp-validation-8d29b.firebaseapp.com",
  projectId: "otp-validation-8d29b",
  storageBucket: "otp-validation-8d29b.appspot.com",
  messagingSenderId: "29915525575",
  appId: "1:29915525575:web:c4b5619b482c8d49f0e9e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;