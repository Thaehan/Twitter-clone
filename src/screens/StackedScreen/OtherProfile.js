import { View, Text } from 'react-native';
import React from 'react';

export default function OtherProfile({
  navigation,
  route,
}) {
  return (
    <View>
      <Text>OtherProfile {route.params.id}</Text>
    </View>
  );
}
