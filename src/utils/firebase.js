// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-fHh25AmWS_qof8ur9MwK9IAXurTithI",
    authDomain: "shinobistyles-f5336.firebaseapp.com",
    projectId: "shinobistyles-f5336",
    storageBucket: "shinobistyles-f5336.appspot.com",
    messagingSenderId: "777162817786",
    appId: "1:777162817786:web:1febe4b2e1d5213ffd0943",
    measurementId: "G-58YSDB4HMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth, analytics };
export default app;
