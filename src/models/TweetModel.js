import moment from 'moment';
import { Timestamp } from 'firebase/firestore';

function TweetModel(creator, text, image) {
  const newTweet = {
    creator,
    text: text,
    image: image,
    likes: [],
    comments: [],
    timeStamp: Timestamp.fromDate(moment().toDate()),
  };

  return newTweet;
}

export default TweetModel;
