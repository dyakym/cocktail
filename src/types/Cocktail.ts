export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags : string;
  strVideo : string;
  strCategory : string;
  strIBA : string;
  strAlcoholic : string;
  strGlass : string;
  strInstructions : string;
  strInstructionsES : string;
  strInstructionsDE : string;
  strInstructionsFR : string;
  strInstructionsIT : string;
  // strInstructionsZH-HANS : string;
  // strInstructionsZH-HANT : string;
  strDrinkThumb: string;
[ key: `strIngredient${number}`] : string | null;
[ key: `strMeasure${number}`] : string | null;
strImageSource : string;
strImageAttribution : string | null;
strCreativeCommonsConfirmed : string | null;
dateModified : string;
}