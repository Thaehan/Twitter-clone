import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import React from 'react';

import ListItemMessageUser from '../../components/Message/ListItemMessageUser';
import ListItemUser from '../../components/Message/ListItemUser';
import { GLOBAL_STYLES, BACKGROUND_COLOR } from '../../styles/Style';
import {
  CONTENT_SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../styles/Style';
import {
  logo,
  no_avatar,
} from '../../constants/ImageAssets';
export default function Message({ navigation }) {
  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ListItemMessageUser
          user_name="Nowano"
          user_email="_@hie"
          content="Toi co the bus... anh duoc khong? Hay de cho toi bu anh mot cai de giang hoa di nao!"
          avatar={no_avatar}
        />
        <ListItemMessageUser
          user_name="Thaehan"
          user_email="_@datdo"
          content="Duoc thoi"
          avatar="no-avatar"
        />
        <ListItemMessageUser
          user_name="Nowano"
          user_email="_@hie"
          content="*Oi khong ban lam that a"
          avatar="like"
        />
        <ListItemMessageUser
          user_name="Thaehan"
          user_email="_@datdo"
          content="...."
          avatar="like"
        />
        <ListItemMessageUser
          user_name="Weed"
          user_email="_@danh"
          content="Hay qua cac ban oi, minh tham gia voi nhe, minh se tra tien ma"
          avatar="like"
        />
        <ListItemMessageUser
          user_name="Nowano"
          user_email="_@hie"
          content="Khong can dau bro, chung ta la dong doi, cai nay mien phi"
          avatar="like"
        />
        <ListItemMessageUser
          user_name="Thaehan"
          user_email="_@datdo"
          content="Dung vay"
          avatar="like"
        />
        <ListItemMessageUser
          user_name="Weed"
          user_email="_@danh"
          content="Toi co thang em sinh nam 96, hoc bach khoa co khi bo ngang sang IT"
          avatar="like"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    alignItems: 'center',

    borderRadius: 50,
    bottom: 20,
    position: 'absolute',
    right: 20,
  },
  container: {
    backgroundColor: BACKGROUND_COLOR,

    flex: 2,
    // height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
});
