import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";

let Arr = [];

const CheckboxeList = () => {
  const { selectedmaterial, setselectedmaterial,  row,setrow,
    url,setUrl,page_size } = useContext(UserContext);
    


  // const handleCheckboxChange = (event) => {
  //   const itemId = event.target.value;

  //   if (selectedmaterial.includes(itemId)) {
  //     setselectedmaterial((prevItems) =>
  //       prevItems.filter((id) => {
  //         id !== itemId
  //         console.log(id);
  //         if(selectedmaterial.length===0){
  //         setUrl(url+`&Material=${id}`)
  //         }
  //         else{
  //           setUrl(url+','+`${id}`)
  //         }
        
  //       })
  //     );
  //   } else {
  //     setselectedmaterial((prevItems) => [...prevItems, itemId]);
  //   }
  // };

  const checkboxItems = [
    "ACM (Acrylic Rubber)",
    "AEM (Ethylene Acrylic Rubber)",
    "AFLAS® (FEPM, TFE/P)",
    "Butyl (Isobutylene, IIR)",
    "CSPE (CSM, Hypalon®)",
    "CTFE",
    "EPDM (EPR, EPM)",
    "FEP (Teflon®)",
    "FKM (Viton®)",
    "Fluorosilicone (FVMQ, FSIL)",
    "HNBR (Hydrogenated Nitrile)",
    "NBR (Nitrile, Buna-N)",
    "Neoprene® (Chloroprene)",
    "PEEK (polyether ether ketone)",
    "PFA (Teflon®)",
    "PTFE (Teflon®)",
    "Polyurethane (AU, PU)",
    "SBR (Styrene Butadiene)",
    "Silicone (VMQ)",
    "TPE (Thermoplastic Elastomer)",
    "UHMWPE (Polyethylene)",
    "XNBR (Carboxylated Nitrile)",
    "FFKM (Kalrez®, CanRez™, Perfluoroelastomer)",
    "FFKM (CanRez™, Perfluoroelastomer)",
    "FFKM (Chemraz®, CanRez™, Perfluoroelastomer)",
    "HNBR (Parker Hydrogenated Nitrile)",
    "FEP Encapsulated FKM",
    "FEP Encapsulated Silicone",
    "FEP Encapsulated Steel Spring",
    "PFA Encapsulated Silicone",
    "PFA Encapsulated FKM",
    "PFA Encapsulated Steel Spring",
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
      {checkboxItems.map((item, index) => (
        <div key={index} style={{ display: "flex",alignItems:"flex-start" }}>
          <input
            type="checkbox"
            value={item}
            // onChange={handleCheckboxChange}
            onClick={(e)=>{
              if(e.target.checked){ 
                if(Arr.length===0){
                  setUrl(url+`&Material=${e.target.value}`)
                Arr.push(e.target.value)
                }
                else{
                  Arr.map((i)=>{
                    return setUrl(url+','+`${i+1}`)
                  })
                }
                
                }
                else if(!e.target.checked){
                  
                  let newUrl = url.replace(/(\?|&)Material=[^&]*/g, '');
                  setUrl( newUrl)
                  Arr.pop(e.target.value)
                }
              // axios.get(`http://127.0.0.1:8000/api/products/?Color=${e.target.value}&limit=25`).then((res)=>{
              //   setrow([])
              //   console.log(res.data);
              //   setrow(res.data)
              // })
            }}
            // checked={selectedmaterial.includes(item)}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxeList;
