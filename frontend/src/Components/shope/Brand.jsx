import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
let Arr = [];

const Brand = () => {
  const {
    unchecked,
    setunchecked,
    setselectedbrand,
    shouldClearCheckboxes,
    setCheckboxStates,
    url,
    setUrl,
  } = useContext(UserContext);

  useEffect(() => {
    if (unchecked) {
      Arr = [];
    }
  }, [unchecked]);

  useEffect(() => {
    if (shouldClearCheckboxes) {
      setselectedbrand([]); // Clear the selected checkboxes
      setCheckboxStates({}); // Clear checkbox states
    }
  }, [shouldClearCheckboxes]);

  const brandItems = [
    "Canyon Components",
    "CanRez™ (Canyon Components)",
    "Chemraz® (Greene Tweed)",
    "Kalrez® (Dupont)",
    "Parker Seal® (Parker)",
    "Parofluor® (Parker)",
    "Simriz® (Freudenberg)",
  ];

  return (
    <div
      style={{
        position: "relative",
        top: 0,
        bottom: 0,
        fontSize: "12px",
        width: "70%",
      }}
    >
      <FormGroup>
        {brandItems.map((item, index) => (
          <FormControlLabel
            control={
              <Checkbox
                style={{
                  fontSize: "8px",
                  width: "10px",
                  height: "12px",
                  marginLeft: "10px",
                  paddingTop: "10px",
                }}
                checked={Arr.includes(item)}
                onChange={(e) => {
                  console.log(item);
                  setunchecked(false);

                  if (e.target.checked) {
                    if (Arr.length === 0) {
                      setUrl(url + `&Color=${item}`);
                      Arr.push(item);
                    } else {
                      Arr.push(item);

                      Arr.map((i) => {
                        return setUrl(url + "," + `${i + 1}`);
                      });
                    }
                  } else if (!e.target.checked) {
                    let newUrl = url.replace(/(\?|&)Color=[^&]*/g, "");
                    setUrl(newUrl);
                    Arr.pop(item);
                  }
                }}
              />
            }
            label={
              <span
                style={{
                  fontSize: "10.5px",
                  paddingLeft: "2px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item}
              </span>
            }
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default Brand;
