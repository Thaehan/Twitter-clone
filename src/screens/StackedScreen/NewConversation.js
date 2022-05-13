/* eslint-disable react-native/sort-styles */
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';
import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
} from 'react';
import { useSelector } from 'react-redux';

import {
  GLOBAL_STYLES,
  SCREEN_WIDTH,
  HEADER_WIDTH,
  HEADER_HEIGHT,
} from '../../styles/Style';
import { CONVERSATION } from '../../constants/ScreenName';
import CircleButton from '../../components/button/CircleButton';
import UserItemButton from '../../components/button/UserItemButton';
import { getMultipleUsers } from '../../api/user';
import TextButton from '../../components/button/TextButton';
import {
  getMultipleConversation,
  createConversation,
} from '../../api/conversation';

export default function NewConversation({ navigation }) {
  const currentUser = useSelector((state) => state.user);
  const initData = useRef({ data: [], isLoaded: false });
  const [searchText, setSeacrhText] = useState('');
  const [userList, setUserList] = useState([]);
  const [conversationList, setConversationList] = useState(
    []
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Message',
      headerTitleAlign: 'center',
      headerLeft: () => {
        return (
          <TextButton
            title="Cancel"
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        );
      },
    });
  }, []);

  useEffect(() => {
    initData.current = { data: [], isLoaded: false };
  }, [currentUser.userId]);

  useEffect(() => {
    //Load all userData to initData to filt
    if (!initData.current.isLoaded) {
      getMultipleUsers()
        .then((userDocs) => {
          const tempList = [];
          userDocs.forEach((doc) => {
            if (doc.id != currentUser.userId) {
              tempList.push({ ...doc.data(), id: doc.id });
            }
          });
          initData.current.data = tempList;
          initData.current.isLoaded = true;
          setUserList(initData.current.data);
          //Conversation loadding after use
          getMultipleConversation()
            .then((conversationDocs) => {
              var tempList = [];
              conversationDocs.forEach((doc) => {
                if (
                  doc
                    .data()
                    .users.includes(currentUser.userId)
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
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      //Filter userList with searchText
      const searchResult = initData.current.data.filter(
        (user) => {
          const lowerCaseSearch = searchText.toLowerCase();
          const lowerCaseUsername = user.username
            .toString()
            .toLowerCase();
          return (
            lowerCaseUsername.indexOf(lowerCaseSearch) != -1
          );
        }
      );
      setUserList(searchResult);
    }
  }, [searchText]);

  const deleteHandle = () => {
    setSeacrhText('');
  };

  const userClickHandle = (userId) => {
    //Push and navigate to User Profile
    var conversationIdToGo = '';
    conversationList.forEach((conversation) => {
      if (
        conversation.users.includes(userId) &&
        conversation.users.includes(currentUser.userId)
      ) {
        conversationIdToGo = conversation.conversationId;
      }
    });
    if (conversationIdToGo != '') {
      navigation.navigate(CONVERSATION, {
        conversationId: conversationIdToGo,
      });
    } else {
      createConversation(
        [],
        [userId, currentUser.userId]
      ).then((newConversation) => {
        navigation.push(CONVERSATION, {
          conversationId: newConversation.id,
        });
      });
    }
  };

  return (
    <SafeAreaView
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        hidden={false}
        barStyle="dark-content"
      />
      <View style={styles.searchContainer}>
        <Text>To: </Text>
        <TextInput
          value={searchText}
          onChangeText={setSeacrhText}
          placeholder="Search User"
          style={styles.searchBar}
        />
        <TextButton
          title="X"
          onPress={deleteHandle}
          style={styles.deleteButton}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {userList.length != 0 &&
          userList.map((user, index) => (
            <UserItemButton
              key={index}
              style={styles.itemConainter}
              avatar={user.avatar}
              fullname={user.fullname}
              username={user.username}
              size={45}
              onPress={() => userClickHandle(user.id)}
            />
          ))}
        {userList.length == 0 && (
          <Text style={styles.text}>
            Can not find user with username: {searchText}
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  itemConainter: {
    marginBottom: 10,
    height: 50,
    width: SCREEN_WIDTH,
  },
  circleButton: {
    borderRadius: 50,
    alignItems: 'center',
    bottom: 20,
    right: 20,
    position: 'absolute',
  },
  searchBar: {
    width: '85%',
    height: 40,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 15,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '3%',
  },
  searchContainer: {
    paddingLeft: 15,

    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
