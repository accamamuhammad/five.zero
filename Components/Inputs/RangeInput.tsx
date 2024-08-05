import React from "react";

const RangeInput = (props: any) => {
  return (
    <div>
      <button onClick={(e) => props.handlePassRangeData("works")}>
        Show Data
      </button>
    </div>
  );
};

export default RangeInput;
