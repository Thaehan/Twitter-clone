import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
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
  BLACK_TEXT_COLOR,
} from '../../styles/Style';
import IconButton from '../button/IconButton';
import AvatarButton from '../button/AvatarButton';
import { getUserById, updateUser } from '../../api/user';
import { getTweetById, updateTweet } from '../../api/tweet';
import {
  TWEET_DETAIL,
  PROFILE,
} from '../../constants/ScreenName';
import tempAvatar from '../../assets/avatar4.png';
import { setUser } from '../../redux/userSlice';

export default function QuotedTweet({ tweetId }) {
  const currentUser = useSelector((state) => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const [tweetData, setTweetData] = useState({});
  const [userPostedData, setuserPostedData] = useState({});

  const getTimeStamp = () => {
    const day = tweetData.dateCreated.getDate();
    const month = tweetData.dateCreated.getMonth();
    const year = tweetData.dateCreated.getFullYear();

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

  const avatarHandle = (userId) => {
    navigation.navigate(PROFILE, {
      userId: userId,
    });
  };
  var isOnFeed = false;
  const tweetHandle = () => {
    navigation.navigate(TWEET_DETAIL, {
      tweetId,
      isOnFeed,
    });
  };

  //lấy dữ liệu tweet và người dùng
  useEffect(() => {
    console.log(tweetId);
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
            setuserPostedData({
              ...user.data(),
              userId: user.id,
            });
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

  useEffect(() => {}, []);

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
  ) : (
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
          onPress={() => {
            //avatarHandle(userPostedData.userId)
          }}
        >
          <Image
            source={{ uri: userPostedData.avatar }}
            style={styles.userAvatar}
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
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    paddingTop: 3,
    width: '8%',
  },
  buttonWithCount: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    alignSelf: 'center',
    backgroundColor: BACKGROUND_COLOR,
    borderColor: LIGHT_GREY_TEXT_COLOR,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    flex: 1,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingTop: 5,
    width: '95%',
  },
  defaultColor: {
    color: DEFAULT_COLOR,
  },

  loadingScreen: {
    paddingLeft: 10,
    paddingRight: 10,
    width: '95%',
  },
  mediaContent: {
    alignSelf: 'auto',
    borderRadius: 8,
    //left: 0,
    height: 290,
    marginTop: 5,
    //position: 'absolute',
    width: '95%',
  },

  rightContainer: {
    width: '95%',
  },
  textContent: {
    textAlign: 'justify',
    width: '91%',
  },
  userAvatar: {
    borderRadius: 50,
    height: 20,
    width: 20,
  },
  userInfo: {
    flexDirection: 'row',
    textAlign: 'right',
  },
  username: {
    paddingLeft: 5,
  },
});
