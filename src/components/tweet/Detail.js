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
  LIGHT_GREY_TEXT_COLOR,
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
  userLiked,
  userRetweeted,
}) {
  const currentUser = useSelector((state) => state.user);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [retweets, setRetweets] = useState(0);
  const [tweetRetweeted, setTweetRetweeted] =
    useState(false);
  const [tweetLiked, setTweetLiked] = useState(false);

  const retweetHandle = () => {
    setTweetRetweeted(!tweetRetweeted);
    setRetweets(tweetRetweeted ? 0 : 1);
  };

  const likeHandle = () => {
    setTweetLiked(!tweetLiked);
    setLikes(tweetLiked ? 0 : 1);
  };

  useEffect(() => {
    //get all comment of user
  }, []);

  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <TouchableOpacity style={styles.userContainer}>
        <Image
          style={styles.userAvatar}
          source={{ uri: userPostedData.avatar }}
        />
        <View style={styles.userText}>
          <Text style={GLOBAL_STYLES.fullname}>
            {userPostedData.fullname}
          </Text>
          <Text style={GLOBAL_STYLES.username}>
            {'@' + userPostedData.username}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        {textContent && (
          <Text
            style={[GLOBAL_STYLES.text, styles.textContent]}
          >
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
      <Text
        style={[
          GLOBAL_STYLES.username,
          styles.information1,
        ]}
      >
        {moment(dateCreated).format('hh:mm • DD/MM/YYYY')}
      </Text>
      <View style={styles.information2}>
        <View style={styles.commentInfo}>
          <Text style={GLOBAL_STYLES.fullname}>
            {comments}
          </Text>
          <Text style={GLOBAL_STYLES.username}>
            {' Retweets'}
          </Text>
        </View>
        <View style={styles.retweetInfo}>
          <Text style={GLOBAL_STYLES.fullname}>
            {likes}
          </Text>
          <Text style={GLOBAL_STYLES.username}>
            {' Likes'}
          </Text>
        </View>
      </View>
      <View style={styles.interactionBar}>
        <View>
          <IconButton
            icon="comment"
            type="evilicon"
            size={28}
            onPress={() => {}}
          />
        </View>
        {
          /* retweet */
          <View>
            <IconButton
              icon="retweet"
              type="evilicon"
              size={28}
              onPress={() => {}}
              color={
                tweetRetweeted
                  ? RETWEET_COLOR
                  : DEFAULT_COLOR
              }
            />
          </View>
        }
        {
          /* liked */
          <View style={styles.buttonWithCount}>
            <IconButton
              icon="heart"
              type="evilicon"
              size={28}
              onPress={() => {}}
              color={
                tweetLiked ? LIKED_COLOR : DEFAULT_COLOR
              }
            />
          </View>
        }

        <IconButton
          icon="share-apple"
          type="evilicon"
          size={28}
          onPress={() => {}}
          color={DEFAULT_COLOR}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentInfo: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: BACKGROUND_COLOR,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  contentContainer: {
    marginTop: 10,
    width: '100%',
  },
  information1: {
    borderBottomColor: LIGHT_GREY_TEXT_COLOR,
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    paddingTop: 5,
  },
  information2: {
    borderBottomColor: LIGHT_GREY_TEXT_COLOR,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 5,
    paddingTop: 5,
    width: '100%',
  },
  interactionBar: {
    borderBottomColor: LIGHT_GREY_TEXT_COLOR,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 5,
    paddingTop: 5,
    width: '100%',
  },
  likedColor: {
    color: LIKED_COLOR,
  },
  mediaContent: {
    borderRadius: 6,
    height: 380,
    marginTop: 10,
    width: '100%',
  },
  retweetInfo: {
    flexDirection: 'row',
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
    width: '50%',
  },
  userText: {
    marginLeft: 10,
  },
});
