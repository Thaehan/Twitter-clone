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
import { NotificationModel } from '../models';

const collectionName = 'notifications';
const notificationCollection = collection(
  db,
  collectionName
);

const createNotification = async (
  textContent = '',
  hyperLink = '',
  fromUser = ''
) => {
  try {
    const newNotification = NotificationModel(
      (textContent = textContent),
      (hyperLink = hyperLink),
      (fromUser = fromUser)
    );

    await addDoc(notificationCollection, newNotification);
  } catch (error) {
    alert(error);
  }
};

const getNotificationById = async (id) => {
  const docRef = doc(db, collectionName, id);
  try {
    const doc = await getDoc(docRef);
    return doc;
  } catch (e) {
    console.log(e);
  }
};

const getMultipleNotification = async (
  param1 = 'content',
  operation = '!=',
  param2 = ''
) => {
  try {
    const q = query(
      notificationCollection,
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
const updateNotification = async (id, change) => {
  try {
    const docRef = doc(db, collectionName, id);
    updateDoc(docRef, change);
  } catch (error) {
    console.log(error);
  }
};

const deleteNotificationById = async (id) => {
  try {
    const docRef = doc(db, collectionName, id);
    deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
};

export {
  createNotification,
  getNotificationById,
  getMultipleNotification,
  updateNotification,
  deleteNotificationById,
};
