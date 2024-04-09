// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXoJZoDe1BEFBhsVnd30gAAo2dmVe0GbQ",
  authDomain: "mt-news-portal.firebaseapp.com",
  projectId: "mt-news-portal",
  storageBucket: "mt-news-portal.appspot.com",
  messagingSenderId: "266942042758",
  appId: "1:266942042758:web:d19a6fdfe9e97d56bd7707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;