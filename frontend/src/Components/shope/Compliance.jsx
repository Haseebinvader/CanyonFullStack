import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
let Arr = [];

const Compliance = () => {
  const {
    unchecked,
    setunchecked,
    setselectedbrand,
    shouldClearCheckboxes,
    setCheckboxStates,
    url,
    setUrl,
  } = useContext(UserContext);

  useEffect(() => {
    if (unchecked) {
      Arr = [];
    }
  }, [unchecked]);

  useEffect(() => {
    if (shouldClearCheckboxes) {
      setselectedbrand([]);
      setCheckboxStates({});
    }
  }, [shouldClearCheckboxes]);
  const brandItems = [
    // "NSF 61",
    "FDA Compliant",
    // "USP Class VI",
    // "NSF 51",
    // "UL Listed",
    // "Metal Detectable",
    // "3A Sanitary",
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
                style={{
                  fontSize: "8px",
                  width: "10px",
                  height: "12px",
                  marginLeft: "10px",
                  paddingTop: "10px",
                }}
                checked={Arr.includes(item)}
                onChange={(e) => {
                  console.log(item);
                  setunchecked(false);

                  if (e.target.checked) {
                    if (Arr.length === 0) {
                      setUrl(url + `&FDACompliant=${item}`);
                      Arr.push(item);
                    } else {
                      Arr.push(item);

                      Arr.map((i) => {
                        return setUrl(url + "," + `${i + 1}`);
                      });
                    }
                  } else if (!e.target.checked) {
                    let newUrl = url.replace(/(\?|&)FDACompliant=[^&]*/g, "");
                    setUrl(newUrl);
                    Arr.pop(item);
                  }
                }}
              />
            }
            label={
              <span
                style={{
                  fontSize: "10.5px",
                  paddingLeft: "2px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item}
              </span>
            }
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default Compliance;
