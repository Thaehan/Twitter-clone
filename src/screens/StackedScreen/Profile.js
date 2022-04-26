import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { getUserById, updateUser } from '../../api/user';
import React from 'react';
import { HORI_PAD, GLOBAL_STYLES, BACKGROUND_COLOR, GREY_TEXT_COLOR, LIGHT_GREY_TEXT_COLOR, DEFAULT_COLOR, BLACK_TEXT_COLOR } from '../../styles/Style';
import { useEffect, useState } from 'react';
import ToggleButton from "../../components/button/ToggleButton"
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { Tabs } from 'react-native-collapsible-tab-view'
import Tweet from '../../components/tweet/Tweet';
import {
  getTweetByUser,
  getMultipleTweet,
  getTweetById,
} from '../../api/tweet';


const NULL_BANNER = "https://cdn.wallpapersafari.com/20/4/QrzGEi.png"
const NULL_PROFILE = "https://cdn.wallpapersafari.com/20/4/QrzGEi.png"

const AVATAR_SIZE = 75;

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
  const [tweetList, setTweetList] = useState([]);

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
  const refreshFeed = async (userId) => {
    getTweetByUser(userId, "textContent", "!=", "")
      .then((docs) => {
        console.log(docs)
        var tempList = [];
        docs.forEach((doc) => {
          tempList.push({
            ...doc.data(),
            tweetId: doc.id,
            dateCreated: new Date(
              doc.data().dateCreated.toDate()
            ),
          });
        });
        tempList.sort((a, b) => {
          return new Date(b.dateCreated) - new Date(a.dateCreated);
        })
        setTweetList(tempList);
      })
      .catch((error) => {
        alert(error);
      });
  }
  useEffect(() => {
    getUserById(route.params.userId).then((doc) => {
      setUser({ ...doc.data(), userId: doc.id });

      //setDateCreatedString(user.dateCreated.toDate().toDateString())
      setDateCreatedString(doc.data().dateCreated.toDate().toDateString());
      setFollowed(doc.data().followers.includes(currentUser.userId))
      refreshFeed(doc.id);
      //console.log(doc.id)
    })
      .catch(e => alert(e));

  }, []);
  const Header = () => {
    return <View />
  }
  return (

    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      /*         refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              } */
      >


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
          <Tabs.Container
            renderHeader={Header}
            headerHeight={40} // optional
            revealHeaderOnScroll={true}
            snapThreshold={0.5}
          >
            <Tabs.Tab name="Tweets">
              <Tabs.ScrollView>
                {tweetList.map((tweet) => (
                  <Tweet
                    key={tweet.tweetId}
                    tweetId={tweet.tweetId}
                    userPosted={tweet.userPosted}
                    textContent={tweet.textContent}
                    mediaContent={tweet.mediaContent}
                    dateCreated={tweet.dateCreated}
                    referedPostId={tweet.referedPostId}
                    userMentioned={tweet.userMentioned}
                    comments={tweet.comments}
                    userRetweeted={tweet.userRetweeted}
                    userLiked={tweet.userLiked}
                    isOnFeed={true}
                  />
                ))}
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
        </View>
      </ScrollView>
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
