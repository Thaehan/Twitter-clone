import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StackActions } from '@react-navigation/native';

import { GLOBAL_STYLES } from '../../styles/Style';
import {
  CONTENT_SCREEN_HEIGHT,
  SCREEN_WIDTH,
  NULL_COLOR,
  HEADER_HEIGHT,
  NAVBAR_HEIGHT,
  MAIN_COLOR,
} from '../../styles/Style';
import Notifi from '../../components/Notification/Notifi';
import {
  createNotification,
  getNotificationById,
  getMultipleNotification,
  updateNotification,
  deleteNotificationById,
} from '../../api/notification';
import AvatarButton from '../../components/button/AvatarButton';
import IconButton from '../../components/button/IconButton';
import {
  SETTINGS,
  PROFILE,
  TWEET_DETAIL,
} from '../../constants/ScreenName';

export default function Notification({ navigation }) {
  const currentUser = useSelector((state) => state.user);
  const [notificationList, setNotificationList] = useState(
    []
  );

  const touchHandle = (tweetId) => {
    navigation.dispatch(
      StackActions.push(TWEET_DETAIL, { tweetId })
    );
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
      headerTitle: 'Notification',
      headerTitleAlign: 'center',
    });
  }, [currentUser.avatar]);

  useEffect(() => {
    var tempList = [];
    getMultipleNotification(
      'ofUser',
      '==',
      currentUser.userId
    )
      .then((docs) => {
        docs.forEach((doc) => {
          tempList.push({ ...doc.data(), id: doc.id });
        });
        setNotificationList(tempList);
      })
      .catch((error) => {
        alert(error);
      });

    return () => {
      tempList = [];
    };
  });

  return (
    <SafeAreaView
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {notificationList.length != 0 &&
          notificationList.map((notification) => (
            <Notifi
              key={notification.id}
              type={notification.type}
              from={notification.from}
              tweetId={notification.tweetId}
              onPress={() => {
                touchHandle(notification.tweetId);
              }}
              style={styles.notification}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },
  headerBarStyle: {
    height: HEADER_HEIGHT,
  },
  headerContainer: {
    backgroundColor: 'white',
    height: HEADER_HEIGHT,
  },
  leftHeader: {
    width: 60,
  },
  notification: {
    flex: 1,
    width: '100%',
  },
  rightHeader: {
    width: 60,
  },
  tabBarStyle: {
    height: NAVBAR_HEIGHT,
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
  },
});
