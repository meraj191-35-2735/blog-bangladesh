// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAnyNIju_E-fnBGDVOhw7ibvwdBSRxyPU",
  authDomain: "blog-bd-0.firebaseapp.com",
  projectId: "blog-bd-0",
  storageBucket: "blog-bd-0.appspot.com",
  messagingSenderId: "1047447917106",
  appId: "1:1047447917106:web:10cf2be607f6a338c6222b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
