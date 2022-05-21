import moment from 'moment';

//Member Array[Users]
function NotificationModel(from, type, tweetId, ofUser) {
  const newNotification = {
    from,
    type,
    tweetId,
    ofUser,
  };

  return newNotification;
}

export default NotificationModel;
