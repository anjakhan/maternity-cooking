import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAyJavJh4d2sF8-j3d2eBCmcV7rZaJ8ydU",
    authDomain: "cooking-db-a6620.firebaseapp.com",
    databaseURL: "https://cooking-db-a6620.firebaseio.com",
    projectId: "cooking-db-a6620",
    storageBucket: "cooking-db-a6620.appspot.com",
    messagingSenderId: "727911438548",
    appId: "1:727911438548:web:4b0f49d58189d41be54341",
    measurementId: "G-E0REMV9NFC"
};

firebase.initializeApp(config);

// export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase;