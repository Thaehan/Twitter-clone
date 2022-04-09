import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  Timestamp,
} from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDZD0dNa5P0RrkliqTVSQALpBOfNfFZOtc',
  authDomain: 'twitter-clone-5bfb8.firebaseapp.com',
  projectId: 'twitter-clone-5bfb8',
  storageBucket: 'twitter-clone-5bfb8.appspot.com',
  messagingSenderId: '411924634090',
  appId: '1:411924634090:web:90d88045e92680d2eaba93',
  measurementId: 'G-C6C5W57VVZ',
};

const app = initializeApp(config);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  collection,
  addDoc,
  Timestamp,
};
