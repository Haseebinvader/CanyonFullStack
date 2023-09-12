import React, { useContext } from "react";
import "./css/shopright.css";
import { useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import ColorToggleButton from "./ColorToggleButton";
import TemperatureToogle from "./TemperatureToogle";
import ItemsData from "./ItemsData";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import previous from "../../Static/Icons/next.svg";
import nextIcon from "../../Static/Icons/previous.svg";

const ShopRight = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };
  const { filteredCount, url, setUrl, paginationControl, setPageSize } =
    useContext(UserContext);

  const handleChangePageSize = (event) => {
    console.log(event.target.value);
    setPageSize(event.target.value);
    setUrl(url + `&limit=${event.target.value}`);
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "76.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "large",
            }}
          >
            {filteredCount ? filteredCount : ""}
          </h2>

          <div
            className="toggles"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div>
              <span>Temperature: </span>

              <TemperatureToogle />
            </div>
            <span></span>
            <div>
              <span> Size: </span>

              <ColorToggleButton />
            </div>
          </div>
        </div>
        <div>
          {/* <CustomPaginationActionsTable /> */}
          <ItemsData />
          <div className="footerTable">
            <Box sx={{ minWidth: 120, height: "0.2rem", paddingTop: "1rem" }}>
              <FormControl fullWidth>
                <InputLabel
                  sx={{
                    transform: "translateY(-80%)",
                    paddingLeft: "0.9rem",
                    fontSize: "12px",
                  }}
                >
                  Page Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Page Size"
                  onChange={handleChangePageSize}
                  sx={{ height: "1.8rem" }}
                >
                  <MenuItem value={25} defaultValue={25}>
                    25
                  </MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                  <MenuItem value={100}>100</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <div className="pagination">
              <button
                onClick={(e) => {
                  setUrl(paginationControl.previous);
                }}
              >
                <img src={nextIcon} alt="previous" />
              </button>
              <button
                onClick={(e) => {
                  setUrl(paginationControl.next);
                }}
              >
                <img src={previous} alt="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopRight;
