import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function SecondaryButton({
  title,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    fontFamily: 'Open Sans',
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonText: {
    padding: 0,
    fontWeight: '500',
    color: '#1DA1F2',
  },
});
