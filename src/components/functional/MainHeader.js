import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, { useContext } from 'react';

import { SCREEN_WIDTH } from '../../styles/Style';
import ImageButton from '../button/ImageButton';
import { logo } from '../../constants/ImageAssets';
import IconButton from '../button/IconButton';
import { LoginContext } from '../../context/LoginContext';

//Nhận vào nội dung nút ở giữa
export default function Headerbar(props) {
  const loginContext = useContext(LoginContext);

  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        hidden={false}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <ImageButton
          source={logo}
          size={30}
          style={styles.leftContainer}
        />

        <IconButton
          type="font-awesome"
          icon="gear"
          size={30}
          style={styles.rightContainer}
          onPress={loginContext.loginHandle}
        />
      </View>
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
