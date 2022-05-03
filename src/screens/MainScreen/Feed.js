import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  RefreshControl
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import {
  getFollowedUserTweet,
  getMultipleTweet
} from '../../api/tweet';
import Tweet from '../../components/tweet/Tweet';
import { TWEET_POST } from '../../constants/ScreenName';
import {
  GLOBAL_STYLES,
  SCREEN_WIDTH,
  BACKGROUND_COLOR,
  MAIN_COLOR,
} from '../../styles/Style';
import CircleButton from '../../components/button/CircleButton';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
export default function Feed({ navigation }) {

  const [tweetList, setTweetList] = useState([]);
  const [creator, setCreator] = useState('');
  const [text, setText] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const navigate = useNavigation();


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshFeed().then(() => setRefreshing(false))
  }, [])


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
  }
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
              title={"Refresh"}
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
        icon="create-outline"
        type="ionicon"
        color="#ffffff"
        size={30}
        style={styles.circleButton}
        onPress={() => {
          navigation.navigate(TWEET_POST, {
            navigation,
            //referedTweetId: "YBlYFQL2xrZmMFZIz36U"
          })
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
  textInput: {
    backgroundColor: BACKGROUND_COLOR,
    borderWidth: 1,
    height: 50,
  },
});
