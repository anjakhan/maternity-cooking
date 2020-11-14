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

// export const getID = () => {
//     firestore.collection('recipes').get()
//       .then(snapshot => {
//         snapshot.forEach(doc => {
//           console.log(doc.id);
//         });
//       })
//       .catch(err => {
//         console.log('Error getting documents', err);
//       });
// }

// export const getRecipes = () => {
//     let output = 
//     firestore.collection("recipes").get()
//         .then(function(querySnapshot) {
//             querySnapshot.forEach(function(doc) {
//                 console.log(doc.id, " => ", doc.data());
//                 return doc.data()
//             });
//         });
//     return output
// }

export const createRecipesDocument = ({ id, topic, title, directions, ingredients, linkUrl }) => {
    firestore.collection("recipes").add({
        id,
        title,
        topic,
        directions,
        ingredients,
        linkUrl
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        firestore.collection('recipes').doc(`${docRef.id}`).set({
            id: docRef.id
        }, { merge: true });
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

firebase.initializeApp(config);

// export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase;