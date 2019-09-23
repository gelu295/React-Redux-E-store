import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCAJF0dS5cd1vgjy313FB5-OMveyme3CL4",
    authDomain: "react-estore-db.firebaseapp.com",
    databaseURL: "https://react-estore-db.firebaseio.com",
    projectId: "react-estore-db",
    storageBucket: "",
    messagingSenderId: "184786094476",
    appId: "1:184786094476:web:6581d20a7ce0aa3e22aea9"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;