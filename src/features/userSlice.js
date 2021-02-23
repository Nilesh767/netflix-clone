import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userSubscription: null,
  loading: false,
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
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { login, logout, subbed, loading } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectSubscription = (state) => state.user.userSubscription;
export const selectLoading = (state) => state.loading;

export default userSlice.reducer;
