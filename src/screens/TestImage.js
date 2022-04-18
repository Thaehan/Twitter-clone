import React, { useState, useEffect } from 'react';
import {
  Button,
  Image,
  View,
  Platform,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { upLoadImage, deleteImage } from '../api/image';

export default function TestImage() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(
    'https://firebasestorage.googleapis.com/v0/b/twitter-clone-5bfb8.appspot.com/o/images%2FXXQXEw2JgwXkewtfm42RsNdddcn2%2FTue%20Apr%2012%202022%2001%3A15%3A16%20GMT%2B0700%20(%2B07)?alt=media&token=5e822d9e-8e4b-4421-986c-02dbb96d22bd'
  );

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadHandle = () => {
    upLoadImage(image)
      .then((imageUrl) => {
        console.log(imageUrl);
        alert('image uploaded');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteImageHandle = () => {
    deleteImage(imageUrl)
      .then(() => {
        alert('Deleted Image');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        title="Pick an image from camera roll"
        onPress={pickImage}
      />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <Button title="Upload image" onPress={uploadHandle} />
      <TextInput
        value={imageUrl}
        onChangeText={setImageUrl}
      />
      <Button
        title="Delete Image"
        onPress={deleteImageHandle}
      />
    </View>
  );
}
