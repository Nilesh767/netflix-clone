import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice";
import listReducer from "../features/listSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    list: listReducer,
  },
});
