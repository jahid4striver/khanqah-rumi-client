// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB37AX3KibzYUuECtOlYPXR6cYHOUC2r5E",
  authDomain: "khanqah-rumi.firebaseapp.com",
  projectId: "khanqah-rumi",
  storageBucket: "khanqah-rumi.appspot.com",
  messagingSenderId: "773179746810",
  appId: "1:773179746810:web:125a36583841671d2d5c43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;