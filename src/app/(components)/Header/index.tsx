import React from "react";
import Link from "next/link";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
  const favorite = [];
  return (
    <div className="flex items-center justify-between  px-4 py-3 bg-white dark:bg-black">
      Logo

      <div className="flex items-center gap-8">
        <div className="relative flex h-min">
          <div className="flex p-4 bg-gray-100"></div>
          <Link href={"/my-list"} className="flex items-center px-4 py-2 mr-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 whitespace-nowrap ">
            {!favorite.length ? <FavoriteBorderIcon className=" mr-2 cursor-pointer dark:text-white "></FavoriteBorderIcon>
              : <FavoriteIcon className="mr-2 cursor-pointer  dark:text-white"></FavoriteIcon>}
            <span>My-List</span>
          </Link>

          <Link 
          href={"/create"}
          className="flex items-center mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 whitespace-nowrap "
          >
            <AddIcon></AddIcon>
            <span>Create</span>
          </Link>

          <Link
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap"
            href={"/account"}
          >
            <span>Log out</span> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
