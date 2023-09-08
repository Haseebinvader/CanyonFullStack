import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserContext } from "../../UserContext";
import Checkbox from "@mui/material/Checkbox"; // Step 1

export default function BasicTable() {
  const {
    item,
    selectedCountry,
    size,
    setsize1,
    setCs,
    setid1,
    cs,
    id,
    cs1,
    id1,
    row,
    setUrl,
    page_size,
    url,
  } = useContext(UserContext);
  const [checkedItems, setCheckedItems] = useState({}); // Step 3

  const handleCheckboxChange = (id, size1, css1, idd1) => {
    if (!checkedItems[id]) {
      // Checkbox is being checked
      setCs(css1);
      setid1(idd1);
      setsize1(size1);
    } else {
      // Checkbox is being unchecked
      setCs("");
      setid1("");
      setsize1("");
      let newUrl = url.replace(/(\?|&)SizeAS568=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)CrossSectionalDiameter=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)InsideDiameter=[^&]*/g, "");
      setUrl(newUrl);
    }
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id], // Toggle the checkbox state
    }));
  };

  const filteredItems = row.filter((data) => {
    const sizeStandard = selectedCountry === "Japan" ? "js" : "as"; // Default to "as" for other countries
    return data.SizeStandard?.toLowerCase()?.includes(sizeStandard) ?? false;
  });

  const filteredSize = filteredItems.filter((data) => {
    return data.SizeAS568.split(" ")[0].replace(/-/g, "").includes(size);
  });

  return (
    <Paper
      style={{
        height: 200,
        width: "200px",
        maxHeight: "800px",
        overflow: "scroll",
        marginTop: "0.6rem",
        borderTop: "0.1px solid lightgrey",
        borderLeft: "0.1px solid lightgrey",
        marginRight: "1rem",
      }}
    >
      <TableContainer
        style={{
          minWidth: 150,
        }}
      >
        <Table>
          <TableBody>
            {filteredSize
              ? filteredSize.map((value, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ maxWidth: "2px", fontSize: "10px" }}>
                      <Checkbox
                        checked={checkedItems[index] || false}
                        onChange={(e) => {
                          handleCheckboxChange(
                            index,
                            value.SizeAS568 || value.SizeJIS,
                            value.CrossSectionalDiameter,
                            value.InsideDiameter
                          );
                          if (e.target.checked) {
                            setUrl(
                              url +
                                `&SizeAS568=${
                                  value.SizeAS568 || value.SizeJIS
                                }&CrossSectionalDiameter=${
                                  value.CrossSectionalDiameter
                                }&InsideDiameter=${value.InsideDiameter}`
                            );
                          }
                          if (!e.target.checked) {
                            let newUrl = url.replace(
                              /(\?|&)SizeAS568=[^&]*/g,
                              ""
                            );
                            newUrl = newUrl.replace(
                              /(\?|&)CrossSectionalDiameter=[^&]*/g,
                              ""
                            );
                            newUrl = newUrl.replace(
                              /(\?|&)InsideDiameter=[^&]*/g,
                              ""
                            );
                            setUrl(newUrl);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ maxWidth: "2px" }}>
                      {value.SizeAS568.split(" ")[0].replace(/-/g, "")}
                    </TableCell>
                    <TableCell>{value.CrossSectionalDiameter}</TableCell>
                    <TableCell>{value.InsideDiameter}</TableCell>
                  </TableRow>
                ))
              : filteredItems &&
                filteredItems.map((value, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ maxWidth: "2px", fontSize: "20px" }}>
                      <Checkbox
                        checked={checkedItems[index] || false}
                        onChange={() => {
                          handleCheckboxChange(
                            index,
                            value.SizeAS568 || value.SizeJIS,
                            value.CrossSectionalDiameter,
                            value.InsideDiameter
                          );

                          setUrl(
                            url +
                              `&SizeAS568=${value.SizeAS568}&CrossSectionalDiameter=${value.CrossSectionalDiameter}&InsideDiameter=${value.InsideDiameter}`
                          );
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ maxWidth: "2px" }}>
                      {value.SizeAS568.split(" ")[0].replace(/-/g, "") ||
                        value.SizeJIS.split(" ")[0].replace(/-/g, "")}
                    </TableCell>
                    <TableCell>{value.CrossSectionalDiameterCS}</TableCell>
                    <TableCell>{value.InsideDiameterID}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
