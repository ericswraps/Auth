import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHmXdXxVkoH6SgJXpZ_Lfcx5KY53u-AfQ",
  authDomain: "authtest-68f95.firebaseapp.com",
  projectId: "authtest-68f95",
  storageBucket: "authtest-68f95.appspot.com",
  messagingSenderId: "1011593226678",
  appId: "1:1011593226678:web:f35e73c803f4eb93eff917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);