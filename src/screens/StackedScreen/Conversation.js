import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

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
import IconButton from '../../components/button/IconButton';

export default function Conversation({
  navigation,
  route,
}) {
  const [messageList, setMessageList] = useState([]);
  const currentUser = useSelector((state) => state.user);
  const [text, setText] = useState('');

  const sendHandle = () => {};

  navigation.setOptions({
    headerTitle: 'Message',
    headerLeft: () => {
      return (
        <IconButton
          type="ionicon"
          icon="ios-arrow-back-outline"
          onPress={() => navigation.goBack()}
        />
      );
    },
  });

  useEffect(() => {
    getMultipleMessage(
      'conversationId',
      '==',
      route.params.conversationId
    )
      .then((docs) => {
        console.log(docs);
        var tempList = [];
        docs.forEach((doc) => {
          tempList.push({ ...doc.data(), id: doc.id });
        });
        setMessageList(tempList);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
      </TouchableWithoutFeedback>
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
    width: SCREEN_WIDTH,
  },

  conversation: {
    backgroundColor: BACKGROUND_COLOR,
    fontSize: 16,
    height: CONTENT_SCREEN_HEIGHT - 60,
    width: SCREEN_WIDTH,
  },
  file_send: {
    alignContent: 'center',
    backgroundColor: BACKGROUND_COLOR,
    left: 12,
    position: 'absolute',
    top: 16,
  },
  header_bar_message: {
    backgroundColor: BACKGROUND_COLOR,
    fontSize: 16,
    height: 70,
    position: 'relative',
    width: SCREEN_WIDTH,
  },
  message_input: {
    backgroundColor: BACKGROUND_COLOR,
    bottom: 0,
    fontFamily: 'Open Sans',
    fontSize: 16,
    height: 60,
    left: 0,
    position: 'absolute',
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

  user_name: {
    alignItems: 'center',
    color: BACKGROUND_COLOR,
    fontWeight: 'bold',
    left: 128,
    textAlign: 'center',
    top: 40,
  },
});
