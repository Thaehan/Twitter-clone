import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

import { storage, db, app, auth } from '../firebase';

//Nhận vào image uri location, trả về image cloude url
const upLoadImage = async (uri) => {
  try {
    const imageName = new Date().toString();
    const response = await fetch(uri);
    const blob = await response.blob();

    var storageRef = ref(
      storage,
      `images/${auth.currentUser.uid}/${imageName}`
    );
    const image = await uploadBytes(storageRef, blob, {
      name: 'newImage',
    });
    const imageUrl = getDownloadURL(image.ref);
    return imageUrl;
  } catch (error) {
    console.log(error);
  }
};

const deleteImage = async (uri) => {
  try {
    const imageRef = ref(storage, uri);
    await deleteObject(imageRef);
  } catch (error) {
    console.log(error);
  }
};

export { upLoadImage, deleteImage };
