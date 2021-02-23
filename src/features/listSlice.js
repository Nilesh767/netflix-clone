import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchList: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    save: (state, action) => {
      state.watchList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.watchList.map((item) => {
        return action.payload === item.id
          ? item.done === true
            ? (item.done = false)
            : (item.done = true)
          : null;
      });
    },
  },
});

export const { save, setCheck } = listSlice.actions;
export const selectWatchList = (state) => state.list.watchList;
export default listSlice.reducer;
