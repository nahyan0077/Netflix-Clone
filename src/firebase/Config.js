
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDnp4GAc87iSGxFegGoLXvf0hsG3InJfwQ",
  authDomain: "netflix-clone-74aa8.firebaseapp.com",
  projectId: "netflix-clone-74aa8",
  storageBucket: "netflix-clone-74aa8.appspot.com",
  messagingSenderId: "251455809613",
  appId: "1:251455809613:web:20884ac640621a3752d404",
  measurementId: "G-YC8LRK09TL"
};



const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore