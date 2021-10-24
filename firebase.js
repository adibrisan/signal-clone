import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqTdFZlPT7BY9Pfm6FiAcOm4_Vnho6Plg",
  authDomain: "signal-clone-26842.firebaseapp.com",
  projectId: "signal-clone-26842",
  storageBucket: "signal-clone-26842.appspot.com",
  messagingSenderId: "802793597911",
  appId: "1:802793597911:web:cf7204b06a883093a33992",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();

const auth = firebase.auth();

export { db, auth };
