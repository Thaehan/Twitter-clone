import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import React from 'react';

import ListItemMessageUser from '../../components/Message/ListItemMessageUser';
import ListItemUser from '../../components/Message/ListItemUser';
import { GLOBAL_STYLES } from '../../styles/Style';
import {
  CONTENT_SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../styles/Style';

export default function Notification({ navigation }) {
  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'cyan',
  },
  circleButton: {
    borderRadius: 50,
    alignItems: 'center',
    bottom: 20,
    right: 20,
    position: 'absolute',
  },
});
