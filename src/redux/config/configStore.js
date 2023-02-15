import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import details, { __getWorldCup } from "../modules/postSlice";
import { __patchPost } from "../modules/postSlice";

import postCount from "../modules/postSlice";

import {
  notificationSlice,
  __deleteNotification,
} from "../modules/notificationSlice";
// import { __getNotification } from "../modules/notificationSlice";

const store = configureStore({
  reducer: {
    details,
    __patchPost,
    __getWorldCup,
    notificationSlice,
    __deleteNotification,
    postCount,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
