import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
} from 'react';
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
import { getMultipleUsers } from '../../api/user';
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
  NEW_CONVERSATION,
  SETTINGS,
  PROFILE,
} from '../../constants/ScreenName';
import AvatarButton from '../../components/button/AvatarButton';
import IconButton from '../../components/button/IconButton';

export default function Message({ navigation }) {
  const currentUser = useSelector((state) => state.user);
  const [conversationList, setConversationList] = useState(
    []
  );
  const [userList, setUserList] = useState([]);

  const conversationClickHandle = (conversationId) => {
    //chuyen huong sang man hinh conversation
    navigation.navigate(CONVERSATION, {
      conversationId: conversationId,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <AvatarButton
            style={styles.leftHeader}
            source={currentUser.avatar}
            userId={currentUser.userId}
            size={30}
            onPress={() => {
              navigation.navigate(PROFILE, {
                userId: currentUser.userId,
              });
            }}
          />
        );
      },
      headerRight: () => {
        return (
          <IconButton
            style={styles.rightHeader}
            type="evilicon"
            icon="gear"
            color="black"
            size={30}
            onPress={() => {
              navigation.navigate(SETTINGS);
            }}
          />
        );
      },
      headerTitle: 'Message',
      headerTitleAlign: 'center',
    });
  }, [currentUser.avatar]);

  useEffect(() => {
    //load all conversations which current user take part in
    getMultipleConversation('conversationName', '!=', '')
      .then((docs) => {
        var tempList = [];
        docs.forEach((doc) => {
          if (
            doc.data().users.includes(currentUser.userId)
          ) {
            tempList.push({
              ...doc.data(),
              conversationId: doc.id,
            });
          }
        });
        setConversationList(tempList);
      })
      .catch((error) => {
        alert(error);
      });
  });

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
              key={conversation.conversationId}
              //conversationName={
              //  conversation.conversationName
              //}
              //avatar={conversation.avatar}
              content={
                conversation.content[
                  conversation.content.length - 1
                ]
              }
              //email={conversation.email}
              onPress={() =>
                conversationClickHandle(
                  conversation.conversationId
                )
              }
            />
          ))}
        {conversationList.length == 0 && (
          <Text style={styles.text}>
            No conversation. Let's make some!
          </Text>
        )}
      </ScrollView>
      <CircleButton
        type="material-community"
        icon="message-plus"
        color="#ffffff"
        size={30}
        style={styles.circleButton}
        onPress={() => {
          navigation.push(NEW_CONVERSATION, { navigation });
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    alignItems: 'center',
    borderRadius: 50,
    bottom: 20,
    position: 'absolute',
    right: 20,
  },
  container: {
    backgroundColor: BACKGROUND_COLOR,

    flex: 2,
    // height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
