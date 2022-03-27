import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function PrimaryButton(props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 271,
    marginTop: 20,
    fontWeight: '500',
    borderRadius: 100,
    backgroundColor: '#1da1f2',
  },
  buttonText: {
    fontWeight: '500',
    marginTop: 6,
    marginBottom: 8,
    marginLeft: 15,
    marginRight: 15,
    color: '#ffffff',
  },
});
