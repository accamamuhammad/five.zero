"use client";
import React from "react";
import { useState } from "react";
import SignInBtn from "./Common/SignInBtn";
import UserProfile from "./Common/UserProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const toggleNav = () => {
    setNavState(!navState);
  };

  return (
    <nav className="w-screen flex items-center justify-center flex-col">
      <div
        className={`${"w-full relative px-5 pt-4 pb-4 flex items-center justify-between"} ${
          navState
            ? "border-b-gray-200 border-b-[1px] md:border-none"
            : "border-none"
        }`}
      >
        <h1 className="text-2xl">5.0</h1>
        <ul
          className={`${
            navState
              ? "flex md:relative md:flex-row md:flex md:top-0 w-full md:w-fit pl-3 absolute top-[72px] left-0 flex-col"
              : "hidden md:flex md:relative"
          }`}
        >
          <li className="hover:bg-purple-50 md:hover:bg-transparent hover:rounded-lg mr-3 cursor-pointer p-3 text-slate-500 hover:text-purple-600">
            Products
          </li>
          <li className="hover:bg-purple-50 md:hover:bg-transparent hover:rounded-lg mr-3 cursor-pointer p-3 text-slate-500 hover:text-purple-600">
            Pricing
          </li>
          <li className="hover:bg-purple-50 md:hover:bg-transparent hover:rounded-lg mr-3 cursor-pointer p-3 text-slate-500 hover:text-purple-600">
            About us
          </li>
          <li className="hover:bg-purple-50 md:hover:bg-transparent hover:rounded-lg mr-3 cursor-pointer p-3 text-slate-500 hover:text-purple-600">
            How to use?
          </li>
        </ul>
        <div>
          <FontAwesomeIcon
            icon={navState ? faXmark : faBars}
            size="lg"
            onClick={toggleNav}
            className="flex md:hidden cursor-pointer"
          />
          <SignInBtn />
        </div>
      </div>
      <div
        className={`${
          navState
            ? "absolute top-[270px] h-[1px] bg-gray-200 w-full md:hidden"
            : "block md:hidden"
        }`}
      />
      <ul
        className={`${
          navState
            ? "flex md:hidden w-full pl-3 absolute top-[280px] left-0 flex-col"
            : "hidden"
        }`}
      >
        <UserProfile />
        <li className="hover:bg-purple-50 hover:rounded-lg cursor-pointer p-3 mr-3 text-slate-500 hover:text-purple-600">
          Settings
        </li>
        <li className="hover:bg-purple-50 hover:rounded-lg cursor-pointer p-3 mr-3 text-slate-500 hover:text-purple-600">
          Sign out
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
