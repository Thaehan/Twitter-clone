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
import { TweetModel } from '../models';

const collectionName = 'tweets';
const tweetCollection = collection(db, collectionName);

const createTweet = (
  userPosted,
  textContent = '',
  mediaContent = '',
  userMentioned = '',
  referedPostId = ''
) => {
  const newTweet = TweetModel(
    (userPosted = userPosted),
    (textContent = textContent),
    (mediaContent = mediaContent),
    (userMentioned = userMentioned),
    (referedPostId = referedPostId)
  );

  addDoc(tweetCollection, newTweet)
    .then((data) => {
      alert('Created new tweet data!');
    })
    .catch((error) => {
      alert(error);
    });
};

const getTweetById = async (id) => {
  const docRef = doc(db, collectionName, id);
  try {
    const doc = await getDoc(docRef);
    return doc;
  } catch (e) {
    console.log(e);
  }
};

const getMultipleTweet = async (
  param1 = 'content',
  operation = '!=',
  param2 = ''
) => {
  try {
    const q = query(
      tweetCollection,
      where(param1, operation, param2)
    );
    const docs = (await getDocs(q)).docs;
    return docs;
  } catch (e) {
    console.log(e);
  }
};

//params: docId (String), change (Object);
const updateTweet = async (id, change) => {
  try {
    const oldData = await getTweetById(id);
    const docRef = doc(db, collectionName, id);
    updateDoc(docRef, { ...oldData, ...change });
  } catch (error) {
    console.log(error);
  }
};

const deleteTweetById = async (id) => {
  try {
    const docRef = doc(db, collectionName, id);
    deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
};

export {
  createTweet,
  getTweetById,
  getMultipleTweet,
  updateTweet,
  deleteTweetById,
};
