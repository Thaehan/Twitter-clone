import { View, Text } from 'react-native';
import React from 'react';

export default function CurrentProfile({
  navigation,
  route,
}) {
  return (
    <View>
      <Text>CurrentProfile {route.params.id}</Text>
    </View>
  );
}
