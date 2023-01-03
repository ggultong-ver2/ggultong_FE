import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// import commentReducer from "../modules/commentSlice";
// import post from "../modules/postSlice";
// import comment from "../modules/commentSlice";

const store = configureStore({
  reducer: {},
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
