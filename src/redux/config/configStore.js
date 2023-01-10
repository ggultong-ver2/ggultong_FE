import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import details from "../modules/postSlice";
import posts from "../modules/postSlice";
import post from "../modules/postSlice";
import { __patchPost } from "../modules/postSlice";
// import commentReducer from "../modules/commentSlice";
// import post from "../modules/postSlice";
// import comment from "../modules/commentSlice";

const store = configureStore({
  reducer: { details, posts, post, __patchPost },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
