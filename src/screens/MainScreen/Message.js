import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import {
  Bubble_Send,
  Bubble_Received,
} from '../../components/Message/ChatBubble';
import {
  CONTENT_SCREEN_HEIGHT,
  GLOBAL_STYLES,
  SCREEN_WIDTH,
} from '../../styles/Style';
import CircleButton from '../../components/button/CircleButton';
import TextInputMessage from '../../components/Message/TextInputMessage';
export default function Message({ navigation }) {
  const [message, setMessage] = useState('');
  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <Text>Message</Text>
      <CircleButton
        type="material-community"
        icon="message-plus"
        color="#ffffff"
        size={30}
        style={styles.circleButton}
      />
      <View style={styles.conversation}>
        <Bubble_Send content="tin nhan da gui 1" />
        <Bubble_Send content="tin nhan da gui 2" />
        <Bubble_Received content="tin nhan da nhan 1" />
        <Bubble_Received content="tin nhan da nhan 2" />
        <Bubble_Received content="tin nhan da nhan dai dai dai dai dai dai vai vai vai vai" />
      </View>
      <TextInputMessage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'cyan',
  },
  circleButton: {
    borderRadius: 50,
    alignItems: 'center',
    bottom: 20,
    right: 20,
    position: 'absolute',
  },
  header_bar_message: {
    position: 'relative',
    width: SCREEN_WIDTH,
    height: 70,
    fontFamily: 'Open Sans',
    backgroundColor: 'white',
    fontSize: 16,
  },
  user_name: {
    left: 128,
    top: 40,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#000000',
    backgroundColor: '#ffffff',
  },
  conversation: {
    //vung chua cac tin nhan
    width: SCREEN_WIDTH,
    height: CONTENT_SCREEN_HEIGHT - 100,
    fontFamily: 'Open Sans',
    backgroundColor: 'white',
    fontSize: 16,
  },
});
