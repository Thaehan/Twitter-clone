import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {
  useLayoutEffect,
  useState,
  useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { Icon } from 'react-native-elements';

import {
  SCREEN_WIDTH,
  BACKGROUND_COLOR,
  GLOBAL_STYLES,
  HORI_PAD,
  BLACK_TEXT_COLOR,
  MAIN_COLOR,
  LIGHT_GREY_TEXT_COLOR,
} from '../../styles/Style';
import IconButton from '../../components/button/IconButton';
import PrimaryButton from '../../components/button/PrimaryButton';
import { upLoadImage, deleteImage } from '../../api/image';
import { createComment } from '../../api/comment';
import { createNotification } from '../../api/notification';

export default function CommentPost({ navigation, route }) {
  const CHAR_LIMIT = 280;
  const currentUser = useSelector((state) => state.user);
  const { tweetId, ofUser } = route.params;
  const [textContent, setTextContent] = useState('');
  const [mediaContent, setMediaContent] = useState(null);
  const [textBoxHeight, setTextBoxHeight] = useState(70);
  const [imageUrl, setImageUrl] = useState(
    'https://firebasestorage.googleapis.com/v0/b/twitter-clone-5bfb8.appspot.com/o/images%2FXXQXEw2JgwXkewtfm42RsNdddcn2%2FTue%20Apr%2012%202022%2001%3A15%3A16%20GMT%2B0700%20(%2B07)?alt=media&token=5e822d9e-8e4b-4421-986c-02dbb96d22bd'
  );
  const cameraTakingHandle = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });


    if (!result.cancelled) {
      setMediaContent(result.uri);
    }
  };
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

  const commentHandle = async () => {
    console.log(textContent);
    if (textContent == '' && mediaContent == null) {
      alert("You can't post empty tweet");
    } else if (textContent.length > CHAR_LIMIT) {
      alert('You had reached maximum text length');
    } else {
      if (mediaContent != '' && mediaContent != null) {
        try {
          await upLoadImage(mediaContent);
          await createComment(
            tweetId,
            currentUser.userId,
            [],
            textContent,
            mediaContent
          );
          await createNotification(
            currentUser.userId,
            'comment',
            tweetId,
            ofUser
          );
          navigation.goBack();
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          console.log(textContent);
          await createComment(
            tweetId,
            currentUser.userId,
            [],
            textContent,
            ''
          );
          await createNotification(
            currentUser.userId,
            'comment',
            tweetId,
            ofUser
          );
          navigation.goBack();
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <PrimaryButton
            title={'Comment'}
            onPress={commentHandle}
          />
        );
      },
      headerTitle: ' ',
      headerLeft: () => {
        return (
          <IconButton
            type="ionicon"
            icon="close-outline"
            onPress={() => navigation.goBack()}
          />
        );
      },
    });
  });

  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.upperPart}>
          <View style={styles.avatarVanity}>
            <Image
              style={styles.avatar}
              source={{ uri: currentUser.avatar }}
            />
          </View>
          <View style={styles.contentArea}>
            <TextInput
              style={[
                styles.textInput,
                { height: textBoxHeight },
              ]}
              onChangeText={(newText) => {
                setTextContent(newText);
                setTextBoxHeight(
                  Math.max(
                    150,
                    (70 * textContent.length) / 40
                  )
                );
              }}
              //numberOfLines={}
              placeholder="Type something here..."
              multiline={true}
              keyboardType="default"
            />
            {mediaContent && (
              <View>
                <Image
                  source={{ uri: mediaContent }}
                  style={styles.mediaStyle}
                />
                <IconButton
                  //color={BLACK_TEXT_COLOR}
                  type={'ionicon'}
                  name={'close-outline'}
                  size={50}
                  onPress={() => { }}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      <View style={styles.lowwerPart}>
        <TouchableOpacity
          style={styles.choiceButton}
          onPress={() => cameraTakingHandle()}
        >
          <Icon
            style={{
              alignSelf: 'center',
            }}
            color={MAIN_COLOR}
            type={'evilicon'}
            name={'camera'}
            size={35}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.choiceButton}
          onPress={() => mediaChoosingHandle()}
        >
          <Icon
            style={{
              alignSelf: 'center',
            }}
            color={MAIN_COLOR}
            type={'evilicon'}
            name={'image'}
            size={35}
          />
        </TouchableOpacity>
        <View
          style={{
            alignContent: 'center',
            height: 60,
            justifyContent: 'center',
            position: 'absolute',
            right: HORI_PAD,
          }}
        >
          <Text
            style={{
              justifyContent: 'center',
              color:
                textContent.length <= CHAR_LIMIT
                  ? MAIN_COLOR
                  : 'red',
              alignSelf: 'flex-end',
              paddingLeft: HORI_PAD,
              fontSize: 25,
            }}
          >
            {textContent.length + '/' + CHAR_LIMIT}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  avatarVanity: {
    paddingTop: 12,
    width: 60,
  },
  choiceButton: {
    alignContent: 'center',
    borderColor: LIGHT_GREY_TEXT_COLOR,
    borderRadius: 15,
    borderWidth: 1,
    height: 60,
    justifyContent: 'center',
    marginBottom: 5,
    marginHorizontal: HORI_PAD,
    width: 60,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: HORI_PAD,
    width: SCREEN_WIDTH,
  },
  contentArea: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
  },

  lowwerPart: {
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
  mediaStyle: {
    borderRadius: 15,
    height: SCREEN_WIDTH * 0.81,
    width: SCREEN_WIDTH * 0.81,
  },
  textInput: {
    color: BLACK_TEXT_COLOR,
    fontSize: 22,
    paddingTop: HORI_PAD,
    textAlign: 'justify',
    textAlignVertical: 'top',
  },
  upperPart: {
    alignSelf: 'auto',
    flexDirection: 'row',
  },
});
