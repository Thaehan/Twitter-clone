import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  MAIN_COLOR,
  BACKGROUND_COLOR
} from "../../styles/Style"
export default function PrimaryButton(props) {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: MAIN_COLOR,
    borderRadius: 100,
    fontWeight: '500',
  },
  buttonText: {
    color: BACKGROUND_COLOR,
    fontWeight: '500',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
});
