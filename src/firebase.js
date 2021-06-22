import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDS-bHTNYDjQ-IjEC9fRLuHcd07xHYDXgc",
    authDomain: "portfolio-7086a.firebaseapp.com",
    projectId: "portfolio-7086a",
    storageBucket: "portfolio-7086a.appspot.com",
    messagingSenderId: "62921624758",
    appId: "1:62921624758:web:7ea6462c45c915a6f4aa17",
    measurementId: "G-6PFPVC7NHN"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;