import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    Linking
} from 'react-native';
import React from 'react';
import tweetMockData from "../../mockData/tweet.json";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GLOBAL_STYLES } from '../../styles/Style';
import IconButton from '../button/IconButton';
const renderItem = (item) => {
    return <Image source={item.source} />;
};

const renderIcon = (name, icon, onPress) => {
    return (
        <IconButton
        />)
}
const retweetTweet = () => {

}
const likeTweet = () => {

}
const commentTweet = () => {

}
const shareTweet = () => {

}
export default function Tweet(tweetData) {
    return (
        <View style={
            styles.container

        }>
            {/* <Image styles={styles.avatar} source={props.avatar} /> */}
            <Text style={GLOBAL_STYLES.fullname}>
                {tweetData.fullname}
            </Text>
            <Text style={GLOBAL_STYLES.username}>
                {'@' + tweetData.username}
            </Text>
            {tweetData.text && (
                <Text style={GLOBAL_STYLES.text}>{tweetData.text}</Text>
            )}
            {/* {props.image && (
        <FlatList
          data={props.image}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )} */}
            <View style={styles.interactionBar}>
                <IconButton
                    icon="comment-outline"
                    onPress={commentTweet()}
                />
                {/* retweeted */}
                false?
                <IconButton
                    icon="twitter-retweet"
                    onPress={retweetTweet()}
                />:<IconButton
                    icon="twitter-retweet"
                    onPress={retweetTweet()}
                />
                {/* liked */}
                false?
                <IconButton
                    icon="heart-outline"
                    onPress={likeTweet()}
                />:<IconButton
                    icon="heart-outline"
                    onPress={likeTweet()}
                />
                <IconButton
                    icon="share-outline"
                    onPress={shareTweet()}
                />



            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 430,
        width: 375,
        backgroundColor: '#ffffff',
        paddingLeft: 35,
        paddingBottom: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    inFeedStyle: {

    },
    detailedStyle: {

    },
    avatar: {
        height: 100,
        width: 100,
        margin: 20,
    },
    interactionBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        marginTop: 15
    }
});
