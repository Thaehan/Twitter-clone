import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';

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
import { useSelector } from 'react-redux';
import moment from 'moment';

export default function Detail({
  navigation,
  tweetId,
  userPostedData,
  textContent,
  mediaContent,
  dateCreated,
  referedPostId,
  userMentioned,
}) {
  const currentUser = useSelector((state) => state.user);

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [retweets, setRetweets] = useState(0);
  const [tweetRetweeted, setTweetRetweeted] =
    useState(false);
  const [tweetLiked, setTweetLiked] = useState(false);

  const retweetTweet = () => {
    setTweetRetweeted(!tweetRetweeted);
    setRetweets(tweetRetweeted ? 0 : 1);
  };

  const likeTweet = () => {
    setTweetLiked(!tweetLiked);
    setLikes(tweetLiked ? 0 : 1);
  };

  useEffect(() => {
    //get all comment of user
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userContainer}>
        <Image
          style={styles.userAvatar}
          source={{ uri: userPostedData.avatar }}
          resizeMode="contain"
        />
        <View style={styles.userText}>
          <Text>{userPostedData.fullname}</Text>
          <Text>{userPostedData.username}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        {textContent && (
          <Text style={styles.textContent}>
            {textContent}
          </Text>
        )}
        {mediaContent != '' && (
          <Image
            style={styles.mediaContent}
            source={{ uri: mediaContent }}
            resizeMode="contain"
          />
        )}
      </View>
      <Text style={styles.information1}>
        {moment(dateCreated).format('DD/MM/YYYY')}
      </Text>
      <View style={styles.information2}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
      <View style={styles.interactionBar}>
        <View>
          <IconButton
            icon="comment"
            type="evilicon"
            size={30}
            onPress={() => {}}
          />
        </View>
        {
          /* retweet */
          <View>
            <IconButton
              icon="retweet"
              type="evilicon"
              size={30}
              onPress={() => {}}
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
              icon="heart"
              type="evilicon"
              size={30}
              onPress={() => {}}
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
          icon="share-apple"
          type="evilicon"
          size={30}
          onPress={() => {}}
          color={DEFAULT_COLOR}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    borderBottomColor: DARK_GREY_TEXT_COLOR,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },
  contentContainer: {},
  information1: {},
  information2: {},
  interactionBar: {},
  likedColor: {
    color: LIKED_COLOR,
  },
  mediaContent: {
    alignSelf: 'center',
    borderRadius: 8,
    height: 350,
    width: '90%',
  },
  retweetedColor: {
    color: RETWEET_COLOR,
  },
  textContent: {},
  userAvatar: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  userContainer: {
    flexDirection: 'row',
  },
  userText: {},
});
