import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Statusbar() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 44,
    backgroundColor: '#ffffff',
  },
});
