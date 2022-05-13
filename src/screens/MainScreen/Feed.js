import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import AvatarButton from '../../components/button/AvatarButton';
import IconButton from '../../components/button/IconButton';
import {
  getFollowedUserTweet,
  getMultipleTweet,
} from '../../api/tweet';
import Tweet from '../../components/tweet/Tweet';
import {
  TWEET_POST,
  PROFILE,
  SETTINGS,
} from '../../constants/ScreenName';
import {
  GLOBAL_STYLES,
  SCREEN_WIDTH,
  BACKGROUND_COLOR,
  MAIN_COLOR,
  HEADER_HEIGHT,
  NAVBAR_HEIGHT,
} from '../../styles/Style';
import CircleButton from '../../components/button/CircleButton';

export default function Feed({ navigation }) {
  const currentUser = useSelector((state) => state.user);
  const [tweetList, setTweetList] = useState([]);
  const [creator, setCreator] = useState('');
  const [text, setText] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const navigate = useNavigation();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshFeed().then(() => setRefreshing(false));
  }, []);

  const refreshFeed = async () => {
    getMultipleTweet('textContent', '!=', '')
      .then((docs) => {
        const tempList = [];
        const tempDataList = [];
        docs.forEach((doc) => {
          tempDataList.push({
            dateCreated: doc.data().dateCreated,
            tweetId: doc.id,
          });
        });
        tempDataList.sort((a, b) => {
          return (
            a.dateCreated.toDate() < b.dateCreated.toDate()
          );
        });
        tempDataList.forEach((data) => {
          tempList.push(data.tweetId);
        });
        setTweetList(tempList);
        console.log(tempList);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <AvatarButton
            style={styles.leftHeader}
            source={currentUser.avatar}
            userId={currentUser.userId}
            size={30}
            onPress={() => {
              navigation.navigate(PROFILE, {
                userId: currentUser.userId,
              });
            }}
          />
        );
      },
      headerRight: () => {
        return (
          <IconButton
            style={styles.rightHeader}
            type="evilicon"
            icon="gear"
            color="black"
            size={30}
            onPress={() => {
              navigation.navigate(SETTINGS);
            }}
          />
        );
      },
      headerTitle: () => (
        <IconButton
          style={styles.centerHeader}
          type="entypo"
          icon="twitter"
          color={MAIN_COLOR}
          size={30}
        />
      ),
      headerTitleAlign: 'center',
    });
  }, []);

  useEffect(() => {
    refreshFeed();
  }, []);

  return (
    <SafeAreaView
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      {
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[MAIN_COLOR]}
              title={'Refresh'}
            />
          }
        >
          {tweetList.map((tweet) => (
            <Tweet
              key={tweet}
              tweetId={tweet}
              isOnFeed={true}
            />
          ))}
        </ScrollView>
      }

      <CircleButton
        type="material-community"
        icon="plus"
        color="#ffffff"
        size={35}
        style={styles.circleButton}
        onPress={() => {
          navigation.navigate(TWEET_POST, {
            navigation,
            //referedTweetId: "YBlYFQL2xrZmMFZIz36U"
          });
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  circleButton: {
    alignItems: 'center',
    borderRadius: 50,
    bottom: 20,
    position: 'absolute',
    right: 20,
  },
  container: {
    flex: 2,
    // height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  headerBarStyle: {
    height: HEADER_HEIGHT,
  },
  headerContainer: {
    backgroundColor: 'white',
    height: HEADER_HEIGHT,
  },
  leftHeader: {
    width: 60,
  },
  rightHeader: {
    width: 60,
  },
  tabBarStyle: {
    height: NAVBAR_HEIGHT,
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
  },
  textInput: {
    backgroundColor: BACKGROUND_COLOR,
    borderWidth: 1,
    height: 50,
  },
});
