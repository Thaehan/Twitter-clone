import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import {
  CONTENT_SCREEN_HEIGHT,
  GLOBAL_STYLES,
  SCREEN_WIDTH,
} from '../../styles/Style';
import ImageButton from '../button/ImageButton';
import AvatarButton from '../button/AvatarButton';
import { useState, useEffect } from 'react';
import {
  MAIN_COLOR,
  BACKGROUND_COLOR,
  DARK_GREY_TEXT_COLOR
} from "../../styles/Style"
export default function ListItemMessageUser(props) {
  var now = moment().format('DD/MM/YYYY');
  const [User, setUser] = useState({});
  const findUser = (id) => {
    var result = userDatabase.filter((user) => {
      return user.userId == id;
    });
    setUser(result[0]);
  };
  useEffect(() => {
    findUser(props.User);
  }, []);

  return (
    <TouchableOpacity style={styles.Item_size}>
      <View style={styles.avatar_frame}>
        {/* <AvatarButton
          source={User.avatar}
          size={55}
          style={{
            left: 11,
            top: 16,
            width: 55,
            height: 55,
            backgroundColor: '#ffffff',
          }}
        /> */}
      </View>
      <View
        style={{
          flexDirection: 'column',
          display: 'flex',
        }}
      >
        <View style={styles.name_and_email}>
          <Text
            style={{
              marginLeft: 5,
              height: 20,
              fontWeight: 'bold',
            }}
          >
            {props.user_name}
          </Text>
          <Text
            style={{
              marginLeft: 5,
              width: 318,
              height: 20,
              color: DARK_GREY_TEXT_COLOR,
            }}
          >
            {props.user_email}
          </Text>
          <Text style={styles.DateTime}>{now}</Text>
        </View>
        <Text style={styles.TextChatterName}>
          {props.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  DateTime: {
    backgroundColor: BACKGROUND_COLOR, color: DARK_GREY_TEXT_COLOR,
    height: 22,
    position: 'absolute',
    right: 5,
    top: 5,
    width: 80,
  },
  Item_size: {
    //position: 'relative',
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'row',
    fontSize: 16,
    height: 80,
    width: SCREEN_WIDTH,
  },

  TextChatterName: {
    color: DARK_GREY_TEXT_COLOR,
    height: 50,

    marginLeft: 5,
    width: 220,
  },
  TextGreyHandle: {
    backgroundColor: BACKGROUND_COLOR,

    height: 20,

    left: 134,

    position: 'absolute',
    top: 14,
    width: SCREEN_WIDTH - 57,
  },
  avatar_frame: {
    backgroundColor: BACKGROUND_COLOR,

    height: 80,

    width: 70,
  },
  name_and_email: {
    flexDirection: 'row',
    height: 20,

    width: SCREEN_WIDTH - 70, // screen_width - avatar_width
  },
});
