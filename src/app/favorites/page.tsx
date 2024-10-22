"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFavorite } from "@/store/features/cocktails/CocktailSlice";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import { NewCocktail } from "@/types/NewCocktail";

const FavoritesPage: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.cocktails.favorites);
  const dispatch = useDispatch();

  const removeFromFavorites = (id: string) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Your Favorite Cocktails</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">You have no favorite cocktails yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((cocktail: NewCocktail) => (
            <div key={cocktail.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-48 object-cover"
                src={cocktail.imageUrl}
                alt={`${cocktail.name} cocktail`}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{cocktail.name}</h3>
                <div className="flex items-center justify-between mt-4 space-x-3">
                  <Link
                    href={`/cocktail/${cocktail.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md flex items-center justify-center w-full"
                  >
                    More Info
                  </Link>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md mt-4 flex items-center justify-center w-full"
                  onClick={() => removeFromFavorites(cocktail.id)}
                >
                  <DeleteIcon className="mr-2" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
