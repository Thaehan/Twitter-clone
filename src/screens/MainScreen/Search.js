import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';

import {
  GLOBAL_STYLES,
  SCREEN_WIDTH,
  CONTENT_SCREEN_HEIGHT,
} from '../../styles/Style';
import CircleButton from '../../components/button/CircleButton';

export default function Search() {
  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <ScrollView
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
        icon="plus"
        color="#ffffff"
        size={30}
        style={styles.circleButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: CONTENT_SCREEN_HEIGHT,
    backgroundColor: 'cyan',
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
