import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function Bubble_Send({ content }) {
  return (
    <TouchableOpacity
      style={message_send.bubble}

      //onPress={onPress}
    >
      <Text style={message_send.text_message}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}
function Bubble_Received({ content }) {
  return (
    <TouchableOpacity
      style={message_received.bubble}
      //onPress={onPress}
    >
      <Text style={message_received.text_message}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}

const message_send = StyleSheet.create({
  bubble: {
    alignSelf: 'flex-end',
    textAlign: 'right',
    alignContent: 'center',
    //marginRight: 40,
    marginTop: 5,
    fontWeight: '500',
    borderRadius: 100,
    backgroundColor: '#1DA1F2',
  },
  text_message: {
    fontWeight: '500',
    marginTop: 6,
    marginBottom: 8,
    marginLeft: 15,
    marginRight: 15,
    color: '#ffffff',
  },
});

const message_received = StyleSheet.create({
  bubble: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    alignContent: 'left',
    //marginLeft: 40,
    marginTop: 5,
    fontWeight: '500',
    borderRadius: 100,
    backgroundColor: '#EFF3F4',
  },
  text_message: {
    fontWeight: '500',
    marginTop: 6,
    marginBottom: 8,
    marginLeft: 15,
    marginRight: 15,
    color: '##5C6165',
  },
});

export { Bubble_Send, Bubble_Received };
