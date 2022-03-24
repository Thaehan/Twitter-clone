import { View, Text } from 'react-native';
import React from 'react';
import { Bubble_Send, Bubble_Received } from '../../components/ChatBubble';
import { GLOBAL_STYLES } from '../../styles/Style';

export default function Message() {
  return (
    <View style={GLOBAL_STYLES.container}>
      <Text>Message</Text>
      <Bubble_Send content='tin nhan da gui 1'/>
      <Bubble_Send content='tin nhan da gui 2'/>
      <Bubble_Received content='tin nhan da nhan 1'/>
      <Bubble_Received content='tin nhan da nhan 2'/>
      <Bubble_Received content='tin nhan da nhan dai dai dai dai dai dai vai vai vai vai'/>
    </View>
  );
}
