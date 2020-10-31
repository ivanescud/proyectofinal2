
import  firebase from 'firebase/app';
require("firebase/auth");
require("firebase/firestore");




  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDOzDoRN5FuSW7qME9XfO86YfNTsc6eWJE",
    authDomain: "profinal-2b7d6.firebaseapp.com",
    databaseURL: "https://profinal-2b7d6.firebaseio.com",
    projectId: "profinal-2b7d6",
    storageBucket: "profinal-2b7d6.appspot.com",
    messagingSenderId: "1000439181046",
    appId: "1:1000439181046:web:fd751a5c21bb27ce1f86d7"
  };



  // Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();


export {firebase, db, auth}

  
