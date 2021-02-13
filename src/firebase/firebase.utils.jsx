import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
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

export const createRecipesDocument = ({ id, topic, title, directions, ingredients, picture, date }) => {
    firestore.collection("recipes").add({
        id,
        title,
        topic,
        directions,
        ingredients,
        picture,
        date
    })
    .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
        firestore.collection('recipes').doc(`${docRef.id}`).set({
            id: docRef.id
        }, { merge: true });
    })
    .catch(error => {
        console.error("Error adding document: ", error);
    });
}

export const getRecipes = () => {
    const recipes = firestore.collection("recipes").get()
        .then(querySnapshot => {
            return querySnapshot.docs.map(doc => doc.data());
        })
    return recipes;
}

export const uploadImage = (file) => {
    const storageRef = firebase.storage().ref();
    const imagesRef = storageRef.child(file.name);
    imagesRef.put(file);
};

export const dowloadFile = (filename) => {
    const storageRef = firebase.storage().ref();
    return storageRef.child(filename).getDownloadURL();
};

firebase.initializeApp(config);

// export const auth = firebase.auth()
export const firestore = firebase.firestore();

export default firebase;