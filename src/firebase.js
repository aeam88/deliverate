import firebase from 'firebase/app'
import 'firebase/firestore';
 
const firebaseConfig = {
    apiKey: "AIzaSyA4ieEiTTxyB7as-Q5c5fIXXOOBA3vx82s",
    authDomain: "deliverate-aad6f.firebaseapp.com",
    databaseURL: "https://deliverate-aad6f.firebaseio.com",
    projectId: "deliverate-aad6f",
    storageBucket: "deliverate-aad6f.appspot.com",
    messagingSenderId: "845494369983",
    appId: "1:845494369983:web:fb25e91483375aacc8900a"
};

  firebase.initializeApp(firebaseConfig);
 
export default firebase.firestore();