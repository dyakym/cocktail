import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initialState";
import { NewCocktail } from "../../../types/NewCocktail";

const initialFavorites = localStorage.getItem("favorites");

const initialState: InitialState = {
  cocktails: [],
  favorites: initialFavorites ? JSON.parse(initialFavorites) : [],
};

const CocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<NewCocktail>) => {
      state.cocktails.push(action.payload);
    },
    addFavorite: (state, action: PayloadAction<NewCocktail>) => {
      if (!state.favorites.some((fav) => fav.id === action.payload.id)) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export default CocktailSlice.reducer;
export const { addFavorite, removeFavorite, addRecipe } = CocktailSlice.actions;
