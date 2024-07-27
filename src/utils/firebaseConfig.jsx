import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG4gRUcMCfJOmH35q-dx0-aT47rle3h4c",
  authDomain: "notas-6c467.firebaseapp.com",
  projectId: "notas-6c467",
  storageBucket: "notas-6c467.appspot.com",
  messagingSenderId: "1047915804555",
  appId: "1:1047915804555:web:e1a27f7561645507dae18e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
