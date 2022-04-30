import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import ListItemMessageUser from '../../components/Message/ListItemMessageUser';
import CircleButton from '../../components/button/CircleButton';
import {
  createConversation,
  getConversationById,
  getMultipleConversation,
  updateConversation,
  deleteConversationById,
} from '../../api/conversation';
import {
  GLOBAL_STYLES,
  BACKGROUND_COLOR,
} from '../../styles/Style';
import {
  CONTENT_SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../styles/Style';
import { DocumentSnapshot } from 'firebase/firestore/lite';
import {
  CONVERSATION,
  MESSAGESTACK,
} from '../../constants/ScreenName';

export default function Message({ navigation }) {
  const [conversationList, setConversationList] = useState(
    []
  );
  const currentUser = useSelector((state) => state.user);
  //console.log('current User: ' + currentUser.userId);
  useEffect(() => {
    //load all conversations of an user base on userId
    getMultipleConversation('conversationName', '!=', '')
      .then((docs) => {
        var tempList = [];
        docs.forEach((doc) => {
          if (doc.data().userId == currentUser.userId) {
            tempList.push({ ...doc.data(), id: doc.id });
          }
        });
        setConversationList(tempList);
      })
      .catch((error) => {
        alert(error);
      });
  });
  const conversationClickHandle = (conversationId) => {
    //chuyen huong sang man hinh conversation
    navigation.navigate(CONVERSATION, {
      conversationId: conversationId,
    });
  };
  return (
    <SafeAreaView
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {conversationList.length != 0 &&
          conversationList.map((conversation) => (
            <ListItemMessageUser
              key={conversation.id}
              conversationName={
                conversation.conversationName
              }
              avatar={conversation.avatar}
              content={
                conversation.content[
                  conversation.content.length - 1
                ]
              }
              email={conversation.email}
              onPress={conversationClickHandle(
                conversation.id
              )}
            />
          ))}
        {conversationList.length == 0 && (
          <Text style={styles.text}>
            Can not find any conversation
          </Text>
        )}
      </ScrollView>
      <CircleButton
        type="font-awesome-5"
        icon="plus"
        color="#ffffff"
        size={30}
        style={styles.circleButton}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    borderRadius: 50,
    alignItems: 'center',
    bottom: 20,
    right: 20,
    position: 'absolute',
  },
  container: {
    backgroundColor: BACKGROUND_COLOR,

    flex: 2,
    // height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
