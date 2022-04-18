import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
// Nhận vào style cho container để căn chỉnh, icon để hiện, type của icon, size
export default function CircleButton(props) {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
      >
        <Icon
          name={props.icon}
          type={props.type}
          size={props.size}
          color={props.color}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#1da1f2',
    height: 60,
    width: 60,
  },
});
