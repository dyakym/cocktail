import { configureStore } from "@reduxjs/toolkit";
import CocktailSlice from "./features/cocktails/CocktailSlice";

export const store = configureStore({
  reducer: {
    cocktails: CocktailSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
