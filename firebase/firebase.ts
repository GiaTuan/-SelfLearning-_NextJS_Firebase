import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAGa4hFsqvum8wC-2WlWYhm5AW4Gnv_dwU",
    authDomain: "my-note-3ab4c.firebaseapp.com",
    projectId: "my-note-3ab4c",
    storageBucket: "my-note-3ab4c.appspot.com",
    messagingSenderId: "966233725634",
    appId: "1:966233725634:web:5152e42c1998eb30cc395b",
    measurementId: "G-5QPDTWPCD6"
};
if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
}

const Firestore = firebase.firestore;
const FirebaseAuth = firebase.auth;
const Storage = firebase.storage;

export { FirebaseAuth, Firestore, Storage };