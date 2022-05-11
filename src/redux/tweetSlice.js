import { createSlice } from '@reduxjs/toolkit';

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState: {
    posts: [], //{tweetId, isLiked, likeCount}
  },
  reducers: {
    //
    addTweet: (state, action) => {
      //Nhận vào //{tweetId, isLiked, likeCount}
      state.posts.push(action.payload);
    },
    //AddLike
    likeTweet: (state, action) => {
      //Nhận vào tweetId, userLikedId
    },
    dislikeTweet: (state, action) => {
      //Nhận vào tweetId, userDislikedId
    },
  },
});

export default tweetSlice.reducer;
export const { addTweet, likeTweet, dislikeTweet } =
  tweetSlice.actions;
