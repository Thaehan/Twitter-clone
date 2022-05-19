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
  orderBy,
} from 'firebase/firestore/lite';
import {} from 'firebase/storage';

import { storage, db, app, auth } from '../firebase';
import { CommentModel } from '../models';

const collectionName = 'comments';
const commentCollection = collection(db, collectionName);

const createComment = async (
  tweetId,
  userComment,
  userLiked = [],
  textContent = '',
  mediaContent = ''
) => {
  try {
    const newComment = CommentModel(
      (tweetId = tweetId),
      (userComment = userComment),
      (userLiked = userLiked),
      (textContent = textContent),
      (mediaContent = mediaContent)
    );

    await addDoc(commentCollection, newComment);
  } catch (error) {
    alert(error);
  }
};

const getCommentById = async (id) => {
  const docRef = doc(db, collectionName, id);
  try {
    const doc = await getDoc(docRef);
    return doc;
  } catch (e) {
    console.log(e);
  }
};

const getMultipleComment = async (
  param1 = 'content',
  operation = '!=',
  param2 = '',
  orderBy = '',
  priority = 'desc'
) => {
  try {
    const q = query(
      commentCollection,
      where(param1, operation, param2)
      // orderBy(orderBy, priority)
    );
    const docs = (await getDocs(q)).docs;
    return docs;
  } catch (e) {
    console.log(e);
  }
};

//params: docId (String), change parto change. Ex {}
//Usage ex update(id,{bio:"newBio"})
const updateComment = async (id, change) => {
  try {
    const oldData = await getCommentById(id);
    const docRef = doc(db, collectionName, id);
    updateDoc(docRef, { ...oldData, ...change });
  } catch (error) {
    console.log(error);
  }
};

const deleteCommentById = async (id) => {
  try {
    const docRef = doc(db, collectionName, id);
    deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
};

export {
  createComment,
  getCommentById,
  getMultipleComment,
  updateComment,
  deleteCommentById,
};
