import moment from 'moment';
import { Timestamp } from 'firebase/firestore/lite';

function MessageModel(
  content,
  senderId,
  recieverId,
  type = 'text',
  conversationId
) {
  const newMessage = {
    content,
    type,
    senderId,
    recieverId,
    conversationId,
    isRead: false,
    sendTime: Timestamp.fromDate(moment().toDate()),
  };

  return newMessage;
}

export default MessageModel;
