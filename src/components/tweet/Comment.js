import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import moment from 'moment';

import IconButton from '../button/IconButton';
import ImageButton from '../button/ImageButton';
import {
  GLOBAL_STYLES,
  BACKGROUND_COLOR,
  DEFAULT_COLOR,
} from '../../styles/Style';

//Nhận vào props: avatar, avatarPress, onPress, fullname, username, content
export default function Comment({
  avatar,
  username,
  fullname,
  commentId,
  textContent,
  dateCreated,
}) {
  const getTimeStamp = (dateCreated) => {
    const day = dateCreated.getDate();
    const month = dateCreated.getMonth();
    const year = dateCreated.getFullYear();

    moment.updateLocale('en', {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
      },
    });
    return moment([year, month, day]).fromNow();
  };

  return (
    <View
      styles={[GLOBAL_STYLES.container, styles.container]}
    >
      <TouchableOpacity style={styles.leftContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <View style={styles.userInfo}>
          <Text>{fullname}</Text>
          <Text>{username}</Text>
          <Text>{getTimeStamp(dateCreated)}</Text>
        </View>
        <Text style={styles.textContent}>
          {textContent}
        </Text>
        <View style={styles.interactionBar}>
          <IconButton
            icon="comment"
            type="evilicon"
            size={28}
            onPress={() => {}}
          />

          <IconButton
            icon="retweet"
            type="evilicon"
            size={28}
            onPress={() => {}}
            color={''}
          />

          <IconButton
            icon="heart"
            type="evilicon"
            size={28}
            onPress={() => {}}
            color={''}
          />
          <IconButton
            icon="share-apple"
            type="evilicon"
            size={28}
            onPress={() => {}}
            color={DEFAULT_COLOR}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  interactionBar: {},
  leftContainer: {},
  rightContainer: {},
  textContent: {},
  userInfo: {},
});
