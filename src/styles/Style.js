import { StyleSheet } from 'react-native';

const SCREEN_HEIGHT = 736;
const SCREEN_WIDTH = 414;

const GLOBAL_STYLES = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    fontFamily: 'Open Sans',
    backgroundColor: 'white',
    fontSize: 16,
  },
  fullname: {
    fontFamily: 'Open Sans',
    fontSize: 15,
    fontWeight: 'bold',
  },
  username: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '400',
    color: '#86939A',
  },
  text: {
    fontFamily: 'Open Sans',
    fontSize: 15,
    fontWeight: '400',
  },
});

export { SCREEN_HEIGHT, SCREEN_WIDTH, GLOBAL_STYLES };
