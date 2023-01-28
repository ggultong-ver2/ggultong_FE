import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import details from "../modules/postSlice";
import comment from "../modules/commentSlice";

const store = configureStore({
  reducer: { details, comment },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
