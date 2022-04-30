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
import {} from 'firebase/storage';

import { storage, db, app, auth } from '../firebase';
import { MessageModel } from '../models';

const collectionName = 'messages';
const messageCollection = collection(db, collectionName);

const createMessage = async (
  content = '',
  senderId,
  recieverId,
  type = 'text',
  conversationId,
  isRead = false
) => {
  try {
    const newMessage = MessageModel(
      (content = content),
      (senderId = senderId),
      (recieverId = recieverId),
      (type = type),
      (conversationId = conversationId),
      (isRead = isRead)
    );

    await addDoc(messageCollection, newMessage);
  } catch (error) {
    alert(error);
  }
};

const getMessageById = async (id) => {
  const docRef = doc(db, collectionName, id);
  try {
    const doc = await getDoc(docRef);
    return doc;
  } catch (e) {
    console.log(e);
  }
};

const getMultipleMessage = async (
  param1 = 'content',
  operation = '!=',
  param2 = ''
) => {
  try {
    const q = query(
      messageCollection,
      where(param1, operation, param2)
    );
    const docs = (await getDocs(q)).docs;
    return docs;
  } catch (e) {
    console.log(e);
  }
};

//params: docId (String), change parto change. Ex {}
//Usage ex update(id,{bio:"newBio"})
const updateMessage = async (id, change) => {
  try {
    const docRef = doc(db, collectionName, id);
    updateDoc(docRef, change);
  } catch (error) {
    console.log(error);
  }
};

const deleteMessageById = async (id) => {
  try {
    const docRef = doc(db, collectionName, id);
    deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
};

export {
  createMessage,
  getMessageById,
  getMultipleMessage,
  updateMessage,
  deleteMessageById,
};
