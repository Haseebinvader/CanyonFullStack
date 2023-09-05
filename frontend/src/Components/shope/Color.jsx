import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
let Arr = [];

const Color = () => {
  const {
    colorArray,
    setselectedcolor,
    shouldClearCheckboxes,
    checkboxStates,
    setCheckboxStates,
    color,
    setColor,
     row,setrow,
    url,setUrl,page_size
  } = useContext(UserContext);

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
      {colorItems.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={item}
            onChange={handleCheckboxChange}
            onClick={(e)=>{
              if(e.target.checked){ 
              setUrl(url+`&Color=${e.target.value}`)
              }
              else if(!e.target.checked){
                let newUrl = url.replace(/(\?|&)Color=[^&]*/g, '');
                setUrl( newUrl)
              }
              // axios.get(`http://127.0.0.1:8000/api/products/?Color=${e.target.value}&limit=25`).then((res)=>{
              //   setrow([])
              //   console.log(res.data);
              //   setrow(res.data)
              // })
            }}
            checked={checkboxStates[item] || false}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default Color;
