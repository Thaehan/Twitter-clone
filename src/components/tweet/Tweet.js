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
import { updateTweet } from '../../api/tweet';
import {
  TWEET_DETAIL,
  PROFILE
} from '../../constants/ScreenName';
import tempAvatar from '../../assets/avatar4.png';
import { doc } from 'firebase/firestore/lite';
import moment from 'moment';
const onFeed = true;





export default function Tweet({
  tweetId,
  userPosted,
  textContent,
  mediaContent,
  dateCreated,
  referedPostId,
  userMentioned,
  comments,
  userLiked,
  userRetweeted
}) {
  const currentUser = useSelector((state) => state.user);
  const navigation = useNavigation();

  const [userPostedData, setuserPostedData] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [retweetCount, setRetweetCount] = useState(0);
  const [tweetRetweeted, setTweetRetweeted] = useState(false);
  const [tweetLiked, setTweetLiked] = useState(false);

  const retweetHandle = () => {
    //To do: Show retweet
    //Check if user retweeted 
    tweetRetweeted ?
      userRetweeted.splice(userRetweeted.indexOf(currentUser.userId), 1)
      : userRetweeted.push(currentUser.userId)
    //Update on database
    updateTweet(tweetId, { userRetweeted: userRetweeted })
    //Update on user end
    setTweetRetweeted(userRetweeted.includes(currentUser.userId));
    setRetweetCount(userRetweeted.length)
  };

  const likeHandle = () => {
    //Like tweet
    //Check if user liked to add or remove them from the list

    tweetLiked ?
      userLiked.splice(userLiked.indexOf(currentUser.userId), 1)
      : userLiked.push(currentUser.userId)
    //Update on database
    updateTweet(tweetId, { userLiked: userLiked })
    //Update on user end
    setTweetLiked(userLiked.includes(currentUser.userId));
    setLikeCount(userLiked.length)
  };

  const commentHandle = () => { };

  const shareHandle = () => { };

  const getTimeStamp = () => {
    const day = dateCreated.getDate();
    const month = dateCreated.getMonth();
    const year = dateCreated.getFullYear();

    moment.updateLocale('en', {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
      },
    });
    return moment([year, month, day]).fromNow();
  };

  useEffect(() => {
    getUserById(userPosted).then((doc) => {
      setuserPostedData({ ...doc.data(), userId: doc.id });
    });
    //Updating count
    setLikeCount(userLiked.length)
    setRetweetCount(userRetweeted.length)
    setCommentCount(comments.length)
    //Check if user liked
    setTweetLiked(userLiked.includes(currentUser.userId));
    setTweetRetweeted(userRetweeted.includes(currentUser.userId));





  }, []);

  const avatarHandle = (userId) => {
    navigation.navigate(PROFILE, {
      userId: userId,
    });

  };

  const tweetHandle = () => {
    navigation.navigate(TWEET_DETAIL, {
      tweetId,
      userPostedData,
      textContent,
      mediaContent,
      dateCreated,
      referedPostId,
      userMentioned,
      comments,
      userLiked,
      userRetweeted
    });
  };

  return onFeed ? (
    <TouchableOpacity
      style={styles.container}
      onPress={() => tweetHandle()}
    >
      <View style={styles.avatarContainer}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() =>
            avatarHandle(userPostedData.userId)
          }
        >
          <Image
            source={{ uri: userPostedData.avatar }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.userInfo}>
          <Text style={GLOBAL_STYLES.fullname}>
            {userPostedData.fullname}
          </Text>
          <Text
            style={[
              GLOBAL_STYLES.username,
              styles.username,
            ]}
          >
            {'@' + userPostedData.username + ' • '}
          </Text>
          <Text style={GLOBAL_STYLES.username}>
            {getTimeStamp()}
          </Text>
        </View>

        {textContent != '' && (
          <Text
            style={[GLOBAL_STYLES.text, styles.textContent]}
          >
            {textContent}
          </Text>
        )}

        {mediaContent != '' && (
          <Image
            source={{ uri: mediaContent }}
            resizeMode="contain"
            style={styles.mediaContent}
          />
        )}
        {/* Interaction bar */}
        <View style={styles.interactionBar}>
          <View style={styles.buttonWithCount}>
            <IconButton
              icon="comment"
              type="evilicon"
              size={28}
              onPress={() => commentHandle()}
            />
            <Text>{commentCount}</Text>
          </View>
          {
            /* retweet */
            <View style={styles.buttonWithCount}>
              <IconButton
                icon="retweet"
                type="evilicon"
                size={28}
                onPress={() => retweetHandle()}
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
                {retweetCount}
              </Text>
            </View>
          }
          {
            /* liked */
            <View style={styles.buttonWithCount}>
              <IconButton
                icon="heart"
                type="evilicon"
                size={28}
                onPress={() => likeHandle()}
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
            icon="share-apple"
            type="evilicon"
            size={28}
            onPress={shareHandle()}
            color={DEFAULT_COLOR}
          />
        </View>
      </View>
    </TouchableOpacity>
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
    flex: 1,
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
    // paddingTop: 15,
    marginTop: 10,
    width: '95%',
  },
  likedColor: {
    color: LIKED_COLOR,
  },
  mediaContent: {
    alignSelf: 'auto',
    borderRadius: 8,
    height: 310,
    marginTop: 10,
    width: '93%',
  },
  retweetedColor: {
    color: RETWEET_COLOR,
  },
  rightContainer: {
    paddingLeft: 15,
    width: '88%',
  },
  textContent: {
    textAlign: 'justify',
    width: '91%',
  },
  userInfo: {
    flexDirection: 'row',
    textAlign: 'right',
  },
  username: {
    paddingLeft: 5,
  },
});
