import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDeLWB9310e4h5bDP8O11oMV3VbNuJufd0",
    authDomain: "spotify-961d8.firebaseapp.com",
    projectId: "spotify-961d8",
    storageBucket: "spotify-961d8.appspot.com",
    messagingSenderId: "229721584254",
    appId: "1:229721584254:web:8c93a9e55e00e467a3de2f",
    measurementId: "G-L2NM54TWNN"
}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


export default firebaseConfig;