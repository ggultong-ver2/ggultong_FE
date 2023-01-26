import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import details from "../modules/postSlice";
import posts from "../modules/postSlice";
import post from "../modules/postSlice";
import { __patchPost } from "../modules/postSlice";
// import comment from "../modules/commentSlice";
import { commentSlice } from "../modules/postSlice";
const store = configureStore({
  reducer: { details, posts, post, __patchPost, commentSlice },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
