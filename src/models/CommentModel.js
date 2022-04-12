import moment from 'moment';
import { Timestamp } from 'firebase/firestore/lite';

//Member Array[Users]
function CommentModel(
  userComment,
  userLiked = [],
  textContent = '',
  mediaContent = ''
) {
  const newComment = {
    userComment,
    userLiked,
    textContent,
    mediaContent,
    dateCreated: Timestamp.fromDate(moment().toDate()),
  };

  return newComment;
}

export default CommentModel;
