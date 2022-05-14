import { View, Text } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

import IconButton from '../../components/button/IconButton';

export default function CommentPost({ navigation, route }) {
  const currentUser = useSelector((state) => state.user);
  const [textContent, setTextContent] = useState('');
  const [mediaContent, setMediaContent] = useState(null);

  const mediaChoosingHandle = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setMediaContent(result.uri);
    }
  };

  const uploadMediaHandle = async () => {
    upLoadImage(mediaContent)
      .then((imageUrl) => {
        //onsole.log(imageUrl);
        setMediaContent(imageUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Comment',
      headerLeft: () => {
        return (
          <IconButton
            type="ionicon"
            icon="ios-arrow-back-outline"
            onPress={() => navigation.goBack()}
          />
        );
      },
    });
  }, [currentUser.avatar]);

  return (
    <View>
      <Text>{route.params.tweetId}</Text>
    </View>
  );
}
