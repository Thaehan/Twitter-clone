import { logo, avatar } from './constants/ImageAssets';
import avatar0 from './assets/avatar0.png'
import avatar1 from './assets/avatar1.png'
import avatar2 from './assets/avatar2.png'
import avatar3 from './assets/avatar3.png'
import avatar4 from './assets/avatar4.png'
import banner0 from './assets/banner0.png'
import banner1 from './assets/banner1.png'
import banner2 from './assets/banner2.png'
import banner3 from './assets/banner3.png'

const tweets = {
  "tweetId": "850006245121695744",
  "userPosted": "1",
  "textContent": "1/ Today we\u2019re sharing our vision for the future of the Twitter API platform! @Nowano #Loach!\nhttps://t.co/XweGngmxlP",
  "mediaContent": "assets/black",
  "dateCreated": "Thu Apr 06 15:24:15 +0000 2017",
  "referedPostId": "",
  "userMentioned": ["5"]
};
const tweetsList = [
  {
    "tweetId": "0",
    "userPosted": "0",
    "textContent": "Good morning!! How everyone doing today?",
    "mediaContent": "assets/black",
    "dateCreated": "Thu Apr 06 15:24:15 +0000 2017",
    "referedPostId": "",
    "userMentioned": ["2"]
  },
  {
    "tweetId": "1",
    "userPosted": "1",
    "textContent": "Layout direction specifies the direction in which children and text in a hierarchy should be laid out. Layout direction also affects what edge start and end refer to. By default, React Native lays out with LTR layout direction. In this mode start refers to left and end refers to",
    "mediaContent": "assets/black",
    "dateCreated": "Thu Apr 06 15:24:15 +0000 2017",
    "referedPostId": "",
    "userMentioned": []
  },
  {
    "tweetId": "2",
    "userPosted": "2",
    "textContent": "Any body show me a good nft place? Would like to buy some right now ;). ",
    "mediaContent": "assets/black",
    "dateCreated": "Thu Apr 06 15:24:15 +0000 2017",
    "referedPostId": "",
    "userMentioned": []
  },
  {
    "tweetId": "3",
    "userPosted": "3",
    "textContent": ":D",
    "mediaContent": "assets/black",
    "dateCreated": "Thu Apr 06 15:24:15 +0000 2017",
    "referedPostId": "",
    "userMentioned": []
  },
  {
    "tweetId": "4",
    "userPosted": "4",
    "textContent": "So which is the best on the market now? 3090? And then just list down from there. As I have understood (although I might be wrong) there are 20- series that are better than the 30 series? And then you have the TI ending? So from top to bottom from 30 and 20 generation how do you rank them?",
    "mediaContent": "assets/black",
    "dateCreated": "Thu Apr 06 15:24:15 +0000 2017",
    "referedPostId": "",
    "userMentioned": []
  },

]
const userDatabase = [
  {
    userId: "0",
    username: "Đỗ Đạc",
    handle: "thaehan1998",
    avatar: avatar0,
    banner: banner0,
    bio: "I am Đạt",
    following: [],
    liked: [],
  },
  {
    userId: "1",
    username: "Danh",
    handle: "wowyboi",
    avatar: avatar1,
    banner: banner1,
    bio: "I am Danh",
    following: [],
    liked: [],
  },
  {
    userId: "2",
    username: "Snoop Cat",
    handle: "snoppKitty",
    avatar: avatar2,
    banner: banner2,
    bio: "Smoke catweed everyday",
    following: [],
    liked: [],
  },
  {
    userId: "3",
    username: "Uyennhu",
    handle: "uwu",
    avatar: avatar3,
    banner: banner3,
    bio: "Sike fam",
    following: [],
    liked: [],
  },
  {
    userId: "4",
    username: "Nowano",
    handle: "noweno",
    avatar: avatar4,
    banner: banner3,
    bio: "Very sike",
    following: [],
    liked: [],
  },
]

const NotificationList = [
  {
    notificationId: "0",
    fromUser: "0",
    textContent: "User 0 liked your post",
    hyperlink: "",
  },
  {
    notificationId: "1",
    fromUser: "1",
    textContent: "User 1 comment on your post",
    hyperlink: "",
  },
  {
    notificationId: "2",
    fromUser: "2",
    textContent: "",
    hyperlink: "",
  },
  {
    notificationId: "3",
    fromUser: "3",
    textContent: "",
    hyperlink: "",
  }
]

const thaehan = {
  username: "Nick Ao Do Ven Dat",
  handle: "thaehan1998",
  password: "5",
  avatar: avatar,
  userId: "1"
}

export { tweets, thaehan, tweetsList, userDatabase, NotificationList };
