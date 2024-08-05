"use client";
import React from "react";

const DefaultUploadArea = (props: any) => {
  return (
    <div className="w-72 h-64 flex items-center justify-evenly flex-col">
      <p
        className="text-4xl cursor-pointer"
        onClick={(e) => props.ToggleStateOfUpload(true)}
      >
        +
      </p>
    </div>
  );
};

export default DefaultUploadArea;
