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
import { ScreenContainer } from 'react-native-screens';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import {
  GLOBAL_STYLES,
  SCREEN_WIDTH,
  HEADER_WIDTH,
  HEADER_HEIGHT,
} from '../../styles/Style';
import CircleButton from '../../components/button/CircleButton';
import UserItemButton from '../../components/button/UserItemButton';
import { getMultipleUsers } from '../../api/user';
import TextButton from '../../components/button/TextButton';
import { OTHER_PROFILE } from '../../constants/ScreenName';

export default function Search({ navigation }) {
  const currentUser = useSelector((state) => state.user);
  const initData = useRef({ data: [], isLoaded: false });
  const [searchText, setSeacrhText] = useState('');
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    initData.current = { data: [], isLoaded: false };
  }, [currentUser.userId]);

  useEffect(() => {
    //Load all userData to initData to filt
    if (!initData.current.isLoaded) {
      getMultipleUsers('username', '!=', '')
        .then((docs) => {
          const tempList = [];
          docs.forEach((doc) => {
            if (doc.id != currentUser.userId) {
              tempList.push({ ...doc.data(), id: doc.id });
            }
          });
          initData.current.data = tempList;
          initData.current.isLoaded = true;
          setUserList(initData.current.data);
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
    navigation.navigate(OTHER_PROFILE, { userId: userId });
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
        <TextInput
          value={searchText}
          onChangeText={setSeacrhText}
          placeholder="Search User"
          style={styles.searchBar}
        />
        <TextButton
          title="Delete"
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
    width: 330,
    height: 40,
    backgroundColor: '#f6f6f6',
    borderColor: '#f8f8f8',
    borderRadius: 25,
    borderWidth: 1,
    fontSize: 16,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 15,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH - 330,
  },
  searchContainer: {
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
