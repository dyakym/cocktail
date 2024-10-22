import { NewCocktail } from '@/types/NewCocktail';
import axios from 'axios';
import { Cocktail } from '@/types/Cocktail';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export const getAllCocktails = async () => {
  const {data} = await axios.get<{drinks: Cocktail[]}>(`${API_URL}/search.php?f=a`)
  return data.drinks.map(drink => ({
    id: drink.idDrink,
    name: drink.strDrink,
    ingredients: [
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
    ].filter(Boolean),
    instructions: drink.strInstructions,
    imageUrl: drink.strDrinkThumb
  }));
}

export const getCocktailsById = async (id: string) => {
  const {data} = await axios.get(`${API_URL}/lookup.php?i=${id}`)
  return data.cocktails[0];
}

export const getCategories = async () => {
  const { data } = await axios.get<{ drinks: { strCategory: string }[] }>(`${API_URL}/list.php?c=list`)
  return data.drinks.map(drink=> drink.strCategory);
}

export const getIngridients = async () => {
  const { data } = await axios.get<{ drinks: { strIngredient1: string }[] }>(`${API_URL}/list.php?i=list`)
  return data.drinks.map(drink=> drink.strIngredient1);
}
