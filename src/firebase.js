import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  
        apiKey: "AIzaSyASO3xcC0aG4P6sF0st0h2uEj2Rd4rrjac",
        authDomain: "instakillo-b4f45.firebaseapp.com",
        databaseURL: "https://instakillo-b4f45.firebaseio.com",
        projectId: "instakillo-b4f45",
        storageBucket: "instakillo-b4f45.appspot.com",
        messagingSenderId: "336606839754",
        appId: "1:336606839754:web:b40bdd88026e3e56e4c533",
        measurementId: "G-L79V7MVVFL"
   
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
