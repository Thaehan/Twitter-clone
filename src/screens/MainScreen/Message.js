import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import {
  Bubble_Send,
  Bubble_Received,
} from '../../components/ChatBubble';
import { GLOBAL_STYLES } from '../../styles/Style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPaperPlane,
  faFileImage,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Center } from 'native-base';
library.add(faPaperPlane, faFileImage);
export default function Message() {
  const [message, setMessage] = useState('');
  return (
    <>
      <View style={GLOBAL_STYLES.header_bar_message}>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{
              position: 'absolute',
              left: 23,
              top: 27,
              width: 20,
              height: 15,

              backgroundColor: '#ffffff',
            }}
            color="#000000"
          />
          <Image
            source={require('../../assets/no-avatar.png')}
            style={{
              left: 170,
              top: 0,
              width: 35,
              height: 35,
              borderRadius: 35 / 2,
            }}
          />
          <Text style={styles.user_name}>Nowano</Text>
        </TouchableOpacity>
      </View>
      <View style={GLOBAL_STYLES.conversation}>
        <Bubble_Send content="tin nhan da gui 1" />
        <Bubble_Send content="tin nhan da gui 2" />
        <Bubble_Received content="tin nhan da nhan 1" />
        <Bubble_Received content="tin nhan da nhan 2" />
        <Bubble_Received content="tin nhan da nhan dai dai dai dai dai dai vai vai vai vai" />
      </View>
      <View style={GLOBAL_STYLES.message_input}>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faFileImage}
            style={{
              position: 'absolute',
              left: 15,
              top: 18,
              width: 30,
              height: 20,

              backgroundColor: '#ffffff',
            }}
            color="#1A8CD8"
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            style={{
              position: 'absolute',
              left: 340,
              top: 18,
              width: 20,
              height: 20,

              backgroundColor: '#ffffff',
            }}
            color="#1A8CD8"
          />
        </TouchableOpacity>

        <TextInput
          value={message}
          //onChangeText={Send message}
          style={styles.textInput}
          placeholder="Start a message"
          placeholderTextColor="#BDBDBD"
          autoFocus
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  textInput: {
    width: 275,
    height: 35,
    paddingLeft: 16,
    //marginBottom: 20,
    fontSize: 16,
    marginLeft: 57,
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
  },
  user_name: {
    left: 128,
    top: 40,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: '500',
    color: '#000000',
    backgroundColor: '#ffffff',
  },
});
