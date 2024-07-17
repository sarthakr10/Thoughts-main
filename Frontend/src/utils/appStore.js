import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import blogReducer from "./blogSlice";
const appStore = configureStore({
  reducer: {
    config: configReducer,
    blog: blogReducer,
  },
});

export default appStore;
