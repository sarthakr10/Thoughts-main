import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    isLoggedIn: false,
    userInfo: null,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = true;
    },
    setLogOut: (state, action) => {
      state.isLoggedIn = false;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setIsLoggedIn, setUserInfo, setLogOut } = configSlice.actions;
export default configSlice.reducer;
