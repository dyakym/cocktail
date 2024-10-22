"use client"

import { getAllCocktails } from "@/services/cocktailService";
import { NewCocktail } from "@/types/NewCocktail";
import React, {useState,useEffect} from "react";
import CocktailCard from "../CocktailCard";


const CocktailList = () => {
  const [cocktails, setCocktails] = useState<NewCocktail[]>([]);
 

  useEffect(() => {
    const fetchCocktails = async () => {
      const cocktailList = await getAllCocktails();
      setCocktails(cocktailList);
    };
    
    fetchCocktails();
  }, []);

 return (
   <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
     {cocktails.map(cocktail => (
       <li><CocktailCard
         id={cocktail.id}
         key={cocktail.id}
         name={cocktail.name}
         imageUrl={cocktail.imageUrl}
         ingredients={cocktail.ingredients}
         instructions={cocktail.instructions}
       />
         </li>
     ))}
   </ul>
  )
}

export default CocktailList;