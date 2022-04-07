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
          <Text style={[GLOBAL_STYLES.fullname]}>
            {props.fullname}
          </Text>
          <Text
            style={[
              GLOBAL_STYLES.username,
              styles.username,
            ]}
          >
            {props.username}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={GLOBAL_STYLES.text}>
            {props.content}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 40,
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
    height: 40,
  },
  username: {
    marginLeft: 7,
  },
  contentContainer: {
    flex: 2,
    marginLeft: 10,
    marginTop: 15,
  },
});
