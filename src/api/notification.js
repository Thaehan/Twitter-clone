import {
  doc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore/lite';
import {
  createUserWithEmailAndPassword,
  deleteUser,
} from 'firebase/auth';

import { storage, db, app, auth } from '../firebase';
import UserModel from '../models/UserModel';

const collectionName = 'users';
const userCollection = collection(db, collectionName);

const createUser = (
  email,
  password,
  username,
  fullname,
  dateOfBirth,
  country
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const newUser = UserModel(
        username,
        fullname,
        email,
        dateOfBirth,
        country,
        'https://firebasestorage.googleapis.com/v0/b/twitter-clone-5bfb8.appspot.com/o/images%2Fno-avatar.jpg?alt=media&token=b0950486-9917-4293-a8d1-376fa4a6c578' //No-avatar
      );

      addDoc(userCollection, newUser)
        .then((data) => {
          alert('Created new user data!');
        })
        .catch((error) => {
          alert(error);
        });
    })
    .catch((error) => {
      alert(error);
    });
};

const getUserById = async (id) => {
  const docRef = doc(db, collectionName, id);
  try {
    const doc = await getDoc(docRef);
    return doc;
  } catch (e) {
    console.log(e);
  }
};

const getMultipleUsers = async (
  param1 = 'username',
  operation = '!=',
  param2 = ''
) => {
  try {
    const q = query(
      userCollection,
      where(param1, operation, param2)
    );
    const docs = (await getDocs(q)).docs;
    return docs;
  } catch (e) {
    console.log(e);
  }
};

//params: docId (String), change (Object);
const updateUser = async (id, change) => {
  try {
    const oldData = await getUserById(id);
    const docRef = doc(db, collectionName, id);
    updateDoc(docRef, { ...oldData, ...change });
  } catch (error) {
    console.log(error);
  }
};

export {
  createUser,
  getUserById,
  getMultipleUsers,
  updateUser,
};
