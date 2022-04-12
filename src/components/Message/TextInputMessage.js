import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';

import {
  CONTENT_SCREEN_HEIGHT,
  GLOBAL_STYLES,
  SCREEN_WIDTH,
} from '../../styles/Style';
import IconButton from '../button/IconButton';
export default function TextInputMessage(props) {
  return (
    <View style={styles.message_input}>
      <IconButton
        style={styles.file_send}
        type="evilicon"
        icon="image"
        color="#33C0FF"
        size={36}
      ></IconButton>
      <TextInput
        value={props.message}
        style={styles.textInput}
        placeholder="Start a message"
        placeholderTextColor="#BDBDBD"
        autoFocus
      />

      <IconButton
        style={styles.send_button}
        type="ionicon"
        icon="paper-plane"
        color="#33C0FF"
        size={22}
      ></IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  message_input: {
    position: 'relative',
    width: SCREEN_WIDTH,
    height: 60,
    fontFamily: 'Open Sans',
    backgroundColor: 'white',
    fontSize: 16,
  },
  file_send: {
    position: 'absolute',
    alignContent: 'center',
    left: 12,
    top: 16,
    backgroundColor: '#ffffff',
  },
  textInput: {
    position: 'absolute',
    width: 302,
    height: 38,
    paddingLeft: 16,
    fontSize: 16,
    left: 62,
    top: 11,
    backgroundColor: '#E7ECF0',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 19,
  },
  send_button: {
    position: 'absolute',
    alignContent: 'center',
    top: 20,
    left: 374,
    backgroundColor: '#ffffff',
    transform: [{ rotate: '45deg' }],
  },
});
