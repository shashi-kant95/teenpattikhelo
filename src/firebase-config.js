import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDq_JCt0kWY4b1GXdX74TqmiyKGFPP2c68",
    authDomain: "teen-patti-web.firebaseapp.com",
    projectId: "teen-patti-web",
    storageBucket: "teen-patti-web.appspot.com",
    messagingSenderId: "639841637202",
    appId: "1:639841637202:web:700b3c447286b37a1d608b",
    measurementId: "G-SR86FZGPKH"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);
