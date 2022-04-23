import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import {
  GLOBAL_STYLES,
  SCREEN_WIDTH,
} from '../../styles/Style';
import AvatarButton from './AvatarButton';

//Nhận vào style, avatar, username, fullname, onPress
export default function UserItemButton({
  style,
  onPress,
  avatar,
  size,
  fullname,
  username,
}) {
  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: avatar }}
            style={{
              height: size,
              width: size,
              borderRadius: 50,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={GLOBAL_STYLES.fullname}>
            {fullname}
          </Text>
          <Text
            style={[
              GLOBAL_STYLES.username,
              styles.username,
            ]}
          >
            @{username}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
  },
  container: {
    flexDirection: 'row',
    height: 60,
    width: SCREEN_WIDTH,
  },
  imageContainer: {
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    width: SCREEN_WIDTH - 340,
  },
  textContainer: {
    flexDirection: 'column',
    height: 60,
    paddingTop: 10,
    width: 340,
  },
  username: {
    marginTop: 5,
  },
});
