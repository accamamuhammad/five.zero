"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="border w-screen flex items-center justify-between">
      <h1>5.0</h1>
      <ul className="hidden md:flex">
        <li>Products</li>
        <li>Pricing</li>
        <li>About us</li>
        <li>How to use?</li>
      </ul>
      <div>
        <FontAwesomeIcon icon={faBars} className="flex md:hidden" />
        <button className="hidden md:flex">Sing in</button>
      </div>
    </nav>
  );
};

export default Navbar;
