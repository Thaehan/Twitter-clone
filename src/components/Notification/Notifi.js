import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  MAIN_COLOR,
  BACKGROUND_COLOR,
  LIGHT_GRAY_TEXT_COLOR,
  CHAT_BACKGROUND_COLOR,
  SCREEN_WIDTH,
} from '../../styles/Style';
import IconButton from '../button/IconButton';
import AvatarButton from '../button/AvatarButton';
import { color } from 'react-native-reanimated';
//props nhan vao userName, avatar, content
export default function Notifi(props) {
  return (
    <TouchableOpacity style={notification.container}>
      <IconButton
        icon="star-four-points"
        type="material-community"
        color="#724DBD"
        style={notification.star}
      />
      <AvatarButton
        source={props.avatar}
        style={notification.avatar}
      />
      <Text style={notification.noti_of_system}>
        In case you missed {props.userName}'s Tweet
      </Text>
      <Text style={notification.content}>
        {props.content}
      </Text>
    </TouchableOpacity>
  );
}

const notification = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: 230,
    borderBottomColor: '#EDF0F1',
    borderBottomWidth: 0.5,

    backgroundColor: '#ffffff',
  },
  star: {
    position: 'absolute',
    width: 24,
    height: 22,
    left: 18,
    top: 10,
    color: '#724DBD',
  },
  avatar: {
    position: 'absolute',
    width: 37,
    height: 33,
    left: 50,
    top: 10,
  },

  noti_of_system: {
    position: 'absolute',
    left: 63,
    top: 50,
    width: 310,
    height: 18,
    fontSize: 15,
    color: '#A0A9B2',
  },
  content: {
    position: 'absolute',
    left: 63,
    top: 78,
    width: 311,
    height: 154,
    textAlign: 'left',
    fontSize: 15,
    color: '#A0A9B2',
  },
});
