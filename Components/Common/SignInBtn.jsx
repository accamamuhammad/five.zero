"use client";
import React from "react";
import { useState } from "react";

const SignInBtn = () => {
  const [isAutenticated, setisAutenticated] = useState(false);

  return (
    <>
      <button
        className={`${
          isAutenticated
            ? "w-10 h-10 rounded-full bg-slate-200 hidden md:flex"
            : "hidden"
        }`}
      ></button>
      <button
        className={`${
          isAutenticated
            ? "hidden"
            : "hidden md:flex text-sm bg-black text-white py-1.5 px-5 rounded-full"
        }`}
      >
        Sign in
      </button>
    </>
  );
};

export default SignInBtn;
