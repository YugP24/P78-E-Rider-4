import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBVJ5ZDLj97c-7gqGgZVJX785iFUVP65zU",
    authDomain: "e-rider-5be9d.firebaseapp.com",
    projectId: "e-rider-5be9d",
    storageBucket: "e-rider-5be9d.appspot.com",
    messagingSenderId: "495426469668",
    appId: "1:495426469668:web:cbf5240b94db4030ebbdb1"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


