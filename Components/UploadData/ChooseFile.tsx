import React from "react";
/** onChange={(e) => props.handlePassFileData([e.target.files[0].name])} */
/** size, lastModifiedDate, type */
const ChooseFile = (props: any) => {
  return (
    <div>
      <input
        name="File-input"
        type="file"
        onChange={(e) => props.handlePassFileData(e.target.files[0].name)}
      />
    </div>
  );
};

export default ChooseFile;
