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
import { userDatabase } from '../../mock';
import { useState, useEffect } from 'react';

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
              color: '#A4AEB3',
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
  Item_size: {
    //position: 'relative',
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    height: 80,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  avatar_frame: {
    width: 70,
    height: 80,
    backgroundColor: '#ffffff',
  },

  name_and_email: {
    flexDirection: 'row',
    width: SCREEN_WIDTH - 70, // screen_width - avatar_width
    height: 20,
  },
  TextGreyHandle: {
    position: 'absolute',
    left: 134,
    top: 14,
    width: SCREEN_WIDTH - 57,
    height: 20,
    backgroundColor: '#ffffff',
  },
  TextChatterName: {
    marginLeft: 5,
    width: 220,
    height: 50,
    color: '#B2B1B4',
  },
  DateTime: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 80,
    height: 22,
    backgroundColor: '#ffffff',
    color: '#B3BAC1',
  },
});
