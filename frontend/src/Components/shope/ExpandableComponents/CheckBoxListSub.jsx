import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";
let Arr = [];

const CheckboxeListSub = () => {
  const { submaterialArray, setselectedSubmaterial,  row,setrow,
    url,setUrl,page_size } = useContext(UserContext);

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
      style={{
        position: "relative",
        top: 0,
        bottom: 0,
        fontSize: "12px",
        width: "70%",
      }}
    >
      {submaterialItems.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "flex-start" }}>
          <input type="checkbox" value={item} onChange={handleCheckboxChange} 
           onClick={(e)=>{
            if(e.target.checked){ 
              if(Arr.length===0){
                setUrl(url+`&MaterialSubtype=${e.target.value}`)
                }
                else if(!e.target.checked){
                  setUrl( `http://127.0.0.1:8000/api/products/?Online=Online&Blocked=False&limit=${page_size}`)
                }
              // axios.get(`http://127.0.0.1:8000/api/products/?Color=${e.target.value}&limit=25`).then((res)=>{
              //   setrow([])
              //   console.log(res.data);
              //   setrow(res.data)
              // })
            }}} />
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxeListSub;
