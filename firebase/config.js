import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBKurEfhbEll8Hy9H1hCDNLuNNKoK04UGA",
  authDomain: "shrishi-pictora.firebaseapp.com",
  projectId: "shrishi-pictora",
  storageBucket: "shrishi-pictora.appspot.com",
  messagingSenderId: "621662558137",
  appId: "1:621662558137:web:746e579fd0bbbf44b2c868"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };