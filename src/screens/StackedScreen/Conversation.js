import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { getMultipleMessage } from '../../api/message';
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
  DARK_GREY_TEXT_COLOR,
} from '../../styles/Style';
import CircleButton from '../../components/button/CircleButton';
import TextInputMessage from '../../components/Message/TextInputMessage';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
export default function Conversation({
  navigation,
  route,
}) {
  const [messageList, setMessageList] = useState([]);
  const currentUser = useSelector((state) => state.user);
  useEffect(() => {
    getMultipleMessage('conversationId', '==', route.params.conversationId)
      .then((docs) => {
        console.log(docs)
        var tempList = [];
        docs.forEach((doc) => {
          tempList.push({ ...doc.data(), id: doc.id });
        });
        setMessageList(tempList);
      })
      .catch((error) => {
        alert(error);
      });
  });

  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.conversation}
      >
        {messageList.length != 0 &&
          messageList.map((message) => (
            <View>
              {message.senderId != currentUser.userId && (
                <Bubble_Received
                  key={message.id}
                  date={message.sendTime}
                  content={message.content}
                />
              )}
              {message.senderId == currentUser.userId && (
                <Bubble_Send
                  key={message.id}
                  date={message.sendTime}
                  content={message.content}
                />
              )}
            </View>
          ))}
      </ScrollView>

      <TextInputMessage

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

    fontSize: 16,

    height: CONTENT_SCREEN_HEIGHT - 60,

    width: SCREEN_WIDTH,
  },
  header_bar_message: {
    backgroundColor: BACKGROUND_COLOR,
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
