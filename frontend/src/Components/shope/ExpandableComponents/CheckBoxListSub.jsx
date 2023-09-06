import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserContext";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
let Arr = [];

const CheckboxeListSub = () => {
  const { submaterialArray, setselectedSubmaterial,  row,setrow,
    unchecked,
    setunchecked,
    url,setUrl,page_size } = useContext(UserContext);

    useEffect(() => {
    
      if (unchecked) {
        Arr = [];
      }
    console.log("inchecked", unchecked, Arr)
  }, [unchecked]);

  const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    if (event.target.checked) {
      setselectedSubmaterial((prevItems) => [...prevItems, itemId]);
    } else {
      setselectedSubmaterial((prevItems) =>
        prevItems.filter((id) => id !== itemId)
      );
    }
  };

  const submaterialItems = [
    "FKM Type A (General Purpose Viton®)",
    "FKM Type B (Viton®)",
    "FKM Type F (Viton®)",
    "FKM Type GF (Viton®)",
    "FKM Type GLT (Low Temp Viton®)",
    "FKM Type GFLT (Low Temp Viton®)",
    "FKM Type XLT (Extreme Low Temp Viton®)",
    "FKM Type ULT (Ultra Low Temp Viton®)",
    "FKM Type ETP (Viton® Extreme)",
    "FKM Type HP (HP Viton®)",
    "PVMQ Type Silicone",
    "Ester Polyurethane",
    "Ether Polyurethane",
    "Gum Polyurethane",
    "Silicone Core",
    "Hollow Silicone Core",
    "FKM Core",
    "Hollow FKM Core",
    "EPDM Core",
    "Hollow EPDM Core",
    "Steel Core",
    "Backup Ring (Spiral)",
    "Backup Ring (Single Turn)",
    "Backup Ring (Solid)",
  ];

  return (
    <div
    >
     <FormGroup>
        {submaterialItems.map((item, index) => (
          <FormControlLabel 
            control={
              <Checkbox 
              style={{ fontSize: "10px", width: "16px", height: "16px" }}
                checked={Arr.includes(item)}
                onChange={(e) => {
                  console.log(item)
                  setunchecked(false);

                  if (e.target.checked) {
                    if (Arr.length === 0) {
                      setUrl(url + `&MaterialSubtype=${item}`);
                      Arr.push(item);
                    } else {
                      Arr.map((i) => {
                        return setUrl(url + "," + `${i + 1}`);
                      });
                    }
                  } else if (!e.target.checked) {
                    let newUrl = url.replace(/(\?|&)MaterialSubtype=[^&]*/g, "");
                    setUrl(newUrl);
                    Arr.pop(item);
                  }
                }}
              />
            }
            label={
              <span style={{ fontSize: "13px" }}>{/* Adjust the font size here */}
                {item}
              </span>
            }          />
        ))}
      </FormGroup>
    </div>
  );
};

export default CheckboxeListSub;
