import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
// Nhận vào style cho container để căn chỉnh, type: loại icon, icon để hiện, size, color
export default function IconButton({
  style,
  onPress,
  color,
  type,
  icon,
  size,
}) {
  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Icon
          color={color}
          type={type}
          name={icon}
          size={size}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',

    alignSelf: 'center',
    borderRadius: 50,
  },
});
