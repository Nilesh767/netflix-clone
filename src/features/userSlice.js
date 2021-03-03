import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userSubscription: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    subbed: (state, action) => {
      state.userSubscription = action.payload;
    },
  },
});

export const { login, logout, subbed, loading } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectSubscription = (state) => state.user.userSubscription;

export default userSlice.reducer;
