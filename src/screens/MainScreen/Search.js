/* eslint-disable react-native/sort-styles */
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import React from 'react';

import {
  GLOBAL_STYLES,
  SCREEN_WIDTH,
  CONTENT_SCREEN_HEIGHT,
  NULL_COLOR
} from '../../styles/Style';
import CircleButton from '../../components/button/CircleButton';
import TestImage from '../TestImage';

export default function Search({ navigation }) {
  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <TestImage />

      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.containerItem}>
          <Text>Non</Text>
        </View>
        <View style={styles.containerItem}>
          <Text>Non</Text>
        </View>
        <View style={styles.containerItem}>
          <Text>Non</Text>
        </View>
        <View style={styles.containerItem}>
          <Text>Non</Text>
        </View>
        <View style={styles.containerItem}>
          <Text>Non</Text>
        </View>
      </ScrollView>
      <CircleButton
        type="font-awesome-5"
        icon="plus"
        color="#ffffff"
        size={30}
        style={styles.circleButton}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: NULL_COLOR,

    flex: 2,
    // height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  containerItem: {
    height: 300,
  },
  circleButton: {
    borderRadius: 50,
    alignItems: 'center',
    bottom: 20,
    right: 20,
    position: 'absolute',
  },
});
