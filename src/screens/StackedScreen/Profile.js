import { View, Text, StyleSheet, Image } from 'react-native';
import { getUserById, updateUser } from '../../api/user';
import React from 'react';
import { Tabs } from 'react-native-collapsible-tab-view'
import { GLOBAL_STYLES, BACKGROUND_COLOR, GREY_TEXT_COLOR, LIGHT_GREY_TEXT_COLOR, DEFAULT_COLOR, BLACK_TEXT_COLOR } from '../../styles/Style';
import { useEffect, useState } from 'react';
import ToggleButton from "../../components/button/ToggleButton"
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
const NULL_BANNER = "https://cdn.wallpapersafari.com/20/4/QrzGEi.png"
const NULL_PROFILE = "https://cdn.wallpapersafari.com/20/4/QrzGEi.png"

const AVATAR_SIZE = 75;
const HORI_PAD = 7;

export default function Profile({
  navigation,
  route,
}) {
  const userModel = {
    userId: "",
    avatar: NULL_PROFILE,
    banner: NULL_BANNER,
    bio: "",
    fullname: "",
    username: "",
    following: [],
    followers: [],
    liked: [],
    country: "",
    dateCreated: "",
    dateCreatedString: ""
  }
  const currentUser = useSelector((state) => state.user);

  const [avatar, setUserAvatar] = useState("")
  const [followed, setFollowed] = useState(false)

  const [user, setUser] = useState(userModel)
  const [dateCreatedString, setDateCreatedString] = useState("")

  const followUser = () => {

    if (isFollow(currentUser.userId)) {
      user.followers.splice(user.followers.indexOf(currentUser.userId), 1)
      //currentUser.following.splice(currentUser.following.indexOf(user.userId), 1)
    }
    else {
      user.followers.push(currentUser.userId)
      //currentUser.following.push(user.userId)
    }

    updateUser(user.userId, { followers: user.followers })
    getUserById(currentUser.userId).then((doc) => {
      var following = doc.data().following;
      if (!isFollow(currentUser.userId)) {
        following.splice(following.indexOf(user.userId), 1)
      } else {
        following.push(user.userId)
      }
      updateUser(currentUser.userId, { following: following })
      console.log(following)
    })
      .catch(e => alert(e))
    setFollowed(isFollow(currentUser.userId))
  }
  const isFollow = (id) => {
    return (user.followers.includes(id))
  }

  useEffect(() => {
    getUserById(route.params.userId).then((doc) => {
      setUser({ ...doc.data(), userId: doc.id });

      //setDateCreatedString(user.dateCreated.toDate().toDateString())
      setDateCreatedString(doc.data().dateCreated.toDate().toDateString());
      setFollowed(doc.data().followers.includes(currentUser.userId))

    }).catch(e => alert(e));

  }, []);
  return (

    <View style={styles.container}>
      <Image
        style={styles.banner}
        source={{ uri: user.banner != "" ? user.banner : NULL_BANNER }}
      />
      <View style={styles.profileInfoContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: user.avatar }}
        />
        {currentUser.userId != user.userId ?
          <ToggleButton
            style={styles.followButton}
            trueText={"Following"}
            falseText={"   Follow   "}
            onPress={() => followUser()}
            isTrue={followed}
          /> : <View style={{ height: AVATAR_SIZE / 2 }} />}

        <Text style={styles.fullname}>{user.fullname}</Text>
        <Text style={styles.username}>{"@" + user.username}</Text>
        <Text style={GLOBAL_STYLES.text}>{user.bio}</Text>
        <View style={styles.infoWithIcon}>
          <Icon
            color={DEFAULT_COLOR}
            type={"evilicon"}
            name={"location"}
            size={28}
          />
          <Text style={styles.username} >{user.country}</Text>
          <Icon
            color={DEFAULT_COLOR}
            type={"evilicon"}
            name={"calendar"}
            size={28}
          />
          <Text style={styles.username} >{"Joined " + dateCreatedString}</Text>
        </View>

        <View style={styles.followInfo}>
          <Text style={GLOBAL_STYLES.fullname}>{user.following.length}</Text>
          <Text style={styles.username}>{" Following    "}</Text>

          <Text style={GLOBAL_STYLES.fullname}>{user.followers.length}</Text>
          <Text style={styles.username}>{" Followers "}</Text>
        </View>

      </View>
      <View style={styles.tweetTabInfo}>
        {/*         <Tabs.Container

        >
          <Tabs.Tab name="Tweets">
            <Tabs.ScrollView>

            </Tabs.ScrollView>
          </Tabs.Tab>
          <Tabs.Tab name="Tweets \u0026 replies">
            <Tabs.ScrollView>

            </Tabs.ScrollView>
          </Tabs.Tab>

          <Tabs.Tab name="Media">
            <Tabs.ScrollView>

            </Tabs.ScrollView>
          </Tabs.Tab>

          <Tabs.Tab name="Likes">
            <Tabs.ScrollView>

            </Tabs.ScrollView>
          </Tabs.Tab>
        </Tabs.Container>
 */}
      </View>
    </View>



  );
}
const styles = StyleSheet.create({
  avatar: {
    borderColor: "white",

    borderRadius: 150 / 2,
    borderWidth: 3,
    height: AVATAR_SIZE,
    left: 0,
    overflow: "hidden",
    position: 'absolute',
    top: -AVATAR_SIZE / 2,
    width: AVATAR_SIZE,
  },
  banner: {
    height: 90,

  },
  container: {
    backgroundColor: BACKGROUND_COLOR,
  },
  followButton: {
    alignContent: "flex-end",
    alignSelf: 'flex-end',
    justifyContent: "flex-end",
    paddingRight: HORI_PAD,
    paddingTop: HORI_PAD
  },

  followInfo: {

    flexDirection: "row"
  },
  fullname: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoWithIcon: {
    flexDirection: "row",
    left: -5

  },
  profileInfoContainer: {
    paddingLeft: HORI_PAD
  },
  tweetTabInfo: {

  },
  username: {
    color: GREY_TEXT_COLOR,
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: '400',
  },
});
