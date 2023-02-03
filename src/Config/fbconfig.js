import * as firebase from "firebase/compat/app";
// Add the Firebase services that you want to use
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/analytics";

var firebaseConfig = { // firebase config 
  apiKey: "AIzaSyB9sIGOPZPiI4aRh3n5YEu7wRA79lBn0eY",
  authDomain: "covid-care-a267c.firebaseapp.com",
  databaseURL: "https://covid-care-a267c.firebaseio.com",
  projectId: "covid-care-a267c",
  storageBucket: "covid-care-a267c.appspot.com",
  messagingSenderId: "783260378487",
  appId: "1:783260378487:web:ccaa9783f729e1246c2d72"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); // firebase initialisation
  firebase.firestore() 
  // firebase.functions()
  const storage = firebase.storage();
  const auth = firebase.auth()
  const db = firebase.firestore();

  export { auth, storage, db,  firebase as default };
