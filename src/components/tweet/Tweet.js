import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { doc } from 'firebase/firestore/lite';
import moment from 'moment';

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
  LIGHT_GREY_TEXT_COLOR,
} from '../../styles/Style';
import IconButton from '../button/IconButton';
import AvatarButton from '../button/AvatarButton';
import { getUserById } from '../../api/user';
import { updateTweet } from '../../api/tweet';
import {
  TWEET_DETAIL,
  PROFILE,
} from '../../constants/ScreenName';
import tempAvatar from '../../assets/avatar4.png';
import { setUser } from '../../redux/userSlice';

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
  userRetweeted,
  isOnFeed,
}) {
  const currentUser = useSelector((state) => state.user);
  const navigation = useNavigation();

  const [userPostedData, setuserPostedData] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [retweetCount, setRetweetCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const retweetHandle = () => {};

  const likeHandle = () => {};

  const commentHandle = () => {};

  const shareHandle = () => {};

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
    //Lấy thông tin người đăng tweet bằng userPosted
    getUserById(userPosted)
      .then((doc) => {
        //Lấy thông tin người post
        setuserPostedData({
          ...doc.data(),
          userId: doc.id,
        });
        //Lấy thông tin số like, retweet, comment
        setLikeCount(userLiked.length);
        setRetweetCount(userRetweeted.length);
        setCommentCount(comments.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const avatarHandle = (userId) => {
    navigation.navigate(PROFILE, {
      userId: userId,
    });
  };

  const tweetHandle = () => {
    navigation.navigate(TWEET_DETAIL, {
      tweetId,
      userPosted,
      textContent,
      mediaContent,
      dateCreated,
      referedPostId,
      userMentioned,
      comments,
      userLiked,
      userRetweeted,
      isOnFeed,
    });
  };

  return isOnFeed ? (
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
              />
              <Text>{retweetCount}</Text>
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
                  isLiked ? LIKED_COLOR : DEFAULT_COLOR
                }
              />
              <Text
                style={
                  isLiked
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
    <View
      style={[GLOBAL_STYLES.container, styles1.container]}
    >
      <TouchableOpacity
        style={styles1.userContainer}
        onPress={() => avatarHandle(userPostedData.userId)}
      >
        <Image
          style={styles1.userAvatar}
          source={{ uri: userPostedData.avatar }}
        />
        <View style={styles1.userText}>
          <Text style={GLOBAL_STYLES.fullname}>
            {userPostedData.fullname}
          </Text>
          <Text style={GLOBAL_STYLES.username}>
            {'@' + userPostedData.username}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles1.contentContainer}>
        {textContent && (
          <Text
            style={[
              GLOBAL_STYLES.text,
              styles1.textContent,
            ]}
          >
            {textContent}
          </Text>
        )}
        {mediaContent != '' && (
          <Image
            style={styles1.mediaContent}
            source={{ uri: mediaContent }}
            resizeMode="contain"
          />
        )}
      </View>
      <Text
        style={[
          GLOBAL_STYLES.username,
          styles1.information1,
        ]}
      >
        {moment(dateCreated).format('hh:mm • DD/MM/YYYY')}
      </Text>
      <View style={styles1.information2}>
        <View style={styles1.countInfo}>
          <Text style={GLOBAL_STYLES.fullname}>
            {commentCount}
          </Text>
          <Text style={GLOBAL_STYLES.username}>
            {' Comments'}
          </Text>
        </View>
        <View style={styles1.countInfo}>
          <Text style={GLOBAL_STYLES.fullname}>
            {retweetCount}
          </Text>
          <Text style={GLOBAL_STYLES.username}>
            {' Retweets'}
          </Text>
        </View>
        <View style={styles1.countInfo}>
          <Text style={GLOBAL_STYLES.fullname}>
            {likeCount}
          </Text>
          <Text style={GLOBAL_STYLES.username}>
            {' Likes'}
          </Text>
        </View>
      </View>
      <View style={styles1.interactionBar}>
        <View>
          <IconButton
            icon="comment"
            type="evilicon"
            size={30}
            onPress={() => commentHandle()}
          />
        </View>
        {
          /* retweet */
          <View>
            <IconButton
              icon="retweet"
              type="evilicon"
              size={30}
              onPress={() => retweetHandle()}
            />
          </View>
        }
        {
          /* liked */
          <View style={styles1.buttonWithCount}>
            <IconButton
              icon="heart"
              type="evilicon"
              size={30}
              onPress={() => likeHandle()}
              color={isLiked ? LIKED_COLOR : DEFAULT_COLOR}
            />
          </View>
        }

        <IconButton
          icon="share-apple"
          type="evilicon"
          size={30}
          onPress={() => shareHandle()}
          color={DEFAULT_COLOR}
        />
      </View>
    </View>
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

const styles1 = StyleSheet.create({
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
  countInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  information1: {
    borderBottomColor: LIGHT_GREY_TEXT_COLOR,
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    paddingTop: 10,
    width: '100%',
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
