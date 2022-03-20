import { View, Text } from 'react-native';
import React from 'react';

export default function SignupInfo({ navigation, route }) {
  return (
    <View>
      <Text>{route.params.username}</Text>
      <Text>{route.params.email}</Text>
      <Text>{route.params.password}</Text>
    </View>
  );
}
