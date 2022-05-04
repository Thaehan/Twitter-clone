import {
  View,
  Image,
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
      <Image
        source={{ uri: props.avatar }}
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
  avatar: {
    borderRadius: 37 / 2,
    height: 33,
    left: 50,
    position: 'absolute',
    top: 10,
    width: 37,
  },
  container: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#EDF0F1',
    borderBottomWidth: 0.5,
    height: 230,

    width: SCREEN_WIDTH,
  },
  content: {
    color: '#A0A9B2',
    fontSize: 15,
    height: 154,
    left: 63,
    position: 'absolute',
    textAlign: 'left',
    top: 78,
    width: 311,
  },

  noti_of_system: {
    color: '#A0A9B2',
    fontSize: 15,
    height: 18,
    left: 63,
    position: 'absolute',
    top: 50,
    width: 310,
  },
  star: {
    color: '#724DBD',
    height: 22,
    left: 18,
    position: 'absolute',
    top: 10,
    width: 24,
  },
});
