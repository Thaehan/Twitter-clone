import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Linking
} from 'react-native';
import React from 'react';
import tweetMockData from "../../mockData/tweet.json";

import { GLOBAL_STYLES, LIKED_COLOR, RETWEET_COLOR, DEFAULT_COLOR } from '../../styles/Style';
import IconButton from '../button/IconButton';
import AvatarButton from '../button/AvatarButton';
//Mock data for find user
import { userDatabase } from "../../mock";
import { useState, useEffect } from 'react';

const onFeed = true;

export default function Tweet(props) {
  const [userPosted, setUserPosted] = useState({})
  const [likes, setLikes] = useState(0)
  const [comments, setComments] = useState(0)
  const [retweets, setRetweets] = useState(0)

  const [tweetRetweeted, setTweetRetweeted] = useState(false)
  const [tweetLiked, setTweetLiked] = useState(false)


  const findUser = (id) => {
    var result = userDatabase.filter(user => {
      return user.userId == id
    })
    setUserPosted(result[0]);

  }

  const retweetTweet = () => {
    setTweetRetweeted(!tweetRetweeted)
    setRetweets(tweetRetweeted ? 0 : 1)
  }
  const likeTweet = () => {
    setTweetLiked(!tweetLiked)
    setLikes(tweetLiked ? 0 : 1)

  }
  const commentTweet = () => {

  }
  const shareTweet = () => {

  }
  useEffect(() => {
    findUser(props.userPosted)
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <AvatarButton source={userPosted.avatar} size={65} />
      </View>
      <View style={styles.content}>
        <View style={styles.userInfo}>
          <Text style={[GLOBAL_STYLES.fullname]}>
            {userPosted.username}
          </Text>
          <Text style={[GLOBAL_STYLES.username]}>
            {" "} {userPosted.handle} {" . 1d"}      {"\n"}
          </Text>
        </View>

        <Text style={[GLOBAL_STYLES.text, styles.inFeedStyle]}>
          {props.textContent}
        </Text>

        {/* {props.image && (
          <FlatList
          data={props.image}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

         )} */}
        <View style={[styles.interactionBar, styles.inFeedStyle]}>
          <View style={styles.buttonWithCount}>
            <IconButton
              icon="comment"
              onPress={() => commentTweet()}
            />
            <Text>
              {comments}
            </Text>
          </View>
          {/* retweet */
            <View style={styles.buttonWithCount}>
              <IconButton
                icon="autorenew"
                onPress={() => retweetTweet()}
                color={tweetRetweeted ? RETWEET_COLOR : DEFAULT_COLOR}
              />
              <Text style={tweetRetweeted ? styles.retweetedColor : styles.defaultColor}>
                {retweets}
              </Text>
            </View>
          }
          {/* liked */
            <View style={styles.buttonWithCount}>
              <IconButton
                icon="favorite-border"
                onPress={() => likeTweet()}
                color={tweetLiked ? LIKED_COLOR : DEFAULT_COLOR}
              />
              <Text style={tweetLiked ? styles.likedColor : styles.defaultColor}>
                {likes}
              </Text>
            </View>
          }

          <IconButton
            icon="share"
            onPress={shareTweet()}
            color={DEFAULT_COLOR}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderBottomColor: '#86939A',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "right"
  },
  content: {
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1
  },
  retweetedColor: {
    color: RETWEET_COLOR
  },
  likedColor: {
    color: LIKED_COLOR

  },
  defaultColor: {
    color: DEFAULT_COLOR

  },
  buttonWithCount: {
    flexDirection: "row",
    alignItems: "center",

  },
  interactionBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 15
  }
});
