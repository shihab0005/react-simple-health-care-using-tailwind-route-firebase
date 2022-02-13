import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initilizationFirebase = () => {
    initializeApp(firebaseConfig)
}

export default initilizationFirebase;