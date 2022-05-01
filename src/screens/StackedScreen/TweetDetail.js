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
import Comment from '../../components/tweet/Comment';
import { getCommentById } from '../../api/comment';
import { getUserById } from '../../api/user';
import Tweet from '../../components/tweet/Tweet';
import { getTweetById } from '../../api/tweet';

export default function TweetDetail({ navigation, route }) {
  const [comments, setComments] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const { tweetId, isOnFeed = false } = route.params;

  useEffect(() => {
    getTweetById(tweetId).then((doc) => {
      setComments(doc.data().comments);
    });
  }, []);

  useEffect(() => {
    comments.forEach((commentId) => {
      getCommentById(commentId)
        .then((doc) => {
          const tempData = {
            ...doc.data(),
            commentId: doc.id,
            dateCreated: new Date(
              doc.data().dateCreated.toDate()
            ),
          };
          getUserById(tempData.userComment)
            .then((doc) => {
              const { avatar, fullname, username } =
                doc.data();
              const data = {
                ...tempData,
                avatar,
                username,
                fullname,
              };
              setCommentData((pre) => {
                return [...pre, data];
              });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    return () => {};
  }, [comments]);

  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Tweet tweetId={tweetId} isOnFeed={false} />
        {commentData.length != 0 &&
          commentData.map((comment) => (
            <Comment
              key={comment.commentId}
              avatar={comment.avatar}
              username={comment.username}
              fullname={comment.fullname}
              commentId={comment.commentId}
              textContent={comment.textContent}
              dateCreated={comment.dateCreated}
            />
          ))}
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
