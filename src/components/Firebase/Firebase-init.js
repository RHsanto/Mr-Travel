import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase-config";

const initializedAuth =()=>{
  initializeApp(firebaseConfig);
}

export default initializedAuth;