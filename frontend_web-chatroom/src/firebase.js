// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT1yDJZCNjRsXqzelhnvuShShazdouteA",
  authDomain: "web-chatroom-670a7.firebaseapp.com",
  projectId: "web-chatroom-670a7",
  storageBucket: "web-chatroom-670a7.appspot.com",
  messagingSenderId: "234303005764",
  appId: "1:234303005764:web:79d662ba8f664e35038811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();