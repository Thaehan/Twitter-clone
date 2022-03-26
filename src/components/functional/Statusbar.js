import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { SCREEN_WIDTH } from '../../styles/Style';

export default function Statusbar() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: 44,
    backgroundColor: '#ffffff',
  },
});
