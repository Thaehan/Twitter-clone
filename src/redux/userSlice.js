import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    accessToken: '',
    uid: '',
    isLoading: true,
  },
  reducers: {
    //Login
    setUser: (state, action) => {
      const user = {
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        uid: action.payload.uid,
      };
      state.uid = user.uid;
      state.accessToken = user.accessToken;
      state.email = user.email;
      state.isLoading = false;
    },
    //Logout
    removeUser: (state, action) => {
      const user = {
        email: '',
        accessToken: '',
        uid: '',
        isLoading: true,
      };
      state.accessToken = user.accessToken;
      state.uid = user.uid;
      state.email = user.email;
      state.isLoading = true;
    },
  },
  extraReducers: {},
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
