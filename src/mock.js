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

export { thaehan, userDatabase, NotificationList };
