import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  BLACK_TEXT_COLOR,
  BACKGROUND_COLOR,
} from '../../styles/Style';
export default function ToggleButton({
  style,
  onPress,
  trueText,
  falseText,
  isTrue = false
}) {
  return (
    <View style={style}>
      <TouchableOpacity
        style={[styles.button,
        {
          backgroundColor: isTrue ? BACKGROUND_COLOR : BLACK_TEXT_COLOR
        }]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, {
          color: (!isTrue) ? BACKGROUND_COLOR : BLACK_TEXT_COLOR

        }]}>{isTrue ? trueText : falseText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderColor: BLACK_TEXT_COLOR,
    borderRadius: 100,
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: 'bold',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
});
