import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
let Arr = [];

const CheckboxeList = () => {
  console.log(Arr);
  const {
    selectedmaterial,
    setselectedmaterial,
    row,
    setrow,
    unchecked,
    setunchecked,
    url,
    setUrl,
    page_size,
  } = useContext(UserContext);

  useEffect(() => {
    if (unchecked) {
      Arr = [];
    }
  }, [unchecked]);

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
    <div style={{}}>
      <FormGroup>
        {checkboxItems.map((item, index) => (
          <FormControlLabel
            control={
              <Checkbox
                style={{
                  fontSize: "10px",
                  width: "20px",
                  height: "16px",
                  marginLeft: "10px",
                  paddingTop: '12px' 
                }}
                checked={Arr.includes(item)}
                onChange={(e) => {
                  console.log(e?.target);
                  setunchecked(false);

                  if (e.target.checked) {
                    if (Arr.length === 0) {
                      setUrl(url + `&Material=${item}`);
                      Arr.push(item);
                    } else {
                      Arr.push(item);

                      Arr.map((i) => {
                        return setUrl(url + "," + `${i + 1}`);
                      });
                    }
                  } else if (!e.target.checked) {
                    let newUrl = url.replace(/(\?|&)Material=[^&]*/g, "");
                    setUrl(newUrl);
                    const newarr = Arr.filter((itemdata) => itemdata !== item);
                    Arr = newarr;
                  }
                }}
              />
            }
            label={
              <span style={{ fontSize: "10.5px",paddingLeft: "2px", display: "flex", justifyContent: 'center', alignItems: 'center', }}>

                {item}
              </span>
            }
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default CheckboxeList;
