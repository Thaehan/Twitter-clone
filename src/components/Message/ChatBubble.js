import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import IconButton from '../button/IconButton';
import {
  MAIN_COLOR,
  BACKGROUND_COLOR,
  LIGHT_GRAY_TEXT_COLOR,
  CHAT_BACKGROUND_COLOR,
} from '../../styles/Style';
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
                backgroundColor: BACKGROUND_COLOR,
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
                backgroundColor: BACKGROUND_COLOR,
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
            color: LIGHT_GRAY_TEXT_COLOR,
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
                backgroundColor: BACKGROUND_COLOR,
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
                backgroundColor: BACKGROUND_COLOR,
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
            color: LIGHT_GRAY_TEXT_COLOR,
          }}
        >
          {props.date}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

const message = StyleSheet.create({
  bubble_received: {
    alignSelf: 'flex-start',
    backgroundColor: CHAT_BACKGROUND_COLOR,
    borderBottomLeftRadius: 0,
    borderRadius: 13,
    fontWeight: '500',
    left: 5,
    marginTop: 5,
    maxWidth: '60%',
    textAlign: 'left',
  },
  bubble_send: {
    alignContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: MAIN_COLOR,
    borderBottomRightRadius: 0,
    borderRadius: 13,
    fontWeight: '500',
    marginTop: 5,
    maxWidth: '60%',
    right: 5,
    textAlign: 'right',
  },
  date: {
    color: MAIN_COLOR,
    fontSize: 12,
    height: 15,
    marginTop: 3,
    position: 'absolute',
  },
  text_message_received: {
    color: '#000000',
    fontWeight: '500',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  text_message_send: {
    color: BACKGROUND_COLOR,
    fontWeight: '500',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
});

export { Bubble_Send, Bubble_Received };
