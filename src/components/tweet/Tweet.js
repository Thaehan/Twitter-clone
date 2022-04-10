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

import { GLOBAL_STYLES } from '../../styles/Style';
import IconButton from '../button/IconButton';
import AvatarButton from '../button/AvatarButton';
//Mock data for find user
import { thaehan, userDatabase } from "../../mock";
import { useState, useEffect } from 'react';
const renderItem = (item) => {
  return <Image source={item.source} />;
};

const renderIcon = (name, icon, onPress) => {
  return (
    <IconButton
    />)
}
const onFeed = true;
export default function Tweet(props) {
  const [userPosted, setUserPosted] = useState({})
  const [likes, setLikes] = useState(0)
  const [comments, setComments] = useState(0)
  const [retweets, setRetweets] = useState(0)

  const findUser = (id) => {
    var result = userDatabase.filter(user => {
      console.log(user.userId + " " + id)
      return user.userId == id
    })
    setUserPosted(result[0]);

  }

  const retweetTweet = () => {

  }
  const likeTweet = () => {

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
            {onFeed ? " . " : "\n"} {userPosted.handle}      {"\n"}
          </Text>
        </View>

        <Text style={[GLOBAL_STYLES.text, onFeed ? styles.inFeedStyle : styles.detailedStyle]}>
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
              onPress={commentTweet()}
            />
            <Text>
              {comments}
            </Text>
          </View>
          {/* retweeted */
            false ?
              <View style={styles.buttonWithCount}>
                <IconButton
                  icon="autorenew"
                  onPress={retweetTweet()}
                />
                <Text>
                  {retweets}
                </Text>
              </View>
              : <View style={styles.buttonWithCount}>
                <IconButton
                  icon="autorenew"
                  onPress={retweetTweet()}
                />
                <Text>
                  {retweets}
                </Text>
              </View>}
          {/* liked */
            false ?
              <View style={styles.buttonWithCount}>
                <IconButton
                  icon="favorite-border"
                  onPress={likeTweet()}
                />
                <Text>
                  {likes}
                </Text>
              </View>
              : <View style={styles.buttonWithCount}>
                <IconButton
                  icon="favorite-border"
                  onPress={likeTweet()}
                />
                <Text>
                  {likes}
                </Text>
              </View>}

          <IconButton
            icon="share"
            onPress={shareTweet()}
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
    justifyContent: "flex-start"
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
  buttonWithCount: {
    flexDirection: "row",
    paddingLeft: 5
  },
  inFeedStyle: {
    paddingLeft: 0,
  },
  detailedStyle: {
    paddingLeft: 0,

  },
  avatar: {
    height: 65,
    width: 65,
  },
  interactionBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 15
  }
});
