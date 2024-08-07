"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import SunIcon from "../../public/Icons/sun-bright-svgrepo-com.svg";

const ThemeToggle = () => {
  useEffect(() => {
    document.body.classList.add("light-mode");
  }, []);

  const toggleMode = () => {
    const body = document.body;
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    }
  };

  return (
    <div
      onClick={toggleMode}
      className="p-[5px] border-[.5px] border-black rounded-md cursor-pointer"
    >
      <Image width={22} height={22} src={SunIcon} alt="toggle" />
    </div>
  );
};

export default ThemeToggle;
