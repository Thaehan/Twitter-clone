import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  MAIN_COLOR,
  BACKGROUND_COLOR,
} from '../../styles/Style';
// Nhận vào title, onPress, style, color
export default function TextButton({
  style,
  onPress,
  color,
  title,
}) {
  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, { color: color }]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: '500',
    padding: 0,
  },
  container: {
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
  },
});
