import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import React from 'react';

import ListItemMessageUser from '../../components/Message/ListItemMessageUser';
import ListItemUser from '../../components/Message/ListItemUser';
import { GLOBAL_STYLES } from '../../styles/Style';
import {
  CONTENT_SCREEN_HEIGHT,
  SCREEN_WIDTH,
  NULL_COLOR
} from '../../styles/Style';

export default function Notification({ navigation }) {
  return <View></View>;
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
    backgroundColor: NULL_COLOR,

    flex: 2,
    // height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
});
