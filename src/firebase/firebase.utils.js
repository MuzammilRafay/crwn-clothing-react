import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//last 2 import auto atach to firebase variable

const config = {
  apiKey: "AIzaSyAzvEZa1uXgvozycaRbhCsqyoJ6sJQwbXg",
  authDomain: "crwn-db-8b2d2.firebaseapp.com",
  databaseURL: "https://crwn-db-8b2d2.firebaseio.com",
  projectId: "crwn-db-8b2d2",
  storageBucket: "crwn-db-8b2d2.appspot.com",
  messagingSenderId: "1028263004516",
  appId: "1:1028263004516:web:3a6cf31578da23f33b5271",
  measurementId: "G-MZGYHNDTEL",
};

firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // console.log(userAuth.uid, "userAuth");

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
