import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "home",
};

const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    category: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { category } = componentSlice.actions;
export const selectComponent = (state) => state.component.category;

export default componentSlice.reducer;
