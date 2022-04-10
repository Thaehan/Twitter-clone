import { StyleSheet } from 'react-native';

const SCREEN_HEIGHT = 736;
const SCREEN_WIDTH = 414;
// phần màn hình còn lại sau khi trừ navbar (65), topheader (55) trừ status (20) hơi ảo k hiểu sao ra 540
const HEADER_HEIGHT = 55;
const NAVBAR_HEIGHT = 65;
const CONTENT_SCREEN_HEIGHT = 540;
const LIKED_COLOR = "#CE395F";
const RETWEET_COLOR = "#19cf86";
const DEFAULT_COLOR = "#687684";

const GLOBAL_STYLES = StyleSheet.create({
  container: {
    fontFamily: 'sans-serif',
    backgroundColor: 'white',
    fontSize: 16,
  },
  fullname: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: '400',
    color: '#86939A',
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: '400',
  },
});

export {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  GLOBAL_STYLES,
  CONTENT_SCREEN_HEIGHT,
  NAVBAR_HEIGHT,
  HEADER_HEIGHT,
  LIKED_COLOR,
  DEFAULT_COLOR,
  RETWEET_COLOR
};
