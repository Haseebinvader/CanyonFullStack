import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
let Arr = [];

const Brand = () => {
  const {
    brandArray,
    unchecked,
    setunchecked,
    setselectedbrand,
    shouldClearCheckboxes,
    checkboxStates,
    setCheckboxStates,
    url,setUrl,page_size
  } = useContext(UserContext);

   useEffect(() => {
    
    if (unchecked) {
      Arr = [];
    }
  console.log("inchecked", unchecked, Arr)
}, [unchecked]);

  const handleCheckboxChange = (event) => {
    if(event.target.checked){ 
      setUrl(url+`&Brand=${event.target.value}`)
      }
      else if(!event.target.checked){
        let newUrl = url.replace(/(\?|&)Brand=[^&]*/g, '');
        setUrl( newUrl)
      }
    const itemId = event.target.value;
    const newCheckboxStates = { ...checkboxStates };
    newCheckboxStates[itemId] = event.target.checked;
    setCheckboxStates(newCheckboxStates);

    if (event.target.checked) {
      setselectedbrand((prevItems) => [...prevItems, itemId]);
    } else {
      setselectedbrand((prevItems) => prevItems.filter((id) => id !== itemId));
    }
  };

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
              style={{ fontSize: "30px", width: "20px", height: "16px" }}
                checked={Arr.includes(item)}
                onChange={(e) => {
                  console.log(item)
                  setunchecked(false);

                  if (e.target.checked) {
                    if (Arr.length === 0) {
                      setUrl(url + `&Color=${item}`);
                      Arr.push(item);
                    } else {
                      Arr.map((i) => {
                        return setUrl(url + "," + `${i + 1}`);
                      });
                    }
                  } else if (!e.target.checked) {
                    let newUrl = url.replace(/(\?|&)Color=[^&]*/g, "");
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

export default Brand;
