import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import React, { useEffect, useState } from 'react';

import {
    SCREEN_WIDTH,
    BACKGROUND_COLOR,
    GLOBAL_STYLES,
    HORI_PAD,
    BLACK_TEXT_COLOR,
    MAIN_COLOR,
    LIGHT_GREY_TEXT_COLOR
} from '../../styles/Style';
import Comment from '../../components/tweet/Comment';
import { getCommentById } from '../../api/comment';
import { getUserById } from '../../api/user';
import { createTweet } from '../../api/tweet';
import Tweet from '../../components/tweet/Tweet';
import IconButton from '../../components/button/IconButton';
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import PrimaryButton from '../../components/button/PrimaryButton';
const CHAR_LIMIT = 280;
export default function TweetPost({ navigation, postFunction }) {


    const [textContent, setTextContent] = useState("");
    const [mediaContent, setMediaContent] = useState("");

    //const 
    const user = useSelector((state) => state.user);
    const tweetPostingHandle = () => {

        if (textContent == "" && mediaContent == "") {
            alert("You can't post empty tweet")

        } else if (textContent.length > CHAR_LIMIT) {
            alert("You had reached maximum text length")

        } else {
            createTweet(user.userId, textContent, mediaContent, [], "");
            navigation.goBack();
        }
    }
    React.useLayoutEffect(() => {
        navigation.setOptions({

            headerRight: () => {
                return (
                    <PrimaryButton
                        title={"Tweet"}
                        onPress={tweetPostingHandle}
                    />)
            }
        })
    })
    const tweetTextContentHandle = newText => {
        setTextContent(newText);

    }
    const cameraHandle = () => {

    }
    const mediaChoosingHandle = () => {

    }

    useEffect(() => {
        //postTweetAction = createTweet()
        navigation.setParams()
    }, []);

    return (
        <View
            style={[GLOBAL_STYLES.container, styles.container]}
        >
            <View style={styles.upperPart}>
                <View style={styles.avatarVanity}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: user.avatar }}

                    />


                </View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={tweetTextContentHandle}
                    placeholder="Type something here..."
                    multiline={true}
                    keyboardType="default"
                />
            </View>
            <View>


            </View>
            <View style={styles.lowwerPart}>
                <TouchableOpacity
                    style={styles.choiceButton}
                    onPress={() => cameraHandle()}
                >
                    <Icon
                        style={{
                            alignSelf: 'center',
                        }}
                        color={MAIN_COLOR}
                        type={"evilicon"}
                        name={"camera"}
                        size={35}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.choiceButton}
                    onPress={() => mediaChoosingHandle()}
                >
                    <Icon
                        style={{
                            alignSelf: 'center',
                        }}
                        color={MAIN_COLOR}
                        type={"evilicon"}
                        name={"image"}
                        size={35}
                    />
                </TouchableOpacity>
                <Text style={
                    {
                        justifyContent: "center",

                        color: (textContent.length <= CHAR_LIMIT ? MAIN_COLOR : "red"),
                        alignSelf: "flex-end",
                        paddingLeft: HORI_PAD,
                        fontSize: 30
                    }
                }>{textContent.length + "/" + CHAR_LIMIT}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 50,
        height: 50,
        width: 50,
    },
    avatarVanity: {
        paddingTop: 12,
        width: 50
    },
    choiceButton: {
        alignContent: "center",
        borderColor: LIGHT_GREY_TEXT_COLOR,
        borderRadius: 15,
        borderWidth: 1,
        height: 60,
        justifyContent: "center",
        marginHorizontal: HORI_PAD,
        width: 60
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: HORI_PAD,
        width: SCREEN_WIDTH
    },
    lowwerPart: {
        alignContent: "flex-start",
        flexDirection: "row"
    },
    textInput: {
        backgroundColor: BACKGROUND_COLOR,
        color: BLACK_TEXT_COLOR,
        flex: 1,
        fontSize: 22,
        height: 200,
        padding: HORI_PAD,
        textAlign: "justify",
        textAlignVertical: "top"
    },
    upperPart: {
        alignSelf: "auto",
        flexDirection: "row",

    }
});
