import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Box } from 'native-base';

import TweetInFeed from '../../components/tweet/TweetInFeed';
import { GLOBAL_STYLES } from '../../styles/Style';
import { tweets } from '../../mock';

export default function Feed() {
  const [tweetList, setTweetList] = useState(tweets);

  useEffect(() => {
    setTweetList(tweets);
  }, []);

  return (
    <View style={GLOBAL_STYLES.container}>
      <ScrollView
        style={GLOBAL_STYLES.container}
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
    </View>
  );
}
