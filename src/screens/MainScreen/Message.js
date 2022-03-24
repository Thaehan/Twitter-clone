import { View, Text } from 'react-native';
import React from 'react';

import { GLOBAL_STYLES } from '../../styles/Style';

export default function Message() {
  return (
    <View style={GLOBAL_STYLES.container}>
      <Text>Message</Text>
    </View>
  );
}
