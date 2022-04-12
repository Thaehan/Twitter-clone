import moment from 'moment';

//Member Array[Users]
function ConversationModel(
  conversationName = '',
  member = []
) {
  const newConversation = {
    conversationName,
    member,
  };

  return newConversation;
}

export default ConversationModel;
