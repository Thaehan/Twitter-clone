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
import moment from 'moment';

export default function Message({ navigation }) {
  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <View style={styles.conversation}>
        <Bubble_Send
          date={moment().format('llll')}
          content="Anh ban a..."
        />
        <Bubble_Send
          date={moment().format('llll')}
          content="Toi co the.....Ban dang lam gi vay"
        />
        <Bubble_Received
          date={moment().format('llll')}
          content="Chao ban too"
        />
        <Bubble_Received
          date={moment().format('llll')}
          content="Minh dang rush deadline"
        />
        <Bubble_Received
          date={moment().format('llll')}
          content="Lam cung minh khong? Minh tra tien voi hom nao do bao di an"
        />
      </View>
      <TextInputMessage />
      <CircleButton
        type="material-community"
        icon="message-plus"
        color="#ffffff"
        size={30}
        style={styles.circleButton}
      />
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
    bottom: 60,
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
    height: CONTENT_SCREEN_HEIGHT - 60,
    fontFamily: 'Open Sans',
    backgroundColor: 'white',
    fontSize: 16,
  },
});
