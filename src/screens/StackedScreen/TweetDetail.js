import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import {
  SCREEN_WIDTH,
  BACKGROUND_COLOR,
  GLOBAL_STYLES,
} from '../../styles/Style';
import Detail from '../../components/tweet/Detail';

export default function TweetDetail({ navigation, route }) {
  const [comments, setComments] = useState([]);
  const {
    tweetId,
    userPostedData,
    textContent,
    mediaContent,
    dateCreated,
    referedPostId,
    userMentioned,
  } = route.params;

  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Detail
          tweetId={tweetId}
          userPostedData={userPostedData}
          textContent={textContent}
          mediaContent={mediaContent}
          dateCreated={dateCreated}
          referedPostId={referedPostId}
          userMentioned={userMentioned}
        />
      </ScrollView>
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
