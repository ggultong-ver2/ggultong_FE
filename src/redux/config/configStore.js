import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import WorldCup from "../../pages/WorldCup";
import details, { __getWorldCup } from "../modules/postSlice";
import { __patchPost } from "../modules/postSlice";
import { notification } from "../modules/notificationSlice";
import { __getNotification } from "../modules/notificationSlice";

const store = configureStore({
  reducer: { details, __patchPost, __getWorldCup, notification, __getNotification },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
