import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../../UserContext";
import { useState } from "react";
import { Button } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const { sethightemp, lowtemp, hightemp, setlowtemp, isFlipped, value, setValue, url, setUrl } = useContext(UserContext);
  const [clearfilter, setclearfilter] = useState([]);

  const handleRangeChange = (event, newValue) => {
    console.log(event);
    setValue(newValue);

    // Check which value has changed
    setlowtemp(newValue[0]);
    sethightemp(newValue[1]);

    // Remove existing LowTemperature and HighTemperature parameters and their values from the URL
    let newUrl = url.replace(/(\?|&)LowTemperature=[^&]*/g, '');
    newUrl = newUrl.replace(/(\?|&)HighTemperature=[^&]*/g, '');

    // Add the new LowTemperature and HighTemperature parameters to the new URL
    newUrl += `&LowTemperature=${newValue[0]}&HighTemperature=${newValue[1]}`;

    // Set the updated URL
    setUrl(newUrl);
  };

  return (
    <Box sx={{ width: 170, position: "relative" }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value} // Use the value prop to set initial values
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
