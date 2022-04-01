import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React from 'react';

import {
  GLOBAL_STYLES,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../styles/Style';

export default function SignupInfo({ navigation, route }) {
  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        hidden={false}
        barStyle="dark-content"
      />
      <Text>{route.params.username}</Text>
      <Text>{route.params.email}</Text>
      <Text>{route.params.password}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
});
