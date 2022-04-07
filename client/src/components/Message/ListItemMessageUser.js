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

export default function ListItemMessageUser(props) {
  var now = moment().format('DD/MM/YYYY');
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
      <TouchableOpacity style={styles.content}>
        <Text
          style={{
            position: 'absolute',
            left: 12,
            top: 14,
            height: 20,
            fontWeight: 'bold',
          }}
        >
          {props.user_name}
        </Text>
        <Text
          style={{
            position: 'absolute',
            left: 70,
            top: 14,
            width: 318,
            height: 20,
            color: '#A4AEB3',
          }}
        >
          {props.user_email}
        </Text>
      </TouchableOpacity>
      <Text style={styles.TextChatterName}>
        {props.content}
      </Text>

      <Text style={styles.DateTime}>{now}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Item_size: {
    position: 'relative',
    width: SCREEN_WIDTH,
    height: 80,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  avatar_frame: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 70,
    height: 80,
    backgroundColor: '#ffffff',
  },
  content: {
    position: 'absolute',
    left: 70,
    top: 0,
    width: SCREEN_WIDTH - 70,
    height: 80,
    backgroundColor: '#ffffff',
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
    position: 'absolute',
    left: 82,
    top: 34,
    width: 220,
    height: 42,
    backgroundColor: '#ffffff',
    color: '#B2B1B4',
  },
  DateTime: {
    position: 'absolute',
    right: 5,
    top: 12,
    width: 80,
    height: 22,
    backgroundColor: '#ffffff',
    color: '#B3BAC1',
  },
});
