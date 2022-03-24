import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';

import { GLOBAL_STYLES } from '../../styles/Style';

const renderItem = (item) => {
  return <Image source={item.source} />;
};

export default function TweetInFeed(props) {
  return (
    <View style={styles.container}>
      {/* <Image styles={styles.avatar} source={props.avatar} /> */}
      <Text style={GLOBAL_STYLES.fullname}>
        {props.fullname}
      </Text>
      <Text style={GLOBAL_STYLES.username}>
        {'@' + props.username}
      </Text>
      {props.text && (
        <Text style={GLOBAL_STYLES.text}>{props.text}</Text>
      )}
      {/* {props.image && (
        <FlatList
          data={props.image}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 430,
    width: 375,
    backgroundColor: '#ffffff',
  },
  avatar: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
