import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import { FirebaseConfig } from "./keys";

firebase.initializeApp(FirebaseConfig);

export const databaseRef = firebase.database().ref();
export const storageRef = firebase.storage().ref();
export const auth = firebase.auth();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();