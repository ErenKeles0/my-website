// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlMYT4kK_FQoEfOiRkzdgbTGJlb2-Q230",
  authDomain: "my-website-48400.firebaseapp.com",
  projectId: "my-website-48400",
  storageBucket: "my-website-48400.firebasestorage.app",
  messagingSenderId: "863688069651",
  appId: "1:863688069651:web:c85ce2597db092b4e9a5e6",
  measurementId: "G-NV5L5K01PM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth =getAuth(app); 