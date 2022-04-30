import moment from 'moment';

//content Array[Messages]
function ConversationModel(
  conversationName = '',
  avatar = '',
  content = [],
  userId = '',
  email = ''
) {
  const newConversation = {
    conversationName,
    content,
    avatar,
    userId,
    email,
  };

  return newConversation;
}

export default ConversationModel;
