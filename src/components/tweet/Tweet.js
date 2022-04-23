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
import AvatarButton from '../button/AvatarButton';
import { useState, useEffect } from 'react';
import { getUserById } from '../../api/user';
import {
  CURRENT_PROFILE,
  OTHER_PROFILE,
  TWEET_DETAIL,
} from '../../constants/ScreenName';
import tempAvatar from '../../assets/avatar4.png';
import { doc } from 'firebase/firestore/lite';
const onFeed = true;

export default function Tweet(props) {
  const currentUser = useSelector((state) => state.user);
  const navigation = useNavigation();

  const [userPosted, setUserPosted] = useState({});
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [retweets, setRetweets] = useState(0);
  const [tweetRetweeted, setTweetRetweeted] =
    useState(false);
  const [tweetLiked, setTweetLiked] = useState(false);

  const findUser = (id) => {
    var result = userDatabase.filter((user) => {
      return user.userId == id;
    });
    setUserPosted(thaehan);
  };

  const retweetTweet = () => {
    setTweetRetweeted(!tweetRetweeted);
    setRetweets(tweetRetweeted ? 0 : 1);
  };

  const likeTweet = () => {
    setTweetLiked(!tweetLiked);
    setLikes(tweetLiked ? 0 : 1);
  };

  const commentTweet = () => {};

  const shareTweet = () => {};

  useEffect(() => {
    getUserById(props.userPosted).then((doc) => {
      setUserPosted({ ...doc.data(), userId: doc.id });
    });
  }, []);

  const avatarHandle = (userId) => {
    if (currentUser.userId == userId) {
      navigation.navigate(CURRENT_PROFILE, {
        userId: userId,
      });
    } else {
      navigation.navigate(OTHER_PROFILE, {
        userId: userId,
      });
    }
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

        {/*           {props.mediaContent && (

            )} */}
        {/* Interaction bar */}
        <View style={styles.interactionBar}>
          <View style={styles.buttonWithCount}>
            <IconButton
              icon="comment"
              onPress={() => commentTweet()}
            />
            <Text>{comments}</Text>
          </View>
          {
            /* retweet */
            <View style={styles.buttonWithCount}>
              <IconButton
                icon="autorenew"
                onPress={() => retweetTweet()}
                color={
                  tweetRetweeted
                    ? RETWEET_COLOR
                    : DEFAULT_COLOR
                }
              />
              <Text
                style={
                  tweetRetweeted
                    ? styles.retweetedColor
                    : styles.defaultColor
                }
              >
                {retweets}
              </Text>
            </View>
          }
          {
            /* liked */
            <View style={styles.buttonWithCount}>
              <IconButton
                icon="favorite-border"
                onPress={() => likeTweet()}
                color={
                  tweetLiked ? LIKED_COLOR : DEFAULT_COLOR
                }
              />
              <Text
                style={
                  tweetLiked
                    ? styles.likedColor
                    : styles.defaultColor
                }
              >
                {likes}
              </Text>
            </View>
          }

          <IconButton
            icon="share"
            onPress={shareTweet()}
            color={DEFAULT_COLOR}
          />
        </View>
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
