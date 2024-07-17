import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    userBlogs: null,
    allBlogs: null,
    updateBlogInfo: null,
  },
  reducers: {
    setUserBlogs: (state, action) => {
      state.userBlogs = action.payload;
    },
    setAllBlogs: (state, action) => {
      state.allBlogs = action.payload;
    },
    setUpdateBlogInfo: (state, action) => {
      state.updateBlogInfo = action.payload;
    },
  },
});

export const { setUserBlogs, setAllBlogs, setUpdateBlogInfo } =
  blogSlice.actions;
export default blogSlice.reducer;
