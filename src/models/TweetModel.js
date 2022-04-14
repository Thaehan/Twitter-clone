import moment from 'moment';
import { Timestamp } from 'firebase/firestore/lite';

function TweetModel(
  userPosted,
  textContent = '',
  mediaContent = '',
  userMentioned = [],
  referedPostId = null,
  userRetweeted = [],
  userLiked = [],
  comments = []
) {
  const newTweet = {
    userPosted, //userId
    textContent,
    mediaContent,
    userMentioned, //Array[userId]
    userRetweeted, //Array[userId]
    referedPostId, //tweetId
    userLiked, //userId
    comments, //commentId
    dateCreated: Timestamp.fromDate(moment().toDate()),
  };

  return newTweet;
}

export default TweetModel;
