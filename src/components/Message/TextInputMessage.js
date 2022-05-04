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
  MAIN_COLOR,
  BACKGROUND_COLOR,
  DARK_GREY_TEXT_COLOR

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
        onPress={props.onPress}
      ></IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  file_send: {
    alignContent: 'center',
    backgroundColor: BACKGROUND_COLOR,
    left: 12,
    position: 'absolute',
    top: 16,
  },
  message_input: {
    backgroundColor: BACKGROUND_COLOR,
    fontFamily: 'Open Sans',
    fontSize: 16,
    height: 60,
    position: 'relative',
    width: SCREEN_WIDTH,
  },
  send_button: {
    alignContent: 'center',
    backgroundColor: BACKGROUND_COLOR,
    left: 374,
    position: 'absolute',
    top: 20,
    transform: [{ rotate: '45deg' }],
  },
  // eslint-disable-next-line react-native/no-color-literals
  textInput: {
    backgroundColor: '#E7ECF0',
    borderColor: '#E8E8E8',
    borderRadius: 19,
    borderWidth: 1,
    fontSize: 16,
    height: 38,
    left: 62,
    paddingLeft: 16,
    position: 'absolute',
    top: 11,
    width: 302,
  },
});
