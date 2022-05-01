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
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';

import PrimaryButton from '../../components/button/PrimaryButton';
import IconButton from '../../components/button/IconButton';

import * as ImagePicker from 'expo-image-picker';
import { upLoadImage, deleteImage } from '../../api/image';

const CHAR_LIMIT = 280;
export default function TweetPost({ navigation, postFunction }) {


    const [textContent, setTextContent] = useState("");
    const [mediaContent, setMediaContent] = useState(null);

    const user = useSelector((state) => state.user);
    const [imageUrl, setImageUrl] = useState(
        'https://firebasestorage.googleapis.com/v0/b/twitter-clone-5bfb8.appspot.com/o/images%2FXXQXEw2JgwXkewtfm42RsNdddcn2%2FTue%20Apr%2012%202022%2001%3A15%3A16%20GMT%2B0700%20(%2B07)?alt=media&token=5e822d9e-8e4b-4421-986c-02dbb96d22bd'
    );
    //For putting tweet posting button on header
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
    const mediaChoosingHandle = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.cancelled) {
            setMediaContent(result.uri);
        }
    };

    const uploadMediaHandle = async () => {

        upLoadImage(mediaContent)
            .then((imageUrl) => {
                //onsole.log(imageUrl);
                setMediaContent(imageUrl)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const tweetPostingHandle = () => {

        if (textContent == "" && mediaContent == null) {
            alert("You can't post empty tweet")

        } else if (textContent.length > CHAR_LIMIT) {
            alert("You had reached maximum text length")

        } else {

            if (mediaContent != "")
                upLoadImage(mediaContent)
                    .then((imageUrl) => {
                        //onsole.log(imageUrl);
                        //setMediaContent(imageUrl)
                        //console.log(imageUrl)
                        createTweet(user.userId, textContent, imageUrl, [], "");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            else {
                createTweet(user.userId, textContent, mediaContent, [], "");

            }

            navigation.goBack();
        }
    }

    const tweetTextContentHandle = newText => {
        setTextContent(newText);

    }
    const cameraHandle = () => {

    }
    const [textBoxHeight, setTextBoxHeight] = useState(70);

    useEffect(() => {
        //postTweetAction = createTweet()
        navigation.setParams()
    }, []);
    const numberOfLine = (text, textInputWidth) => {

    }
    return (
        <View
            style={[GLOBAL_STYLES.container, styles.container]}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>



                <View style={styles.upperPart}>
                    <View style={styles.avatarVanity}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: user.avatar }}

                        />
                    </View>
                    <View style={styles.contentArea}>
                        <TextInput
                            style={[styles.textInput, { height: textBoxHeight }]}
                            onChangeText={newText => {
                                setTextContent(newText);
                                //setTextBoxHeight(Math.max(70, newText.length));
                            }}
                            placeholder="Type something here..."
                            multiline
                            keyboardType="default"
                        />
                        {mediaContent && (<View>
                            <Image
                                source={{ uri: mediaContent }}
                                style={styles.mediaStyle}
                            />
                            <IconButton
                                //color={BLACK_TEXT_COLOR}
                                type={"ionicon"}
                                name={"close-outline"}
                                size={50}
                                onPress={() => { }}
                            />
                        </View>
                        )}
                    </View>

                </View>

            </ScrollView>




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
                <View
                    style={
                        {
                            alignContent: "center",
                            height: 60,
                            justifyContent: "center",
                            position: 'absolute',
                            right: HORI_PAD
                        }}
                >

                    <Text style={
                        {
                            justifyContent: "center",
                            color: (textContent.length <= CHAR_LIMIT ? MAIN_COLOR : "red"),
                            alignSelf: "flex-end",
                            paddingLeft: HORI_PAD,
                            fontSize: 25
                        }
                    }>{textContent.length + "/" + CHAR_LIMIT}</Text>

                </View>

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
        width: 60
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
    contentArea: {
        backgroundColor: BACKGROUND_COLOR,
        flex: 1,

    },

    lowwerPart: {
        alignContent: "flex-start",
        flexDirection: "row"
    },
    mediaStyle:
    {
        borderRadius: 15,
        height: SCREEN_WIDTH * 0.81,
        width: SCREEN_WIDTH * 0.81,


    },
    textInput: {
        color: BLACK_TEXT_COLOR,
        fontSize: 22,
        paddingTop: HORI_PAD,
        textAlign: "justify",
        textAlignVertical: "top"
    },
    upperPart: {
        alignSelf: "auto",
        flexDirection: "row",

    }
});
