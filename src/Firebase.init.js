// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACWGOAWykYYacTSTbzsKqVf87w81P9zV4",
  authDomain: "auto-car-inc.firebaseapp.com",
  projectId: "auto-car-inc",
  storageBucket: "auto-car-inc.appspot.com",
  messagingSenderId: "266308451191",
  appId: "1:266308451191:web:60433ea842093b0fe6ff72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth