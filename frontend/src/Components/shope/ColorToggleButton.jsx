import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";

export default function ColorToogle() {
  const [alignment, setAlignment] = useState("mm");
  const { isChanged, setIsChanged } = useContext(UserContext);

  const handleChange = (event, newAlignment) => {
    if (newAlignment === alignment) {
      return;
    }

    // Clicked a different ToggleButton, update the state
    setAlignment(newAlignment);
    setIsChanged(!isChanged);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        value="mm"
        style={{
          width: "50px",
          height: "2px",
          backgroundColor: `${alignment === "mm" ? "#f4976B" : "#fff"}`,
          color: `${alignment === "mm" ? "white" : "black"}`,
        }}
      >
        mm
      </ToggleButton>
      <ToggleButton
        value="in"
        style={{
          width: "50px",
          height: "2px",
          backgroundColor: `${alignment === "in" ? "#f4976B" : "white"}`,
          color: `${alignment === "in" ? "white" : "black"}`,
        }}
      >
        in
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
