import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { useState } from "react";
import { Button } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  // const [value, setValue] = React.useState([0, 80]);
  const { sethightemp, setlowtemp, isFlipped, value, setValue, url, setUrl } = useContext(UserContext);
  const [clearfilter, setclearfilter] = useState([]);
  

  const handleRangeChange = (event, newValue) => {
    setValue(newValue);
    setlowtemp(newValue[0]);
    sethightemp(newValue[1]);
    setUrl(url+`&LowTemperature=lte:${newValue[0]}&HighTemperature=gte:${newValue[1]}`)
  };

  
  
  return (
    <Box sx={{ width: 170, position: "relative" }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleRangeChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={-70}
        max={360}
        style={{ color: "#724E38", position: "relative" }}
      />

      <Typography variant="subtitle1">
        {isFlipped ? (
          <strong
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              top: "-5px",
              gap: "1.2rem",
              left: 0,
            }}
          >
            <p>{(value[0] / 25.4).toFixed(4)}°F</p> <p>to</p>{" "}
            <p>{(value[1] / 25.4).toFixed(4)}°F</p>
          </strong>
        ) : (
          <strong
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              top: "-5px",
              gap: "2rem",
              left: 0,
            }}
          >
            <p>{value[0]}°C</p> <p>to</p> <p>{value[1]}°C</p>
          </strong>
        )}
      </Typography>
    </Box>
  );
}
