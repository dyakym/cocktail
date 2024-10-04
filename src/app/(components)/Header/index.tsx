import { FormControl, InputLabel, Input } from "@mui/material";
import React from "react";
import Link from "next/link";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-black">
      Logo

      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <div className="flex items-center"></div>
          <Link
            href={"/settings"}
            className="h-min w-min rounded p-2 hover:bg-gray-100"
          >
            <SettingsIcon className=" cursor-pointer dark:text-white"></SettingsIcon>
          </Link>
          <Link href={"/my-list"}>my-list</Link>
          <Link href={"/create"}>create</Link>
          <Link href={"/account"}>account</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
