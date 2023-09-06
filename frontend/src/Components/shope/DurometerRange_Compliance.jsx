import React, { useContext, useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { UserContext } from "../../UserContext";
let Arr = [];

const DurometerRange_Compliance = () => {
  const {
    hardArray,
    setselectedhardness,
    shouldClearCheckboxes,
    checkboxStates,
    setCheckboxStates,
    url,setUrl,page_size,unchecked,
    setunchecked,
  } = useContext(UserContext);

  useEffect(() => {
    
    if (unchecked) {
      Arr = [];
    }
  console.log("inchecked", unchecked, Arr)
}, [unchecked]);

  const handleCheckboxChange = (event) => {
    if(event.target.checked){ 
      setUrl(url+`&DurometerRange=${event.target.value}`)
      }
      else if(!event.target.checked){
        let newUrl = url.replace(/(\?|&)DurometerRange=[^&]*/g, '');
        setUrl( newUrl)
      }
    const itemId = event.target.value;
    const newCheckboxStates = { ...checkboxStates };
    newCheckboxStates[itemId] = event.target.checked;
    setCheckboxStates(newCheckboxStates);
    if (event.target.checked) {
      setselectedhardness((prevItems) => [...prevItems, itemId]);
    } else {
      setselectedhardness((prevItems) =>
        prevItems.filter((id) => id !== itemId)
      );
    }
  };

  useEffect(() => {
    if (shouldClearCheckboxes) {
      setselectedhardness([]); // Clear the selected checkboxes
    }
  }, [shouldClearCheckboxes]);

  const hardnessItems = [
    "Spring Steel",
    "10 - 29 (Softest)",
    "30 - 50 (Very Soft)",
    "51 - 65 (Soft)",
    "66 - 75 (Medium)",
    "76 - 85 (Hard)",
    "86 - 95 (Very Hard)",
    "Over 96 (Hardest)",
  ];

  return (
    <div
    style={{
      position: "relative",
      top: 0,
      bottom: 0,
      fontSize: "12px",
      width: "70%",
    }}>
      <FormGroup>
      {hardnessItems.map((item, index) => (
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
                    setUrl(url + `&DurometerRange=${item}`);
                    Arr.push(item);
                  } else {
                    Arr.map((i) => {
                      return setUrl(url + "," + `${i + 1}`);
                    });
                  }
                } else if (!e.target.checked) {
                  let newUrl = url.replace(/(\?|&)DurometerRange=[^&]*/g, "");
                  setUrl(newUrl);
                  Arr.pop(item);
                }
                // axios.get(`http://127.0.0.1:8000/api/products/?Color=${e.target.value}&limit=25`).then((res)=>{
                //   setrow([])
                //   console.log(res.data);
                //   setrow(res.data)
                // })
              }}
            />
          }
          label={
            <span style={{ fontSize: "12px" }}>{/* Adjust the font size here */}
              {item}
            </span>
          }          />
      ))}
    </FormGroup>
    </div>
  );
};

export default DurometerRange_Compliance;
