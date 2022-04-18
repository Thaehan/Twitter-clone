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
  MAIN_COLOR,
  BACKGROUND_COLOR,
  DARK_GREY_TEXT_COLOR
} from '../../styles/Style';
import CircleButton from '../../components/button/CircleButton';
import TextInputMessage from '../../components/Message/TextInputMessage';
import moment from 'moment';

export default function Conversation({ navigation }) {
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
  circleButton: {
    alignItems: 'center',
    borderRadius: 50,
    bottom: 60,
    position: 'absolute',
    right: 20,
  },
  container: {
    flex: 2,
    // height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,

  },
  //vung chua cac tin nhan    

  conversation: {
    backgroundColor: BACKGROUND_COLOR,

    fontFamily: 'Open Sans',
    fontSize: 16,

    height: CONTENT_SCREEN_HEIGHT - 60,

    width: SCREEN_WIDTH,
  },
  header_bar_message: {
    backgroundColor: BACKGROUND_COLOR,
    fontFamily: 'Open Sans',
    fontSize: 16,
    height: 70,
    position: 'relative',
    width: SCREEN_WIDTH,
  },
  user_name: {
    alignItems: 'center',
    color: BACKGROUND_COLOR,
    fontWeight: 'bold',
    left: 128,
    textAlign: 'center',
    top: 40,
  },
});
