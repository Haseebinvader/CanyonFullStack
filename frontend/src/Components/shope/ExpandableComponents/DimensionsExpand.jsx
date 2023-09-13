import React from "react";
import dimensions from "../../../Static/Dimensions.jpg";

const ExpandableContent = () => {
  return (
    <div>
      <div>
        <img src={dimensions} alt="StandardImage" width={250} />
      </div>
    </div>
  );
};

export default ExpandableContent;
