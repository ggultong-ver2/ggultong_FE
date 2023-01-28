import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import details from "../modules/postSlice";
import comment from "../modules/commentSlice";
import { __patchPost } from "../modules/postSlice";

const store = configureStore({
  reducer: { details, comment, __patchPost },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
