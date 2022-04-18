import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ImageButton from '../button/ImageButton';
import { GLOBAL_STYLES } from '../../styles/Style';

//Nhận vào props: avatar, avatarPress, onPress, fullname, username, content
export default function Comment(props) {
  return (
    <View style={styles.container}>
      <ImageButton
        style={styles.imageButtonContainer}
        source={props.avatar}
        size={61}
        onPress={props.onPress}
        avatarPress={props.avatarPress}
      />
      <View style={styles.leftContainer}>
        <View style={styles.userContainer}>
          <Text style={GLOBAL_STYLES.fullname}>
            {props.fullname}
          </Text>
          <Text style={GLOBAL_STYLES.username}>
            {props.username}
          </Text>
        </View>
        <Text style={GLOBAL_STYLES.text}>
          {props.content}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 414,
    backgroundColor: '#ffffff',
  },
  imageButtonContainer: {
    height: 100,
    width: 90,
  },
  leftContainer: {
    width: 324,
  },
  userContainer: {
    flexDirection: 'row',
  },
});
