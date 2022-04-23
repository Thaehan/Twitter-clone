import { View, Text, StyleSheet, Image } from 'react-native';
import { getUserById } from '../../api/user';
import React from 'react';
import { Tabs } from 'react-native-collapsible-tab-view'
import { GLOBAL_STYLES, BACKGROUND_COLOR, TEXT_COLOR, LIGHT_GREY_TEXT_COLOR } from '../../styles/Style';
import { useEffect, useState } from 'react';
import PrimaryButton from "../../components/button/PrimaryButton"
const NULL_IMAGE_LINK = "https://cdn.wallpapersafari.com/20/4/QrzGEi.png"
const IMAGE_SIZE = 75;
const HORI_PAD = 7;

export default function Profile({
  navigation,
  route,
}) {
  const userModel = {
    avatar: "",
    banner: "",
    bio: "",
    fullname: "",
    username: "",
    following: "",
    followers: ""
  }
  const [avatar, setUserAvatar] = useState("")
  const [user, setUser] = useState(userModel)
  useEffect(() => {
    getUserById(route.params.userId).then((doc) => {
      setUser({ ...doc.data() });


    });
  }, []);
  return (

    <View style={styles.container}>
      <Image
        style={styles.banner}
        source={{ uri: user.banner != "" ? user.banner : NULL_IMAGE_LINK }}
      />
      <View style={styles.profileInfoContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: user.avatar }}
        />
        <PrimaryButton
          styles={styles.followButton}
          title={"Follow"}
        />
        <Text style={styles.fullname}>{user.fullname}</Text>
        <Text style={styles.username}>{user.username + "\n"}</Text>
        <Text style={GLOBAL_STYLES.text}>{user.bio + "\n"}</Text>
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
    height: IMAGE_SIZE,
    left: 0,
    overflow: "hidden",
    position: 'absolute',
    top: -IMAGE_SIZE / 2,
    width: IMAGE_SIZE,
  },
  banner: {
    height: 90,

  },
  container: {
    backgroundColor: BACKGROUND_COLOR,
  },
  followButton: {
    backgroundColor: TEXT_COLOR,
    paddingTop: HORI_PAD
  },
  followInfo: {

    flexDirection: "row"
  },
  fullname: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
  },

  profileInfoContainer: {
    paddingLeft: HORI_PAD,
  },
  tweetTabInfo: {

  },
  username: {
    color: TEXT_COLOR,
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: '400',
  },
});
