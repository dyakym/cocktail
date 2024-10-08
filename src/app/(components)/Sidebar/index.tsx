'use client'

import { FormControl, InputLabel, Input, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { FilterParams } from "../../../types/Filter"

const Sidebar = () => {
  const [choosenFilter, setChoosenFilter] = useState<FilterParams>("title")
  const categories = ['alchol', 'non-alhol', 'with juice']
  return <div className={`flex w-full flex-col gap-8 h-screen px-4 bg-gray-50 dark:bg-gray-600`}>
    <h3 className="mt-8 text-lg font-semibold">Search by</h3>
    <div className="flex flex-col gap-14">
      <div className="flex items-center gap-4">
    {choosenFilter === "title" ? <RadioButtonCheckedIcon className="mt-8"></RadioButtonCheckedIcon> : <RadioButtonUncheckedIcon className="mt-8"></RadioButtonUncheckedIcon>}
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
    {choosenFilter === "categories" ? <RadioButtonCheckedIcon></RadioButtonCheckedIcon> : <RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>}
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          multiple
          labelId="demo-simple-select-label"
          id="demo-simple-select"
           value={categories}
          label="Category"
          // onChange={handleChange}
        >
          {categories.map(category => (
            <MenuItem value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
    <div className="flex items-center gap-4">
    {choosenFilter==="ingridients" ? <RadioButtonCheckedIcon></RadioButtonCheckedIcon> :  <RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>}
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ingridients</InputLabel>
        <Select
          multiple
          labelId="demo-simple-select-label"
          id="demo-simple-select"
           value={categories}
          label="Category"
          // onChange={handleChange}
        >
          {categories.map(category => (
            <MenuItem value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
    </div>
  </div>;
};

export default Sidebar;
