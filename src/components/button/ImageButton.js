import { View } from 'react-native';
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { HEADER_HEIGHT } from '../../styles/Style';

//Nhưng Image button là những cái ảnh tròn có thể ấn vào
//nhận vào style=(Căn chỉnh container) size= onPress= (size x size), source ảnh
export default function ImageButton(props) {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
      >
        <Image
          source={props.source}
          style={{
            height: props.size,
            width: props.size,
          }}
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
