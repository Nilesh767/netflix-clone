import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice";
import listReducer from "../features/listSlice";
import componentReducer from "../features/componentSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    list: listReducer,
    component: componentReducer,
  },
});
