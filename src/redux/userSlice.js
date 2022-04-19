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
      };
      state.userId = user.userId;
      state.email = user.email;
      state.avatar = user.avatar;
      state.fullname = user.fullname;
      state.username = user.username;
      state.banner = user.banner;
      state.isLoading = false;
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
        isLoading: true,
      };
      state.userId = user.userId;
      state.email = user.email;
      state.avatar = user.avatar;
      state.fullname = user.fullname;
      state.username = user.username;
      state.banner = user.banner;
      state.isLoading = true;
    },
  },
  extraReducers: {},
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
