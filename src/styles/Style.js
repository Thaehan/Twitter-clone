import { StyleSheet } from 'react-native';

const SCREEN_HEIGHT = 736;
const SCREEN_WIDTH = 414;
// phần màn hình còn lại sau khi trừ navbar (65), topheader (55) trừ status (20) hơi ảo k hiểu sao ra 540
const HEADER_HEIGHT = 55;
const NAVBAR_HEIGHT = 55;
const CONTENT_SCREEN_HEIGHT = 540;
const LIKED_COLOR = '#CE395F';
const RETWEET_COLOR = '#19cf86';
const DEFAULT_COLOR = '#687684';
const BACKGROUND_COLOR = 'white';
const MAIN_COLOR = '#1da1f2';
const TEXT_COLOR = '#86939A';
const LIGHT_GREY_TEXT_COLOR = '#AAB2B9';
const SLIGHTLY_DARK_GRAY_TEXT_COLOR = '#AAB2B9';
const DARK_GREY_TEXT_COLOR = '#A4AEB3';
const CHAT_BACKGROUND_COLOR = '#EFF3F4';
const NULL_COLOR = 'cyan';
const GLOBAL_STYLES = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    fontFamily: 'sans-serif',
    fontSize: 16,
  },
  fullname: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: '400',
  },
  username: {
    color: TEXT_COLOR,
    fontFamily: 'sans-serif',
    fontSize: 15,
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
  RETWEET_COLOR,
  BACKGROUND_COLOR,
  MAIN_COLOR,
  TEXT_COLOR,
  NULL_COLOR,
  CHAT_BACKGROUND_COLOR,
  DARK_GREY_TEXT_COLOR,
  LIGHT_GREY_TEXT_COLOR,
  SLIGHTLY_DARK_GRAY_TEXT_COLOR,
};
