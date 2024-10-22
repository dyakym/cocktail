"use client";

import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addFavorite, removeFavorite } from "@/store/features/cocktails/CocktailSlice";
import { NewCocktail } from "@/types/NewCocktail";

const CocktailCard: React.FC<NewCocktail> = ({ id, name, imageUrl, ingredients, instructions }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.cocktails.favorites);

  const isFavorite = favorites.some((fav) => fav.id === id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      const newFavorite: NewCocktail = { id, name, imageUrl,ingredients, instructions };
      dispatch(addFavorite(newFavorite));
    }
  };
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={`${name} cocktail`}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <div className="flex items-center justify-between mt-4 space-x-3">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md flex items-center"
            style={{ height: "2.5rem" }}
            onClick={toggleFavorite}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </button>
          <Link
            className="bg-blue-500 hover:bg-blue-600 text-white flex-1 px-3 py-2 rounded-md flex items-center justify-center"
            style={{ height: "2.5rem" }}
            href={`/cocktail/${id}`}
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
