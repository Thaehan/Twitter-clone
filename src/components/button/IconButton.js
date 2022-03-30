import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
// Nhận vào style cho container để căn chỉnh, type: loại icon, icon để hiện, size, color
export default function IconButton(props) {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
      >
        <Icon
          color={props.color}
          type={props.type}
          name={props.icon}
          size={props.size}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 50,
  },
});
