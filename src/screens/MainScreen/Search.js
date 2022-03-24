import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';

import { GLOBAL_STYLES } from '../../styles/Style';

export default function Search() {
  return (
    <ScrollView
      style={GLOBAL_STYLES.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text>Non</Text>
      </View>
      <View style={styles.container}>
        <Text>Non</Text>
      </View>
      <View style={styles.container}>
        <Text>Non</Text>
      </View>
      <View style={styles.container}>
        <Text>Non</Text>
      </View>
      <View style={styles.container}>
        <Text>Non</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#00000',
  },
});
