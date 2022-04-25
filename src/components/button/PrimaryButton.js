import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  MAIN_COLOR,
  BACKGROUND_COLOR,
} from '../../styles/Style';
export default function PrimaryButton({
  style,
  onPress,
  title,
  color = MAIN_COLOR
}) {
  return (
    <View style={style}>
      <TouchableOpacity
        style={[styles.button, {
          backgroundColor: color,
        }]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 100,
    fontWeight: '500',
  },
  buttonText: {
    color: BACKGROUND_COLOR,
    fontWeight: 'bold',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
});
