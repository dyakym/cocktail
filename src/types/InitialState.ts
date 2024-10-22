import { NewCocktail } from "./NewCocktail";
import {FilterParams} from "./Filter"

export type InitialState = {
  cocktails: NewCocktail[];
  favorites: NewCocktail[]
};