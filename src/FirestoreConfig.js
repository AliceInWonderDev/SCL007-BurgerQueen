import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyC1FYcyypn7TpG1RtvoiWF5CLtWdt0rl7k",
    authDomain: "mymenu-7db0e.firebaseapp.com",
    databaseURL: "https://mymenu-7db0e.firebaseio.com",
    projectId: "mymenu-7db0e",
});

let db = firebase.firestore();

export default db;