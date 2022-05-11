import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: '',
    email: '',
    avatar: '',
    fullname: '',
    username: '',
    banner: '',
    bio: '',
    country: '',
    dateCreated: '',
    dateOfBirth: '',
    liked: [],
    followers: [],
    following: [],
    isLoading: true,
  },
  reducers: {
    //Login
    setUser: (state, action) => {
      const user = {
        userId: action.payload.userId,
        email: action.payload.email,
        avatar: action.payload.avatar,
        fullname: action.payload.fullname,
        username: action.payload.username,
        banner: action.payload.banner,
        bio: action.payload.bio,
        country: action.payload.country,
        dateCreated: action.payload.dateCreated,
        dateOfBirth: action.payload.dateOfBirth,
        followers: action.payload.followers,
        following: action.payload.following,
        liked: action.payload.liked,
      };
      state.userId = user.userId;
      state.email = user.email;
      state.avatar = user.avatar;
      state.fullname = user.fullname;
      state.username = user.username;
      state.banner = user.banner;
      state.bio = user.bio;
      state.country = user.country;
      state.dateCreated = user.dateCreated;
      state.dateOfBirth = user.dateOfBirth;
      state.isLoading = false;
      state.followers = user.followers;
      state.following = user.following;
      state.liked = user.liked;
    },
    //Logout
    removeUser: (state, action) => {
      const user = {
        userId: '',
        email: '',
        avatar: '',
        fullname: '',
        username: '',
        banner: '',
        bio: '',
        country: '',
        dateCreated: '',
        dateOfBirth: '',
        followers: [],
        following: [],
        liked: [],
        isLoading: true,
      };
      state.userId = user.userId;
      state.email = user.email;
      state.avatar = user.avatar;
      state.fullname = user.fullname;
      state.username = user.username;
      state.banner = user.banner;
      state.bio = user.bio;
      state.country = user.country;
      state.dateCreated = user.dateCreated;
      state.dateOfBirth = user.dateOfBirth;
      state.isLoading = true;
      state.followers = user.followers;
      state.following = user.following;
      state.liked = user.liked;
    },
    //Like a tweet
    likeTweet: (state, action) => {
      state.liked.push(action.payload.tweetId);
    },
    //Dislike a tweet
    dislikeTweet: (state, action) => {
      state.liked.splice(
        state.liked.indexOf(action.payload.tweetId),
        1
      );
    },
  },
  extraReducers: {},
});

export default userSlice.reducer;
export const {
  setUser,
  removeUser,
  likeTweet,
  dislikeTweet,
} = userSlice.actions;
