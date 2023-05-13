import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //   your firebase app configuration settings
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
