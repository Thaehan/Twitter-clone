import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {
  CONTENT_SCREEN_HEIGHT,
  GLOBAL_STYLES,
  SCREEN_WIDTH,
  MAIN_COLOR,
  BACKGROUND_COLOR,
  DARK_GREY_TEXT_COLOR,
  DEFAULT_COLOR,
  LIKED_COLOR,
  RETWEET_COLOR,
} from '../../styles/Style';

import IconButton from '../button/IconButton';
import { useState, useEffect } from 'react';
import { getUserById } from '../../api/user';
import { updateTweet } from '../../api/tweet';

import {
  TWEET_DETAIL,
} from '../../constants/ScreenName';
const onFeed = true;

export default function Tweet(props) {
  const currentUser = useSelector((state) => state.user);
  const navigation = useNavigation();







  const shareTweet = () => { };

  useEffect(() => {
    //Getting user posted data
    getUserById(props.userPosted).then((doc) => {
      setUserPosted({ ...doc.data(), userId: doc.id });
    });

  }, []);

  const avatarHandle = (userId) => {

  };

  const tweetHandle = (tweetId) => {
    navigation.navigate(TWEET_DETAIL, { tweetId: tweetId });
  };

  return onFeed ? (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => avatarHandle(userPosted.userId)}
        >
          <Image
            source={{ uri: userPosted.avatar }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.rightContainer}
        onPress={() => tweetHandle(props.tweetId)}
      >
        <View style={styles.userInfo}>
          <Text style={GLOBAL_STYLES.fullname}>
            {userPosted.fullname}
          </Text>
          <Text style={GLOBAL_STYLES.username}>
            {' '}
            {userPosted.username} {' . 1d'}
          </Text>
        </View>

        {props.textContent && (
          <Text style={GLOBAL_STYLES.text}>
            {props.textContent}
          </Text>
        )}



      </TouchableOpacity>
    </View>
  ) : (
    <View></View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    width: '12%',
  },
  buttonWithCount: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: BACKGROUND_COLOR,
    borderBottomColor: DARK_GREY_TEXT_COLOR,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },
  defaultColor: {
    color: DEFAULT_COLOR,
  },
  interactionBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  likedColor: {
    color: LIKED_COLOR,
  },
  retweetedColor: {
    color: RETWEET_COLOR,
  },
  rightContainer: {
    paddingLeft: 15,
    width: '88%',
  },
  userInfo: {
    flexDirection: 'row',
    paddingBottom: 5,
    textAlign: 'right',
  },
});
