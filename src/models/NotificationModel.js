import moment from 'moment';

//Member Array[Users]
function NotificationModel(
  textContent = '',
  hyperLink = '',
  fromUser = ''
) {
  const newNotification = {
    textContent,
    hyperLink,
    fromUser,
  };

  return newNotification;
}

export default NotificationModel;
