import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

export default firebase;
