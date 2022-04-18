import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

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
    alignSelf: 'center',
    alignContent: 'center',
    fontWeight: '500',
    borderRadius: 100,
    backgroundColor: '#1da1f2',
  },
  buttonText: {
    fontWeight: '500',
    paddingTop: 6,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,

    color: '#ffffff',
  },
});
