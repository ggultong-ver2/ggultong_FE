import { configureStore } from "@reduxjs/toolkit";
import recipes from "../modules/recipeSlice";
import recipeSlice from "../modules/recipeSlice";

const store = configureStore({
  reducer: { recipes },
  recipeSlice,
  // {} 안에 reviews 추가
});

export default store;
