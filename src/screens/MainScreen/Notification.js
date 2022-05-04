import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import { GLOBAL_STYLES } from '../../styles/Style';
import {
  CONTENT_SCREEN_HEIGHT,
  SCREEN_WIDTH,
  NULL_COLOR,
} from '../../styles/Style';
import Notifi from '../../components/Notification/Notifi';
import { useSelector } from 'react-redux';
import {
  createNotification,
  getNotificationById,
  getMultipleNotification,
  updateNotification,
  deleteNotificationById,
} from '../../api/notification';
import { useState, useEffect } from 'react';
export default function Notification({ navigation }) {
  const [notificationList, setNotificationList] = useState(
    []
  );
  const currentUser = useSelector((state) => state.user);
  useEffect(() => {
    getMultipleNotification('textContent', '!=', '')
      .then((docs) => {
        var tempList = [];
        docs.forEach((doc) => {
          if (doc.fromUser != currentUser.userId) {
            tempList.push({ ...doc.data(), id: doc.id });
          }
        });
        setNotificationList(tempList);
      })
      .catch((error) => {
        alert(error);
      });
  });
  const notificationClickhandle = (conversationId) => {
    //chuyen huong sang thong bao ???
  };
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
              userName={notification.fromUser}
              content={notification.textContent}
            />
          ))}
      </ScrollView>
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
    backgroundColor: 'white',

    flex: 2,
    // height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
});
