"use client";
import React, { useState } from "react";
import UploadFileArea from "./UploadFileArea";
import DefaultUploadArea from "./DefaultUploadArea";

const MainSelectFileArea = () => {
  const [currentStateOfUpload, setCurrentStateOfUpload] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);

  const closeDialog = () => {
    setCancelModal(true);
  };

  const cancelFileAddition = () => {
    setCancelModal(false);
    setCurrentStateOfUpload(false);
  };

  const continueFileAddition = () => {
    setCancelModal(false);
  };

  return (
    <div className="w-fit h-fit rounded-lg flex flex-col items-center justify-evenly bg-slate-300">
      <div>
        <DefaultUploadArea
          ToggleStateOfUpload={(state: boolean) =>
            setCurrentStateOfUpload(state)
          }
        />
      </div>
      {/* This dialog is for the upload files */}
      <dialog open={currentStateOfUpload} className="absolute right-0 top-0">
        <button onClick={closeDialog}>Close Modal</button>
        <UploadFileArea />
      </dialog>
      {/* This dialog is for when the user wants to cancel or continue */}
      <dialog
        open={cancelModal}
        className="absolute right-0 bottom-0 bg-red-300"
      >
        <p>Are your sure you want to cancel</p>
        <button onClick={continueFileAddition}>Continue</button>
        <button onClick={cancelFileAddition}>Cancel</button>
      </dialog>
    </div>
  );
};

export default MainSelectFileArea;
