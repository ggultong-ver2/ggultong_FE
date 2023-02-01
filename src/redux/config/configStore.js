import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import WorldCup from "../../pages/WorldCup";
import details, { __getWorldCup } from "../modules/postSlice";
import { __patchPost } from "../modules/postSlice";

const store = configureStore({
  reducer: { details, __patchPost, __getWorldCup },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
