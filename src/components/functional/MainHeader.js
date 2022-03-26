import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { SCREEN_WIDTH } from '../../styles/Style';
import ImageButton from '../button/ImageButton';
import IconButton from '../button/IconButton';
import { logo } from '../../constants/ImageAssets';
import { faGear } from '@fortawesome/free-solid-svg-icons';

//Nhận vào nội dung nút ở giữa
export default function Headerbar(props) {
  return (
    <View style={styles.container}>
      <ImageButton
        source={logo}
        size={38}
        style={styles.leftContainer}
      />

      <IconButton
        size={'xl'}
        style={styles.leftContainer}
        icon={faGear}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    width: SCREEN_WIDTH,
  },
  leftContainer: {
    alignContent: 'center',
    alignSelf: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  middleContainer: {
    alignContent: 'center',
    alignSelf: 'center',
  },
  rightContainer: {
    alignContent: 'center',
    alignSelf: 'center',
  },
});
