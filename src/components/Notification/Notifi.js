import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import {
  MAIN_COLOR,
  BACKGROUND_COLOR,
  LIGHT_GRAY_TEXT_COLOR,
  CHAT_BACKGROUND_COLOR,
  SCREEN_WIDTH,
} from '../../styles/Style';
import { TWEET_DETAIL } from '../../constants/ScreenName';
import { color } from 'react-native-reanimated';
import { getUserById } from '../../api/user';
//props nhan vao userName, avatar, content
export default function Notifi({
  from,
  type,
  tweetId,
  onPress,
  style = {},
}) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserById(from)
      .then((doc) => {
        setUserData({ ...doc.data(), userId: doc.id });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <View style={styles.leftContainer}>
          <Icon
            name="star-four-points"
            type="material-community"
            color="#724DBD"
            style={styles.star}
          />
        </View>
        <View style={styles.rightContainer}>
          {type == 'like' ? (
            <Text style={styles.content}>
              {from} likes your post!
            </Text>
          ) : (
            <Text style={styles.content}>
              {from} comments your post!
            </Text>
          )}
          <Text style={styles.noti_of_system}>
            Hey! Maybe you missed something new!
          </Text>
          <Text style={styles.noti_of_system}>
            Check it out!
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#EDF0F1',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    flex: 1,
    paddingBottom: 15,
    width: '100%',
  },
  content: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
    textAlign: 'left',
    width: '90%',
  },
  leftContainer: {
    width: '10%',
  },
  noti_of_system: {
    alignSelf: 'center',
    color: '#A0A9B2',
    fontSize: 15,
    paddingBottom: 3,
    width: '90%',
  },
  rightContainer: {
    paddingTop: 15,
    width: '90%',
  },
  star: {
    color: '#724DBD',
    paddingLeft: 10,
    paddingTop: 5,
  },
});
