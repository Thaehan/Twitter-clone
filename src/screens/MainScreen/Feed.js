import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  getFollowedUserTweet,
  getMultipleTweet,
  getTweetById,
} from '../../api/tweet';
import { db, doc, setDoc } from '../../firebase';
import Tweet from '../../components/tweet/Tweet';
import {
  GLOBAL_STYLES,
  SCREEN_WIDTH,
  BACKGROUND_COLOR,
  MAIN_COLOR,
} from '../../styles/Style';
import CircleButton from '../../components/button/CircleButton';
import TweetModel from '../../models/TweetModel';
import { useSelector } from 'react-redux';

export default function Feed({ navigation }) {
  const [tweetList, setTweetList] = useState([]);
  const [creator, setCreator] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    //const user = useSelector((state) => state.user);

    //var tweets = getFollowedUserTweet()
    // setTweetList(tweetsList);
    getMultipleTweet('textContent', '!=', '')
      .then((docs) => {
        var tempList = [];
        docs.forEach((doc) => {
          tempList.push({ ...doc.data(), tweetId: doc.id });
        });
        setTweetList(tempList);
        console.log(tempList);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <SafeAreaView
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      {
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {tweetList.map((tweet) => (
            <Tweet
              key={tweet.tweetId}
              tweetId={tweet.tweetId}
              userPosted={tweet.userPosted}
              textContent={tweet.textContent}
              mediaContent={tweet.mediaContent}
              dateCreated={tweet.dateCreated}
              referedPostId={tweet.referedPostId}
              userMentioned={tweet.userMentioned}
            />
          ))}
        </ScrollView>
      }

      <CircleButton
        icon="plus"
        type="font-awesome-5"
        color="#ffffff"
        size={30}
        style={styles.circleButton}
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
