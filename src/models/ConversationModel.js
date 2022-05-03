import moment from 'moment';

//content Array[Messages]
function ConversationModel(
  content = [],
  users = [],
) {
  const newConversation = {
    content,
    users,
  };

  return newConversation;
}

export default ConversationModel;
