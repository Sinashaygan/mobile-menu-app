import { favoriteReducer } from "./favorite";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    favoriteMEals: favoriteReducer,
  },
});