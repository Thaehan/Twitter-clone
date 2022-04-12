import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import React, { useState, useEffect } from 'react';

import { db, doc, setDoc } from '../../firebase';
import Tweet from '../../components/tweet/Tweet';
import {
  GLOBAL_STYLES,
  SCREEN_WIDTH,
} from '../../styles/Style';
import { tweetsList } from '../../mock';
import CircleButton from '../../components/button/CircleButton';
import TweetModel from '../../models/TweetModel';

export default function Feed({ navigation }) {
  const [tweetList, setTweetList] = useState([]);
  const [creator, setCreator] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    setTweetList(tweetsList);
  }, []);

  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {tweetList.map((tweet) => (
          <Tweet
            key={tweet.tweetId}
            userPosted={tweet.userPosted}
            textContent={tweet.textContent}
            mediaContent={tweet.mediaContent}
            dateCreated={tweet.dateCreated}
            referedPostId={tweet.referedPostId}
            userMentioned={tweet.userMentioned}
          />
        ))}
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
  container: {
    flex: 2,
    // height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'cyan',
  },
  circleButton: {
    borderRadius: 50,
    alignItems: 'center',
    bottom: 20,
    right: 20,
    position: 'absolute',
  },
  textInput: {
    backgroundColor: 'white',
    height: 50,
    borderWidth: 1,
  },
});
