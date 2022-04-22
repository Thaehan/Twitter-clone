import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import {
  SCREEN_WIDTH,
  BACKGROUND_COLOR,
  GLOBAL_STYLES,
} from '../../styles/Style';

export default function TweetDetail({ navigation, route }) {
  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      {/* <ScrollView
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
      </ScrollView> */}
      <Text>TweetDetail {route.params.tweetId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
