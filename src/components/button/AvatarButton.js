import { View } from 'react-native';
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { HEADER_HEIGHT } from '../../styles/Style';

//Avatar button, chuyển người dùng đến trang của người dùng đã được chọn, không chuyển nếu screen hiện tại đang là của người đó
export default function AvatarButton(props) {
  const redirectToUserProfileScreen = (id) => { };
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={styles.container}
        onPress={redirectToUserProfileScreen(props.userId)}
      >
        <Image
          source={{ uri: props.source }}
          style={{
            height: props.size,
            width: props.size,
            borderRadius: 50,
          }}
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
