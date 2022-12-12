import { configureStore } from "@reduxjs/toolkit";
import recipes from "../modules/recipeSlice";

const store = configureStore({
  reducer: { recipes },
  // {} 안에 reviews 추가
});

export default store;
