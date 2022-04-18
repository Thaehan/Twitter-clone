import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import {
  CONTENT_SCREEN_HEIGHT,
  GLOBAL_STYLES,
  SCREEN_WIDTH,
  MAIN_COLOR,
  BACKGROUND_COLOR,
  DARK_GREY_TEXT_COLOR


} from '../../styles/Style';
import ImageButton from '../button/ImageButton';
export default function ListItemUser(props) {
  //var avatar = require(`../../assets/${props.avatar}.png`);
  return (
    <View style={styles.Item_size}>
      <TouchableOpacity style={styles.avatar_frame}>
        <ImageButton
          source={props.avatar}
          size={55}
          style={{
            left: 11,
            top: 16,
            width: 55,
            height: 55,
          }}
        />
      </TouchableOpacity>

      <Text style={styles.User_name}>
        {props.user_name}
      </Text>

      <Text style={styles.User_email}>
        {props.user_email}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Item_size: {
    backgroundColor: BACKGROUND_COLOR,
    fontSize: 16,
    height: 70,
    position: 'relative',
    width: SCREEN_WIDTH,
  },
  User_email: {
    backgroundColor: BACKGROUND_COLOR,
    color: DARK_GREY_TEXT_COLOR,
    height: 27,
    left: 64,
    position: 'absolute',
    top: 30,
  },
  User_name: {
    backgroundColor: BACKGROUND_COLOR,
    fontWeight: 'bold',
    height: 27,
    left: 64,
    position: 'absolute',
    top: 10,
    width: 305,
  },
  avatar_frame: {
    backgroundColor: BACKGROUND_COLOR,
    height: 50,
    left: 11,
    position: 'absolute',
    top: 10,
    width: 50,
  },
});
