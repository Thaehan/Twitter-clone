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
import { } from 'firebase/storage';

import { storage, db, app, auth } from '../firebase';
import { ConversationModel } from '../models';

const collectionName = 'conversations';
const conversationCollection = collection(
  db,
  collectionName
);

const createConversation = async (
  content = [],
  users = [],
) => {
  try {
    const newConversation = ConversationModel(
      (content = content),
      (users = users),
    );

    docId = await addDoc(conversationCollection, newConversation);
    return docId
  } catch (error) {
    alert(error);
  }
};

const getConversationById = async (id) => {
  const docRef = doc(db, collectionName, id);
  try {
    const doc = await getDoc(docRef);
    return doc;
  } catch (error) {
    console.log(error);
  }
};

const getMultipleConversation = async (
  param1 = 'users',
  operation = '!=',
  param2 = []
) => {
  try {
    const q = query(
      conversationCollection,
      where(param1, operation, param2)
    );
    const docs = (await getDocs(q)).docs;
    //console.log('CONVERSATION: ' + docs.length);

    return docs;
  } catch (error) {
    console.log(error);
  }
};

//params: docId (String), change parto change. Ex {}
//Usage ex update(id,{bio:"newBio"})
const updateConversation = async (id, change) => {
  try {
    const docRef = doc(db, collectionName, id);
    updateDoc(docRef, change);
  } catch (error) {
    console.log(error);
  }
};

const deleteConversationById = async (id) => {
  try {
    const docRef = doc(db, collectionName, id);
    deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
};

export {
  createConversation,
  getConversationById,
  getMultipleConversation,
  updateConversation,
  deleteConversationById,
};
