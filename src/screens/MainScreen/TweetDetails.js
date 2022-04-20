import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import { useState, useEffect } from 'react';

import { db, doc, setDoc } from '../../firebase';
import Tweet from '../../components/tweet/Tweet';
import {
  GLOBAL_STYLES,
  SCREEN_WIDTH,
  BACKGROUND_COLOR
} from '../../styles/Style';
import CircleButton from '../../components/button/CircleButton';
import TweetModel from '../../models/TweetModel';
import { getTweetById } from '../../api/tweet'
import {
  TWEET_DETAIL,
} from '../../constants/ScreenName';
export default function TweetDetails({ navigation }) {
  const [tweet, setTweet] = useState({});

  useEffect(() => {
    getTweetById("")
      .then(docs => {
        setTweet(docs);
      })
      .catch(e => {
        console.log(e);
      })
  }, []);

  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Tweet
          key={tweet.tweetId}
          userPosted={tweet.userPosted}
          textContent={tweet.textContent}
          mediaContent={tweet.mediaContent}
          dateCreated={tweet.dateCreated}
          referedPostId={tweet.referedPostId}
          userMentioned={tweet.userMentioned}
        />

      </ScrollView>

      <CircleButton
        icon="plus"
        type="font-awesome-5"
        color="#ffffff"
        size={30}
        style={styles.circleButton}
      />
    </View>
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
    width: SCREEN_WIDTH,
  },
  textInput: {
    backgroundColor: BACKGROUND_COLOR,
    borderWidth: 1,
    height: 50,
  },
});
