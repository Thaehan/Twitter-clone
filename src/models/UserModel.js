import moment from 'moment';
import { Timestamp } from 'firebase/firestore/lite';

function UserModel(
  username,
  fullname,
  email,
  dateOfBirth,
  country,
  avatar = '',
  banner = ''
) {
  const newUser = {
    username,
    fullname,
    email,
    dateOfBirth,
    country,
    avatar,
    banner,
    bio: '',
    following: [],
    followers: [],
    liked: [],
    dateCreated: Timestamp.fromDate(moment().toDate()),
  };

  return newUser;
}

export default UserModel;
