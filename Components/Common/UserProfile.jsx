"use client";
import React from "react";
import { useState } from "react";

const UserProfile = () => {
  const [isAutenticated, setisAutenticated] = useState(true);

  return (
    <div
      className={`${
        isAutenticated ? "p-3 gap-3 flex items-center justify-start" : "hidden"
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-slate-200" />
      <div>
        <h3 className="text-sm">Accama Muhammad</h3>
        <p className="text-xs font-light">accama@example.com</p>
      </div>
    </div>
  );
};

export default UserProfile;
