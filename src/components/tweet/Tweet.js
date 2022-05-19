import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { doc } from 'firebase/firestore/lite';
import moment from 'moment';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
  ShineOverlay,
} from 'rn-placeholder';

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
import { getUserById, updateUser } from '../../api/user';
import { getTweetById, updateTweet } from '../../api/tweet';
import {
  TWEET_DETAIL,
  PROFILE,
  TWEET_POST,
  COMMENT_POST,
} from '../../constants/ScreenName';
import tempAvatar from '../../assets/avatar4.png';
import {
  dislikeTweet,
  likeTweet,
  setUser,
} from '../../redux/userSlice';
import QuotedTweet from './QuotedTweet';

export default function Tweet({ tweetId, isOnFeed }) {
  const currentUser = useSelector((state) => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [userLiked, setUserLiked] = useState([]);
  const [tweetData, setTweetData] = useState({});
  const [userPostedData, setUserPostedData] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [retweetCount, setRetweetCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const retweetHandle = () => {
    navigation.navigate(TWEET_POST, {
      navigation,
      referedTweetId: tweetId,
    });
  };

  const likeHandle = () => {
    const newLiked = [...currentUser.liked];
    const newUserLiked = [...userLiked];
    if (!isLiked) {
      setLikeCount((pre) => pre + 1);
      newLiked.push(tweetId);
      dispatch(likeTweet({ tweetId }));
      //Update Tweet
      setUserLiked((pre) => {
        newUserLiked.push(currentUser.userId);
        updateTweet(tweetId, {
          userLiked: newUserLiked,
        })
          .then(() => {
            //Update User
            updateUser(currentUser.userId, {
              liked: newLiked,
            }).catch((error) => {
              console.log(error);
            });
          })
          .catch((error) => {
            console.log(error);
          });
        return newUserLiked;
      });
      updateUser(currentUser.userId, {});
    } else {
      setLikeCount((pre) => pre - 1);
      newLiked.splice(newLiked.indexOf(tweetId), 1);
      dispatch(dislikeTweet({ tweetId }));
      //Update tweet
      setUserLiked((pre) => {
        const index = newUserLiked.indexOf(
          currentUser.userId
        );
        if (index != -1) {
          newUserLiked.splice(index, 1);
        }
        updateTweet(tweetId, {
          userLiked: newUserLiked,
        })
          .then(() => {
            //Update User
            updateUser(currentUser.userId, {
              liked: newLiked,
            }).catch((error) => {
              console.log(error);
            });
          })
          .catch((error) => {
            console.log(error);
          });
        return newUserLiked;
      });
    }

    // console.log(currentUser.liked);
    // console.log(userLiked);

    // updateTweet(tweetId, { userLiked: userLiked })
    //   .then(() => {
    //     console.log('Update Tweet Like');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // updateUser(currentUser.userId, {
    //   liked: currentUser.liked,
    // })
    //   .then(() => {
    //     console.log('Updated user');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const commentHandle = () => {
    navigation.navigate(COMMENT_POST, {
      tweetId,
    });
  };

  const shareHandle = () => {};

  const getTimeStamp = () => {
    const day = tweetData.dateCreated.getDate();
    const month = tweetData.dateCreated.getMonth();
    const year = tweetData.dateCreated.getFullYear();

    moment.updateLocale('vi', {
      // relativeTime: {
      //   future: 'in %s',
      //   past: '%s ago',
      //   h: 'an hour',
      //   hh: '%d seconds',
      //   // s: 'a few seconds',
      //   // ss: '%d seconds',
      //   m: 'a minute',
      //   mm: '%d minutes',
      //   d: 'a day',
      //   dd: '%d days',
      //   w: 'a week',
      //   ww: '%d weeks',
      //   M: 'a month',
      //   MM: '%d months',
      //   y: 'a year',
      //   yy: '%d years',
      // },
    });
    return moment([year, month, day]).fromNow();
  };

  const avatarHandle = (userId) => {
    navigation.navigate(PROFILE, {
      userId: userId,
    });
  };

  const tweetHandle = () => {
    navigation.push(TWEET_DETAIL, {
      tweetId,
      isOnFeed,
    });
  };

  //lấy dữ liệu tweet và người dùng
  useEffect(() => {
    getTweetById(tweetId)
      .then((tweet) => {
        setTweetData({
          ...tweet.data(),
          dateCreated: new Date(
            tweet.data().dateCreated.toDate()
          ),
        });
        getUserById(tweet.data().userPosted)
          .then((user) => {
            setUserPostedData({
              ...user.data(),
              userId: user.id,
            });
            setUserLiked(tweet.data().userLiked);
            setLikeCount(tweet.data().userLiked.length);
            setCommentCount(tweet.data().comments.length);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (userPostedData.userId == currentUser.userId) {
      setUserPostedData({
        ...userPostedData,
        avatar: currentUser.avatar,
      });
    }
  }, [currentUser.avatar]);

  useEffect(() => {
    if (currentUser.liked.indexOf(tweetId) != -1) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [currentUser.liked]);

  return isLoading ? (
    <View style={styles.loadingScreen}>
      <Placeholder
        Left={PlaceholderMedia}
        Animation={ShineOverlay}
        style={{ borderRadius: 100 }}
      >
        <PlaceholderLine
          height={30}
          width={45}
          style={{ padding: 15 }}
        />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
          }}
        >
          <PlaceholderMedia
            style={{ height: 20, width: 25 }}
          />
          <PlaceholderMedia
            style={{ height: 20, width: 25 }}
          />
          <PlaceholderMedia
            style={{ height: 20, width: 25 }}
          />
          <PlaceholderMedia
            style={{ height: 20, width: 25 }}
          />
        </View>
      </Placeholder>
    </View>
  ) : isOnFeed ? (
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

        {tweetData.textContent != '' && (
          <Text
            style={[GLOBAL_STYLES.text, styles.textContent]}
          >
            {tweetData.textContent}
          </Text>
        )}

        {tweetData.mediaContent != '' && (
          <Image
            source={{ uri: tweetData.mediaContent }}
            resizeMode="contain"
            style={styles.mediaContent}
          />
        )}
        {tweetData.referedPostId != '' && (
          <QuotedTweet
            tweetId={tweetData.referedPostId}
          ></QuotedTweet>
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
            {/* <Text>{commentCount}</Text> */}
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
              {/* <Text>{retweetCount}</Text> */}
            </View>
          }
          {
            /* liked */
            <View style={styles.buttonWithCount}>
              <IconButton
                icon="heart"
                type="evilicon"
                size={28}
                onPress={likeHandle}
                color={
                  isLiked ? LIKED_COLOR : DEFAULT_COLOR
                }
              />
              {/* <Text
                style={
                  isLiked
                    ? styles.likedColor
                    : styles.defaultColor
                }
              >
                {likeCount}
              </Text> */}
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
        {tweetData.textContent && (
          <Text
            style={[
              GLOBAL_STYLES.text,
              styles1.textContent,
            ]}
          >
            {tweetData.textContent}
          </Text>
        )}
        {tweetData.mediaContent != '' && (
          <Image
            style={styles1.mediaContent}
            source={{ uri: tweetData.mediaContent }}
            resizeMode="contain"
          />
        )}

        {tweetData.referedPostId != '' && (
          <>
            <Text>{'\n'}</Text>
            <QuotedTweet
              tweetId={tweetData.referedPostId}
            ></QuotedTweet>
          </>
        )}
      </View>
      <Text
        style={[
          GLOBAL_STYLES.username,
          styles1.information1,
        ]}
      >
        {moment(tweetData.dateCreated).format(
          'hh:mm • DD/MM/YYYY'
        )}
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
              onPress={likeHandle}
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
  loadingScreen: {
    paddingLeft: 10,
    paddingRight: 10,
    width: '95%',
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
    paddingLeft: 10,
    paddingRight: 10,
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
