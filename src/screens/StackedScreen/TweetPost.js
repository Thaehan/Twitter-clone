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
  useEffect,
  useState,
  useLayoutEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

import {
  SCREEN_WIDTH,
  BACKGROUND_COLOR,
  GLOBAL_STYLES,
  HORI_PAD,
  BLACK_TEXT_COLOR,
  MAIN_COLOR,
  LIGHT_GREY_TEXT_COLOR,
} from '../../styles/Style';
import { createTweet } from '../../api/tweet';
import PrimaryButton from '../../components/button/PrimaryButton';
import IconButton from '../../components/button/IconButton';
import { upLoadImage, deleteImage } from '../../api/image';
import QuotedTweet from '../../components/tweet/QuotedTweet';
const CHAR_LIMIT = 280;
export default function TweetPost({ navigation, route }) {
  const currentUser = useSelector((state) => state.user);
  const { referedTweetId } = route.params;
  const [textContent, setTextContent] = useState('');
  const [mediaContent, setMediaContent] = useState(null);
  const [textBoxHeight, setTextBoxHeight] = useState(70);
  const [imageUrl, setImageUrl] = useState(
    'https://firebasestorage.googleapis.com/v0/b/twitter-clone-5bfb8.appspot.com/o/images%2FXXQXEw2JgwXkewtfm42RsNdddcn2%2FTue%20Apr%2012%202022%2001%3A15%3A16%20GMT%2B0700%20(%2B07)?alt=media&token=5e822d9e-8e4b-4421-986c-02dbb96d22bd'
  );

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

  const tweetPostingHandle = () => {
    if (textContent == '' && mediaContent == null) {
      alert("You can't post empty tweet");
    } else if (textContent.length > CHAR_LIMIT) {
      alert('You had reached maximum text length');
    } else {
      if (mediaContent != '')
        upLoadImage(mediaContent)
          .then((imageUrl) => {
            //onsole.log(imageUrl);
            //setMediaContent(imageUrl)
            //console.log(imageUrl)
            createTweet(
              currentUser.userId,
              textContent,
              imageUrl,
              [],
              referedTweetId
            );
          })
          .catch((error) => {
            console.log(error);
          });
      else {
        createTweet(
          currentUser.userId,
          textContent,
          mediaContent,
          [],
          referedTweetId
        ).catch((error) => {
          console.log(error);
        });
      }

      navigation.goBack();
    }
  };

  const tweetTextContentHandle = (newText) => {
    setTextContent(newText);
  };

  const cameraHandle = () => { };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <PrimaryButton
            title={'Tweet'}
            onPress={tweetPostingHandle}
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
                console.log(textContent);
                setTextBoxHeight(
                  Math.max(
                    150,
                    (70 * textContent.length) / 40
                  )
                );
              }}
              //numberOfLines={}
              placeholder="Type something here..."
              multiline
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
            {referedTweetId != null && (
              <QuotedTweet
                tweetId={referedTweetId}
              ></QuotedTweet>
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
    height: SCREEN_WIDTH * 0.811,
    width: SCREEN_WIDTH * 0.811,
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
