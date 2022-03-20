import { StyleSheet } from 'react-native';

const SCREEN_HEIGHT = 812;
const SCREEN_WIDTH = 375;

const CONTAINER_STYLES = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    fontFamily: 'Open Sans',
    backgroundColor: 'white',
    fontSize: 16,
  },
});

export { SCREEN_HEIGHT, SCREEN_WIDTH, CONTAINER_STYLES };
