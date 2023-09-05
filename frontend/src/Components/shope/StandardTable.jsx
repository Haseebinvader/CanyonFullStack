import React, { useContext, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import Checkbox from "@mui/material/Checkbox"; // Step 1
import { UserContext } from "../../UserContext";

export default function StandardTable() {
  const { item, selectedCountry, size, setcs1, setid1, cs, id , cs1, id1} =
    useContext(UserContext);
  const [checkedItems, setCheckedItems] = useState({}); // Step 3
  const handleCheckboxChange = (id, size1, cs1, id1) => {
    if (!checkedItems[id]) {
      // Checkbox is being checked
      setcs1(cs1);
      setid1(id1);
    } else {
      // Checkbox is being unchecked
      setcs1("");
      setid1("");
    }

    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id], // Toggle the checkbox state
    }));
  };

  const filteredItems = item.filter((data) => {
    if (selectedCountry === "USA") {
      return data.SizeStandard.toLowerCase().includes("as");
    }
    if (selectedCountry === "Japan") {
      return data.SizeStandard.toLowerCase().includes("ja");
    } else {
      return data.SizeStandard.toLowerCase().includes("as");
    }
  });
  const filteredSize = filteredItems.filter((data) => {
    const sizeCondition = data.SizeAS568.split(" ")[0].replace(/-/g, "").includes(size);
    const csCondition = data.CrossSectionalDiameterCS.includes(cs);
    const idCondition = data.InsideDiameterID.includes(id);

    return sizeCondition && csCondition && idCondition;
});

  return (
    <Paper
      style={{
        height: 200,
        width: "235px",
        maxHeight: "800px",
        overflowY: "scroll",
        overflowX: "hidden",
        marginTop: "0.6rem",
        marginLeft: "-1rem",
      }}
    >
      <Table style={{width: '235px'}}>
        <TableBody>
          {filteredSize
            ? filteredSize.slice(0, 10).map((value, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ maxWidth: "6px", fontSize: "20px" }}>
                    <Checkbox
                      checked={checkedItems[index] || false}
                      onChange={() =>
                        handleCheckboxChange(
                          index,
                          value.SizeAS568,
                          value.CrossSectionalDiameterCS,
                          value.InsideDiameterID
                        )
                      }
                    />
                  </TableCell>
                  <TableCell x={{ maxWidth: "5px" }}>
                    {value.SizeAS568.split(" ")[0].replace(/-/g, "")}
                  </TableCell>
                  <TableCell>{value.CrossSectionalDiameterCS}</TableCell>
                  <TableCell>{value.InsideDiameterID}</TableCell>
                </TableRow>
              ))
            : filteredItems &&
              filteredItems.map((value, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ maxWidth: "6px", fontSize: "20px" }}>
                    <Checkbox
                      checked={checkedItems[index] || false}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </TableCell>
                  <TableCell x={{ maxWidth: "5px" }}>
                    {value.SizeAS568.split(" ")[0].replace(/-/g, "")}
                  </TableCell>
                  <TableCell>{value.CrossSectionalDiameterCS}</TableCell>
                  <TableCell>{value.InsideDiameterID}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
