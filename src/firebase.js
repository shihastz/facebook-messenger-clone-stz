import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDjLhUHgEslIwK0LEY55dntVQzBmzCmyUo",
  authDomain: "facebook-messenger-clone-f8710.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-f8710.firebaseio.com",
  projectId: "facebook-messenger-clone-f8710",
  storageBucket: "facebook-messenger-clone-f8710.appspot.com",
  messagingSenderId: "382265458873",
  appId: "1:382265458873:web:989556ec8d6c5b249c1b68",
  measurementId: "G-F1Z1X42HGL"
});

const db = firebaseApp.firestore();

export default db;