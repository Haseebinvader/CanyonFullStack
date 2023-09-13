import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
let Arr = [];

const Color = () => {
  const {
    unchecked,
    setunchecked,
    setselectedcolor,
    shouldClearCheckboxes,
    checkboxStates,
    setCheckboxStates,
    setColor,
    url,
    setUrl,
  } = useContext(UserContext);

  useEffect(() => {
    if (unchecked) {
      Arr = [];
    }
    console.log("inchecked", unchecked, Arr);
  }, [unchecked]);

  const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    const newCheckboxStates = { ...checkboxStates };
    newCheckboxStates[itemId] = event.target.checked;
    setCheckboxStates(newCheckboxStates);
    if (event.target.checked) {
      setColor((prevItems) => [...prevItems, itemId]);
    } else {
      setColor((prevItems) => prevItems.filter((id) => id !== itemId));
    }
  };

  useEffect(() => {
    if (shouldClearCheckboxes) {
      setselectedcolor([]); // Clear the selected checkboxes
    }
  }, [shouldClearCheckboxes]);

  const colorItems = [
    "Black",
    "Blue",
    "Brown",
    "Green",
    "White",
    "Red",
    "Yellow",
    "Orange",
    "Transluscent",
    "Transluscent yellow",
    "Transluscent amber",
    "Purple",
    "Tan",
    "Gray",
    "Off-White",
    "Transluscent Brown",
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
        {colorItems.map((item, index) => (
          <FormControlLabel
            control={
              <Checkbox
                style={{
                  fontSize: "10px",
                  width: "20px",
                  height: "16px",
                  marginLeft: "10px",
                  paddingTop: "12px",
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

export default Color;
