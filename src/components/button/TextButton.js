import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  MAIN_COLOR,
  BACKGROUND_COLOR
} from "../../styles/Style"
// Nhận vào title, onPress, style
export default function TextButton(props) {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: MAIN_COLOR,
    fontWeight: '500',
    padding: 0,
  },
  container: {
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
  },
});
