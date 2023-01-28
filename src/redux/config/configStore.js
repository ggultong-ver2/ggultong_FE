import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import details from "../modules/postSlice";
import { __patchPost } from "../modules/postSlice";

const store = configureStore({
  reducer: { details, __patchPost },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
