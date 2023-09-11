import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";

export default function TemperatureToogle() {
  const [alignment, setAlignment] = useState("c");
  const { isFlipped, setIsFlipped } = useContext(UserContext);

  const handleChange = (event, newAlignment) => {
    if (newAlignment === alignment) {
      return;
    }

    // Clicked a different ToggleButton, update the state
    setAlignment(newAlignment);
    setIsFlipped(!isFlipped);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        value="c"
        style={{
          width: "50px",
          height: "2px",
          backgroundColor: `${alignment === "c" ? "#f4976B" : "#fff"}`,
          color: `${alignment === "c" ? "white" : "black"}`,
        }}
      >
        °C
      </ToggleButton>
      <ToggleButton
        value="f"
        style={{
          width: "50px",
          height: "2px",
          backgroundColor: `${alignment === "f" ? "#f4976B" : "white"}`,
          color: `${alignment === "f" ? "white" : "black"}`,
        }}
      >
        °F
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
