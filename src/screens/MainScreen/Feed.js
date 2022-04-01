import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';

import TweetInFeed from '../../components/tweet/TweetInFeed';
import {
  CONTENT_SCREEN_HEIGHT,
  GLOBAL_STYLES,
  SCREEN_WIDTH,
} from '../../styles/Style';
import { tweets } from '../../mock';
import CircleButton from '../../components/button/CircleButton';

export default function Feed({ navigation }) {
  const [tweetList, setTweetList] = useState(tweets);

  useEffect(() => {
    setTweetList(tweets);
  }, []);

  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <TweetInFeed
          avatar={tweetList.avatar}
          fullname={tweetList.fullname}
          username={tweetList.username}
          text={tweetList.text}
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
});
