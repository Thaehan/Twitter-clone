import { View } from 'react-native';
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { HEADER_HEIGHT } from '../../styles/Style';

//Avatar button, chuyển người dùng đến trang của người dùng đã được chọn, không chuyển nếu screen hiện tại đang là của người đó
export default function AvatarButton({
  style,
  userId,
  source,
  size,
  onPress,
}) {
  const redirectToUserProfileScreen = (id) => {};
  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Image
          source={{ uri: source }}
          style={{
            height: size,
            width: size,
            borderRadius: 50,
          }}
          testID="AvatarImage"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignSelf: 'center',
  },
});
