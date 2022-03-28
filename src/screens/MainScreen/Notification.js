import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import ListItemMessageUser from '../../components/Message/ListItemMessageUser';
import ListItemUser from '../../components/Message/ListItemUser';
import { GLOBAL_STYLES } from '../../styles/Style';
import {
  CONTENT_SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../styles/Style';

export default function Notification() {
  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      {/* <Text>Notification</Text> */}
      <ListItemMessageUser
        user_name="Nowano"
        user_email="_@hie"
        content="Toi co the buscu anh duoc khong? Hay de cho toi bu anh mot cai de giang hoa di nao!"
        avatar="logo"
      ></ListItemMessageUser>
      <ListItemMessageUser
        user_name="Thaehan"
        user_email="_@datdo"
        content="Duoc thoi"
        avatar="no-avatar"
      ></ListItemMessageUser>
      <ListItemMessageUser
        user_name="Weed"
        user_email="_@danh"
        content="*Quay clip...."
        avatar="like"
      ></ListItemMessageUser>
      <ListItemUser
        avatar="no-avatar"
        user_name="Trung Hieuuuuuuuuuuuu"
        user_email="@Nowanoooooooooooooooo"
      ></ListItemUser>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'cyan',
  },
  circleButton: {
    borderRadius: 50,
    alignItems: 'center',
    bottom: 20,
    right: 20,
    position: 'absolute',
  },
});
