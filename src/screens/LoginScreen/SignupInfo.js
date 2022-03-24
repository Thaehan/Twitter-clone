import { View, Text } from 'react-native';
import React from 'react';

import { GLOBAL_STYLES } from '../../styles/Style';

export default function SignupInfo({ navigation, route }) {
  return (
    <View style={GLOBAL_STYLES.container}>
      <Text>{route.params.username}</Text>
      <Text>{route.params.email}</Text>
      <Text>{route.params.password}</Text>
    </View>
  );
}
