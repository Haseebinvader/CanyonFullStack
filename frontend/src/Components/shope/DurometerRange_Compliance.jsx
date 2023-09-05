import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
let Arr = [];

const DurometerRange_Compliance = () => {
  const {
    hardArray,
    setselectedhardness,
    shouldClearCheckboxes,
    checkboxStates,
    setCheckboxStates,
    url,setUrl,page_size
  } = useContext(UserContext);

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
      {hardnessItems.map((item, index) => (
        <div key={index} style={{ display: "flex",alignItems:"flex-start" }}>
          <input
            type="checkbox"
            value={item}
            onChange={handleCheckboxChange}
            onClick={(e)=>{
              if(e.target.checked){ 
                if(Arr.length===0){
                  setUrl(url+`&DurometerRange=${e.target.value}`)
                Arr.push(e.target.value)
                }
                else{
                  Arr.map((i)=>{
                    return setUrl(url+','+`${i+1}`)
                  })
                }
                
                }
                else if(!e.target.checked){
                  setUrl( `http://127.0.0.1:8000/api/products/?limit=${page_size}`)
                  Arr.pop(e.target.value)
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

export default DurometerRange_Compliance;
