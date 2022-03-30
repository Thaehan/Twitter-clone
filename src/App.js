import React from 'react';
import { View } from 'react-native';

import RootNavigator from './navigation/RootNavigator';
//Nhận vào props: avatar, avatarPress, onPress, fullname, username, content

export default function App() {
  return <RootNavigator />;
  // return (
  //   <Comment
  //     avatar={logo}
  //     fullname={'Dat Do'}
  //     username={'Thaehan'}
  //     content={'Bai nay hay qua'}
  //   />
  // );
}
