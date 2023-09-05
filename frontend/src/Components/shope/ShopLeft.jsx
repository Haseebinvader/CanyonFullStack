import React, { useContext, useState, useEffect } from "react";
import "./css/shopleft.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import CheckboxList from "./CheckboxeList";
import SliderComponent from "./SliderComponent";
import Color from "./Color";
import Brand from "./Brand";
import DurometerRange_Compliance from "./DurometerRange_Compliance";
import { UserContext } from "../../UserContext";
import dimensions from "../../Static/Dimensions.jpg";
import CartPopup from "../CartPage/CartPopup";
import zIndex from "@mui/material/styles/zIndex";
import CheckboxeListSub from "./ExpandableComponents/CheckBoxListSub";
import { Button } from "@mui/material";

const ShopLeft = () => {
  const [isCartopen, setisCartopen] = useState(null);

  const [isDimensionsExpanded, setIsDimensionsExpanded] = useState(true);

  const [isStandardExpand, setisStandardExpand] = useState(true);

  const [isTempExpand, setisTempExpand] = useState(true);

  const [isBaseExpand, setisBaseExpand] = useState(true);
  const [isSubMaterial, setisSubMaterial] = useState(true);

  const [isHardnessExpand, setisHardnessExpand] = useState(true);

  const [isColorExpand, setisColorExpand] = useState(true);

  const [isBrandExpand, setisBrandExpand] = useState(true);

  const countries = ["USA", "Canada", "Mexico", "Brazil", "Japan"];

  const [isopen, setisopen] = useState(true);

  const {
    setCs,
    setid,
    setsearch,
    setsize,
    isChanged,
    selectedmaterial,
    isFlipped,
    setValue,
    setlowtemp,
    sethightemp,
    setselectedcolor,
    value,
    setselectedhardness,
    shouldClearCheckboxes,
    setShouldClearCheckboxes,
    baseMaterialTypeArray,
    setselectedmaterial,
    setselectedbrand,
    checkboxStates,
    setCheckboxStates,
    selectedCountry,
    setselectedCountry,
     url,setUrl,page_size
  } = useContext(UserContext);

  const clearAllFilters = () => {
        setUrl(`http://127.0.0.1:8000/api/products/?limit=${page_size}`)

    setValue([0, 80]);
    setlowtemp(0);
    sethightemp(80);
    setShouldClearCheckboxes(false); // Set the flag to uncheck checkboxes
    setselectedmaterial([]); // Clear the selected materials
    setselectedbrand([]);
    setselectedhardness([]);
    setselectedcolor([]);
    setCheckboxStates(!checkboxStates);

    // Additional code to reset other filter-related states if necessary
  };

  const handleCountryChange = (event) => {
    setselectedCountry(event.target.value);
  };

  const handleExpandCollapseDimensions = () => {
    setIsDimensionsExpanded(!isDimensionsExpanded);
  };

  const handelExpandStandard = () => {
    setisStandardExpand(!isStandardExpand);
  };

  const handleExpandTemp = () => {
    setisTempExpand(!isTempExpand);
  };

  const handleExpandBase = () => {
    setisBaseExpand(!isBaseExpand);
  };

  const handleExpandHardness = () => {
    setisHardnessExpand(!isHardnessExpand);
  };

  const handleExpandColor = () => {
    setisColorExpand(!isColorExpand);
  };

  const handleExpandBrand = () => {
    setisBrandExpand(!isBrandExpand);
  };
  const handleSubBase = () => {
    setisSubMaterial(!isSubMaterial);
  };

  return (
    <div className="main">
      <Button
        className="clear-btn"
        onClick={clearAllFilters}
        variant="contained"
        sx={{ height: "2.5rem", background: "#F4976C" }}
      >
        <p>Clear All Filters</p>
      </Button>
      <div className="keywordSearch">
        <div>
          <input
            type="text"
            placeholder="Search Here"
            className="searchinput"
            onChange={(e) => setUrl( `http://127.0.0.1:8000/api/products/?limit=${page_size}&search=${e.target.value}`)}
          />
        </div>
      </div>

      <div
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          width: "14.5rem",
        }}
      >
        {isCartopen && <CartPopup />}
        <div className="flex" onClick={handleExpandCollapseDimensions}>
          <h2 style={{ fontWeight: "500", fontSize: "15px" }}>
            DIMENSIONS(mm)
          </h2>
          {isDimensionsExpanded ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
        {isDimensionsExpanded && (
          <img src={dimensions} alt="StandardImage" width={160} />
        )}
        <div className="flex" onClick={handelExpandStandard}>
          <h2 style={{ fontWeight: "500", fontSize: "15px" }}>STANDARD SIZE</h2>
          {isStandardExpand ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
        {isStandardExpand && (
          <>
            <p>Standard Sizes:</p>
            <div className="p1" style={{ width: "10rem" }}>
              <select
                value={selectedCountry}
                className="country"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  height: "2rem",
                }}
                onChange={handleCountryChange}
              >
                <option value="">Size Standard</option>

                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="row">
              <AiFillCaretUp
                style={{ marginLeft: "-1rem" }}
                onClick={() => {
                  setisopen(!isopen);
                }}
              />
              <input
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  width: "1.5rem",
                  fontSize: "10px",
                }}
                type="text"
                className="sizeinput"
                placeholder="Size"
                min={0}
                onChange={(e) => {
                  if(e.target.value!==''){

                    setsize(e.target.value);
                     setUrl(url + `&SizeStandard=${e.target.value}`);
                  }
                  else{
                    let newUrl = url.replace(/(\?|&)SizeStandard=[^&]*/g, '');
                    setUrl( newUrl)
                  }
                }}
              />
              <input
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  width: "1.5rem",
                  fontSize: "10px",
                }}
                className="sizeinput"
                placeholder="CS"
                min={0}
                onChange={(e) => {
                  if(e.target.value){

                    setCs(e.target.value);
                     setUrl(url + `&CrossSectionalDiameter=${e.target.value}`);
                  }
                  else{
                  
                    let newUrl = url.replace(/(\?|&)CrossSectionalDiameter=[^&]*/g, '');
                    setUrl( newUrl)
                  }
                  
                   
                }}
              />
              <input
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  width: "1.5rem",
                  fontSize: "10px",
                }}
                className="sizeinput"
                placeholder="ID"
                min={0}
                onChange={(e) => {
                  if(e.target.value!==''){
                  //  setid(e.target.value)
                   setUrl(url + `&InsideDiameter=${e.target.value}`);
                  }
                  else{
                    let newUrl = url.replace(/(\?|&)InsideDiameter=[^&]*/g, '');
                    setUrl( newUrl)
                  }
                }}
              />
            </div>
          </>
        )}

        {/* <SliderComponent /> */}

        <div className="flex" onClick={handleExpandTemp}>
          {isFlipped ? (
            <h2 style={{ fontWeight: "500", fontSize: "15px" }}>
              TEMPERATURE &deg; F
            </h2>
          ) : (
            <h2 style={{ fontWeight: "500", fontSize: "15px" }}>
              TEMPERATURE &deg; C
            </h2>
          )}

          {isTempExpand ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>

        {isTempExpand && <SliderComponent value={value} onChange={setValue} />}

        <div className="flex" onClick={handleExpandBase}>
          <h2 style={{ fontWeight: "500", fontSize: "15px" }}>
            BASE MATERIAL TYPE
          </h2>

          {isBaseExpand ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>

        {isBaseExpand && <CheckboxList />}
        <div className="flex" onClick={handleSubBase}>
          <h2 style={{ fontWeight: "500", fontSize: "15px" }}>
            MATERIAL SUBTYPE
          </h2>

          <AiFillCaretDown
            className={isSubMaterial ? "caret-icon expanded" : "caret-icon"}
          />
        </div>

        {isSubMaterial && <CheckboxeListSub />}

        <div className="flex" onClick={handleExpandHardness}>
          <h2 style={{ fontWeight: "500", fontSize: "15px" }}>HARDNESS</h2>

          {isHardnessExpand ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>

        {isHardnessExpand && <DurometerRange_Compliance />}

        <div className="flex" onClick={handleExpandColor}>
          <h2 style={{ fontWeight: "500", fontSize: "15px" }}>COLOR</h2>

          {isColorExpand ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>

        {isColorExpand && <Color />}

        <div className="flex" onClick={handleExpandBrand}>
          <h2 style={{ fontWeight: "500", fontSize: "15px" }}>BRAND</h2>

          {isBrandExpand ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>

        {isBrandExpand && <Brand />}
      </div>
    </div>
  );
};

export default ShopLeft;
