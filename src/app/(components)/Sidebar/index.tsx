'use client'

import { FormControl, InputLabel, Input, Select, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getCategories, getIngridients } from "../../../services/cocktailService";

const Sidebar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
      const ingredientsData = await getIngridients();
      setIngredients(ingredientsData);
    };
    fetchCategories();
  }, []);

  const handleCategoryChange = (event: any) => {
    setSelectedCategories(event.target.value);
  };

  const handleIngredientsChange = (event: any) => {
    setSelectedIngredients(event.target.value);
  };

  return <div className={`flex w-full flex-col gap-8 h-screen px-4 bg-gray-50 dark:bg-gray-600`}>
    <h3 className="mt-8 text-lg font-semibold">Search by</h3>
    <div className="flex flex-col gap-14">
      <div className="flex items-center gap-4">
    <FormControl>
        <InputLabel htmlFor="my-input">Title</InputLabel>
        <Input
          className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
          id="my-input"
          aria-describedby="my-helper-text"
        />
        </FormControl>  
      </div>

      <div className="flex items-center gap-4">
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          multiple
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCategories}
            label="Category"
            onChange={handleCategoryChange}
            renderValue={(selected) => selected.join(', ')}
        >
          {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
      </div>
    <div className="flex items-center gap-4">
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ingridients</InputLabel>
        <Select
          multiple
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedIngredients}
          label="Ingredients"
         onChange={handleIngredientsChange}
        >
          {ingredients.map(ingredient => (
            <MenuItem value={ingredient}>{ingredient}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
    </div>
  </div>;
};

export default Sidebar;
