import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7HwRKw85CTFoN7wCKi2vo6l1fnATyDHA",
    authDomain: "fir-tutorial-b9fb6.firebaseapp.com",
    projectId: "fir-tutorial-b9fb6",
    storageBucket: "fir-tutorial-b9fb6.appspot.com",
    messagingSenderId: "107936571593",
    appId: "1:107936571593:web:189bd6884211b07193ad18",
    measurementId: "G-3BX998S1EF"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
