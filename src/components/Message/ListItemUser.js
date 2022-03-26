import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const SCREEN_WIDTH = 375;
export default function ListItemUser(props) {
  var avatar = props.avatar;
  return (
    <View style={styles.Item_size}>
      <TouchableOpacity style={styles.avatar_frame}>
        <Image
          source={require('../../assets/' +
            avatar +
            '.png')}
          style={{
            left: 0,
            top: 0,
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
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
    position: 'relative',
    width: SCREEN_WIDTH,
    height: 70,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  avatar_frame: {
    position: 'absolute',
    left: 11,
    top: 10,
    width: 50,
    height: 50,
    backgroundColor: '#ffffff',
  },
  User_name: {
    position: 'absolute',
    left: 64,
    top: 10,
    width: 305,
    height: 27,
    backgroundColor: '#ffffff',
    fontWeight: 'bold',
  },
  User_email: {
    position: 'absolute',
    left: 64,
    top: 30,
    height: 27,
    backgroundColor: '#ffffff',
    color: '#B2B1B4',
  },
});
