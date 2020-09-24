import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDM4bdUisb-mK6amCHscIPvsWOrLQY9xw",
  authDomain: "whatsapp-clone-84e8d.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-84e8d.firebaseio.com",
  projectId: "whatsapp-clone-84e8d",
  storageBucket: "whatsapp-clone-84e8d.appspot.com",
  messagingSenderId: "664089343169",
  appId: "1:664089343169:web:eb516c46d7fc9ec6c3d040",
  measurementId: "G-T8NVL1V900"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;