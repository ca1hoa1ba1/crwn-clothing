import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD7pbgJvoq9xc1B04oDw0eluk_XoEgHw4s",
  authDomain: "crwn-clothing-db-a03d6.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-a03d6.firebaseio.com",
  projectId: "crwn-clothing-db-a03d6",
  storageBucket: "",
  messagingSenderId: "295458687569",
  appId: "1:295458687569:web:414ce66abb01cc45668670",
  measurementId: "G-NZW3GYF32P"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error createing user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
