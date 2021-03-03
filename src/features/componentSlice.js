import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "home",
  loading: false,
};

const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    category: (state, action) => {
      state.category = action.payload;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { category, loading } = componentSlice.actions;
export const selectComponent = (state) => state.component.category;
export const selectLoading = (state) => state.component.loading;

export default componentSlice.reducer;
