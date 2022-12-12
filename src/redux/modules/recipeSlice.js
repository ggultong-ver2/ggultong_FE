import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.recipes = [...state.recipes, action.payload];
    },
    deleteRecipe: (state, action) => {
      state.recipes = state.recipes.filter(
        (list) => list.id !== action.payload
      );
    },
    changeRecipe: (state, action) => {
      state.recipes = state.recipes.map((list) => {
        // console.log(action.payload);
        return list.id === action.payload.id
          ? { ...list, done: !action.payload.done }
          : { ...list };
      });
    },
  },
});

export const { addRecipe, deleteRecipe, changeRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
