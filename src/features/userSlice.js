import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
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
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { login, logout, loading } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectLoading = (state) => state.loading;

export default userSlice.reducer;
