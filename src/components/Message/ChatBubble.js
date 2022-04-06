import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import React, { useState, useEffect } from 'react';
import moment from 'moment';
var now = moment().format('DD/MM/YYYY');
//const [date, setShowingDate] = useState('');
const handlePress = () => {
  return <Text style={message.date}>{now}</Text>;
};
const Bubble_Send = (props) => {
  return (
    <>
      <TouchableOpacity
        style={message.bubble_send}
        onPress={handlePress}
      >
        <Text style={message.text_message_send}>
          {props.content}
        </Text>
      </TouchableOpacity>
    </>
  );
};
const Bubble_Received = (props) => {
  return (
    <TouchableOpacity
      style={message.bubble_received}
      onPress={handlePress}
    >
      <Text style={message.text_message_received}>
        {props.content}
      </Text>
      <Text style></Text>
    </TouchableOpacity>
  );
};

const message = StyleSheet.create({
  bubble_send: {
    alignSelf: 'flex-end',
    textAlign: 'right',
    alignContent: 'center',
    maxWidth: '60%',
    marginTop: 5,
    fontWeight: '500',
    borderRadius: 13,
    backgroundColor: '#1DA1F2',
  },
  bubble_received: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    maxWidth: '60%',
    marginTop: 5,
    fontWeight: '500',
    borderRadius: 13,
    backgroundColor: '#EFF3F4',
  },
  text_message_send: {
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    color: '#ffffff',
  },
  text_message_received: {
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    color: '#000000',
  },
  date: {
    position: 'absolute',

    height: 15,
    marginTop: 3,
    color: '#DADEE0',
  },
});

export { Bubble_Send, Bubble_Received };
