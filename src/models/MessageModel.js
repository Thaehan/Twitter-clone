import moment from 'moment';
import { Timestamp } from 'firebase/firestore/lite';

function MessageModel(
  content,
  senderId,
  recieverId,
  type = 'text',
  conversationId,
  isRead = false
) {
  const newMessage = {
    content,
    type,
    senderId,
    recieverId,
    conversationId,
    isRead,
    sendTime: Timestamp.fromDate(moment().toDate()),
  };

  return newMessage;
}

export default MessageModel;
