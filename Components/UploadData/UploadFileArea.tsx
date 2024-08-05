"use client";
import React from "react";
import { useState, useEffect } from "react";
import ChooseFile from "./ChooseFile";
import SelectAction from "./SelectAction";

const UploadFileArea = (props: any) => {
  const [FileChoosenByUserData, setFileChoosenByUserData] = useState([]);
  const [ActionChoosenByUserData, setActionChoosenByUserData] = useState([]);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const components = [
    <ChooseFile
      key={1}
      handlePassFileData={(data: any) =>
        setFileChoosenByUserData([{ FileName: data }])
      }
    />,
    <SelectAction
      key={2}
      handlePassActionData={(data: any) =>
        setActionChoosenByUserData([{ Action: data }])
      }
    />,
  ];

  const handlePrevoiusButton = () => {
    if (currentComponentIndex != 0) {
      setCurrentComponentIndex(currentComponentIndex - 1);
    }
  };

  const handleNextButton = () => {
    if (FileChoosenByUserData.length < 1) {
      alert("You need to add a file to proceed");
    } else if (
      ActionChoosenByUserData.length < 1 &&
      currentComponentIndex === 1
    ) {
      alert("You need to add an action to proceed");
    } else if (
      FileChoosenByUserData.length != 0 &&
      ActionChoosenByUserData.length != 0
    ) {
      console.log("redirect based on action");
    } else {
      setCurrentComponentIndex(currentComponentIndex + 1);
    }
  };

  return (
    <div className="w-56 h-52 rounded-lg bg-slate-200 flex items-center justify-evenly flex-col">
      {components[currentComponentIndex]}
      <div className="w-full flex gap-10 items-center justify-center">
        <button
          onClick={handlePrevoiusButton}
          className={currentComponentIndex === 0 ? "hidden" : "block"}
        >
          Previous
        </button>
        <button onClick={handleNextButton}>Next</button>
      </div>
    </div>
  );
};

export default UploadFileArea;
