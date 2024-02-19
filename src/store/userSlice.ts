// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: true, // Indicates whether user data is loading
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isLoading = false;
    },
    clearUser(state) {
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = state => state.user.user;

export default userSlice.reducer;
