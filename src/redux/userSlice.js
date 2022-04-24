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
      state.isLoading = true;
      state.followers = user.followers;
      state.following = user.following;
      state.liked = user.liked;
    },
  },
  extraReducers: {},
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
