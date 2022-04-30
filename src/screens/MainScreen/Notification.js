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
        const tempList = [];
        docs.forErach((doc) => {
          if (doc.id != currentUser.userId) {
            tempList.push({
              ...doc.data(),
              fromUser: doc.id,
            });

            setNotificationList(tempList);
          }
        });
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
        <Notifi
          userName="Weed"
          content=" Are you using WordPress and migrating to the JAMstack? I wrote up a case study about how Smashing Magazine moved to JAMstack and saw great performance improvements and better security.

          smashingdrusteer.com/2020/01/migrat..."
        />
        <Notifi
          userName="Weed"
          content=" Are you using WordPress and migrating to the JAMstack? I wrote up a case study about how Smashing Magazine moved to JAMstack and saw great performance improvements and better security.

          smashingdrusteer.com/2020/01/migrat..."
        />
        <Notifi
          userName="Weed"
          content=" Are you using WordPress and migrating to the JAMstack? I wrote up a case study about how Smashing Magazine moved to JAMstack and saw great performance improvements and better security.

          smashingdrusteer.com/2020/01/migrat..."
        />
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
