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
  PROFILE
} from '../../constants/ScreenName';
const onFeed = true;

export default function Tweet(props) {
  const currentUser = useSelector((state) => state.user);
  const navigation = useNavigation();

  const [userPosted, setUserPosted] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [reTweetCount, setRetweetCount] = useState(0);
  const [tweetRetweeted, setTweetRetweeted] = useState(false);
  const [tweetLiked, setTweetLiked] = useState(false);



  const retweetTweet = () => {
    //To do: Show retweet
    //Check if user retweeted
    tweetRetweeted ?
      props.userRetweeted.splice(props.userRetweeted.indexOf(currentUser.userId), 1)
      : props.userRetweeted.push(currentUser.userId)
    //Update on database
    updateTweet(props.tweetId, { userRetweeted: props.userRetweeted })
    //Update on user end
    setTweetRetweeted(props.userRetweeted.includes(currentUser.userId));
    setRetweetCount(props.userRetweeted.length)
  };

  const likeTweet = () => {
    //Like tweet
    //Check if user liked to add or remove them from the list

    tweetLiked ?
      props.userLiked.splice(props.userLiked.indexOf(currentUser.userId), 1)
      : props.userLiked.push(currentUser.userId)
    //Update on database
    updateTweet(props.tweetId, { userLiked: props.userLiked })
    //Update on user end
    setTweetLiked(props.userLiked.includes(currentUser.userId));
    setLikeCount(props.userLiked.length)
  };

  const commentTweet = () => { };

  const shareTweet = () => { };

  useEffect(() => {
    //Getting user posted data
    getUserById(props.userPosted).then((doc) => {
      setUserPosted({ ...doc.data(), userId: doc.id });
    });
    //Updating count
    setLikeCount(props.userLiked.length)
    setRetweetCount(props.userRetweeted.length)
    setCommentCount(props.comments.length)
    //Check if user liked
    setTweetLiked(props.userLiked.includes(currentUser.userId));
    setTweetRetweeted(props.userRetweeted.includes(currentUser.userId));

  }, []);

  const avatarHandle = (userId) => {
    navigation.navigate(PROFILE, {
      userId: userId,
    });

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
            <Text>{commentCount}</Text>
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
                {reTweetCount}
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
                {likeCount}
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
