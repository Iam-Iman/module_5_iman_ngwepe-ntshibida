import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDQXO7TXrgwJZL5p4TPyZRjHD0ciTU2i2c",
  authDomain: "ordering-app-1df61.firebaseapp.com",
  projectId: "ordering-app-1df61",
  storageBucket: "ordering-app-1df61.appspot.com",
  messagingSenderId: "601600435642",
  appId: "1:601600435642:web:50d4d7ab460cccc7f5a983"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig) 
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();


export { db, auth };