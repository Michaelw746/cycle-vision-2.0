// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU5rIWlojibVQ6VGYvOzcx-8p9E4r1qnQ",
  authDomain: "cycle-vision-675b7.firebaseapp.com",
  projectId: "cycle-vision-675b7",
  storageBucket: "cycle-vision-675b7.appspot.com",
  messagingSenderId: "1061187545384",
  appId: "1:1061187545384:web:3807627244ccf45ab1081d",
  measurementId: "G-HEQRT1TCQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app) 