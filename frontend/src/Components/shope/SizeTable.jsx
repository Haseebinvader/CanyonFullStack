import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserContext } from "../../UserContext";
import Checkbox from "@mui/material/Checkbox";

export default function BasicTable() {
  const {
    selectedCountry,
    size,
    setsize1,
    setCs,
    setid1,
    cs,
    id,
    row,
    setUrl,
    url,
  } = useContext(UserContext);

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (index, size1, css1, idd1) => {
    setsize1(size1);
    setCs(css1);
    setid1(idd1);

    // Check if the checkbox is checked
    if (!checkedItems[index]) {
      // Checkbox is being checked
      setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [index]: true,
      }));

      // Add the selected item to the URL
      setUrl(
        url +
          `&SizeAS568=${size1}&CrossSectionalDiameter=${css1}&InsideDiameter=${idd1}`
      );
    } else {
      // Checkbox is being unchecked
      setCheckedItems((prevCheckedItems) => {
        delete prevCheckedItems[index];
        return { ...prevCheckedItems };
      });

      // Remove the selected item from the URL
      let newUrl = url.replace(/(\?|&)SizeAS568=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)CrossSectionalDiameter=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)InsideDiameter=[^&]*/g, "");
      setUrl(newUrl);
    }
  };

  const filteredItems = row.filter((data) => {
    const sizeStandard = selectedCountry === "Japan" ? "js" : "as";
    return data.SizeStandard?.toLowerCase()?.includes(sizeStandard) ?? false;
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
            {filteredItems.length > 0 &&
              filteredItems.map((value, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ maxWidth: "2px", fontSize: "20px" }}>
                    <Checkbox
                      checked={checkedItems[index] || false}
                      onChange={(e) => {
                        handleCheckboxChange(
                          index,
                          value.SizeAS568,
                          value.CrossSectionalDiameter,
                          value.InsideDiameter
                        );

                        if (e.target.checked) {
                          setUrl(url + `&Color=${value}`);
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
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
