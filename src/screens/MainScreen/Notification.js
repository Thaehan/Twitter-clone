import { View, Text } from 'react-native';
import React from 'react';
import ListItemMessageUser from '../../components/Message/ListItemMessageUser';
import { GLOBAL_STYLES } from '../../styles/Style';
import moment from 'moment';
export default function Notification() {
  var now = moment().format('DD/MM/YYYY');
  return (
    <View style={GLOBAL_STYLES.container}>
      {/* <Text>Notification</Text> */}
      <ListItemMessageUser
        user_name="Nowano"
        user_email="_@hie"
        content="Toi co the buscu anh duoc khong? Hay de cho toi bu anh mot cai de giang hoa di nao!"
        date={now}
        avatar="logo"
      ></ListItemMessageUser>
      <ListItemMessageUser
        user_name="Thaehan"
        user_email="_@datdo"
        content="Duoc thoi"
        date={now}
        avatar="no-avatar"
      ></ListItemMessageUser>
      <ListItemMessageUser
        user_name="Weed"
        user_email="_@danh"
        content="*Quay clip...."
        date={now}
        avatar="like"
      ></ListItemMessageUser>
    </View>
  );
}
