import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

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
  container: {
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    padding: 0,
    fontWeight: '500',
    color: '#1da1f2',
  },
});
