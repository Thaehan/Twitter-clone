import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import IconButton from '../button/IconButton';

const Bubble_Send = (props) => {
  var [messagePressed, setMessagePressed] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setMessagePressed(!messagePressed)}
    >
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
        }}
      >
        {messagePressed ? (
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <IconButton
              style={{
                backgroundColor: '#ffffff',
                marginRight: 5,
                marginTop: 15,
              }}
              type="material"
              icon="more-vert"
              color="#AAB2B9"
              size={20}
            ></IconButton>
            <IconButton
              style={{
                backgroundColor: '#ffffff',
                marginRight: 15,
                marginTop: 15,
              }}
              type="material-community"
              icon="heart-plus-outline"
              color="#AAB2B9"
              size={20}
            ></IconButton>
          </View>
        ) : null}
        <TouchableOpacity
          style={message.bubble_send}
          onPress={() => setMessagePressed(!messagePressed)}
        >
          <Text style={message.text_message_send}>
            {props.content}
          </Text>
        </TouchableOpacity>
      </View>
      {messagePressed ? (
        <Text
          style={{
            textAlign: 'right',
            marginRight: 5,
            fontSize: 12,
            height: 15,
            marginTop: 3,
            color: '#AAB2B9',
          }}
        >
          {props.date}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};
const Bubble_Received = (props) => {
  var [messagePressed, setMessagePressed] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setMessagePressed(!messagePressed)}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          style={message.bubble_received}
          onPress={() => setMessagePressed(!messagePressed)}
        >
          <Text style={message.text_message_received}>
            {props.content}
          </Text>
        </TouchableOpacity>
        {messagePressed ? (
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <IconButton
              style={{
                backgroundColor: '#ffffff',
                marginLeft: 15,
                marginTop: 15,
              }}
              type="material-community"
              icon="heart-plus-outline"
              color="#AAB2B9"
              size={20}
            ></IconButton>
            <IconButton
              style={{
                backgroundColor: '#ffffff',
                marginLeft: 5,
                marginTop: 15,
              }}
              type="material"
              icon="more-vert"
              color="#AAB2B9"
              size={20}
            ></IconButton>
          </View>
        ) : null}
      </View>
      {messagePressed ? (
        <Text
          style={{
            textAlign: 'left',
            marginRight: 5,
            fontSize: 12,
            height: 15,
            marginTop: 3,
            color: '#AAB2B9',
          }}
        >
          {props.date}
        </Text>
      ) : null}
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
    right: 5,
    fontWeight: '500',
    borderRadius: 13,
    backgroundColor: '#1DA1F2',
    borderBottomRightRadius: 0,
  },
  bubble_received: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    maxWidth: '60%',
    marginTop: 5,
    left: 5,

    fontWeight: '500',
    borderRadius: 13,
    backgroundColor: '#EFF3F4',
    borderBottomLeftRadius: 0,
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
    fontSize: 12,
    height: 15,
    marginTop: 3,
    color: '#FF0000',
  },
});

export { Bubble_Send, Bubble_Received };
