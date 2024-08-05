"use client";
import React, { useEffect, useState } from "react";

const SelectAction = (props: any) => {
  return (
    <div>
      <h1>Select Action</h1>
      <div className="flex gap-2 flex-row items-center justify-center">
        <input
          type="radio"
          name="action"
          onChange={(e) => props.handlePassActionData("Summarise")}
        />
        <p>Summarise</p>
      </div>
      <div className="flex gap-2 flex-row items-center justify-center">
        <input
          type="radio"
          name="action"
          onChange={(e) => props.handlePassActionData("PastQuestions")}
        />
        <p>Past Questions</p>
      </div>
      <div className="flex gap-2 flex-row items-center justify-center">
        <input
          type="radio"
          name="action"
          onChange={(e) => props.handlePassActionData("StudyGuide")}
        />
        <p>Study Guide</p>
      </div>
      <div className="flex gap-2 flex-row items-center justify-center">
        <input
          type="radio"
          name="action"
          onChange={(e) => props.handlePassActionData("Assignment")}
        />
        <p>Assignment</p>
      </div>
    </div>
  );
};

export default SelectAction;
