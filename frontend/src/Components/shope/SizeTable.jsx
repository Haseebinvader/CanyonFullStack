import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserContext } from "../../UserContext";

export default function BasicTable() {
  const {
    item,
    selectedCountry,
    size,
    setcs1,
    setid1,
    cs,
    id,
    cs1,
    id1,
    row,
  } = useContext(UserContext);
  console.log(row.SizeAS568, "HEllo");

  const filteredItems = row.filter((data) => {
    const sizeStandard = selectedCountry === "Japan" ? "ja" : "as"; // Default to "as" for other countries
    return data.SizeStandard?.toLowerCase()?.includes(sizeStandard) ?? false;
  });
  console.log(filteredItems, "ROWS");

  const filteredSize = filteredItems.filter((data) => {
    const sizeCondition = data.SizeAS568?.split(" ")[0]?.replace(/-/g, "") === size;
    const csCondition = data.CrossSectionalDiameter?.includes(cs);
    const idCondition = data.InsideDiameter?.includes(id);
    return sizeCondition && csCondition && idCondition;
});


console.log(filteredSize, "SIZE");


  return (
    <TableContainer
      component={Paper}
      style={{
        height: 200,
        width: "215px",
        maxHeight: "800px",
        overflowY: "scroll",
        overflowX: "hidden",
        marginTop: "0.6rem",
        marginLeft: "-1rem",
      }}
    >
      <Table sx={{ minWidth: 180 }} aria-label="simple table">
        <TableBody>
          {filteredSize.map((row) => (
           <TableRow
           key={row.uniqueIdentifier}
           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
         >
           <TableCell component="th" scope="row">
             {row.SizeAS568?.split(" ")[0].replace(/-/g, "")}
           </TableCell>
           <TableCell>
             {row.CrossSectionalDiameter ? row.CrossSectionalDiameter : 'N/A'} 
           </TableCell>
           <TableCell>
             {row.InsideDiameter ? row.InsideDiameter : 'N/A'} 
           </TableCell>
         </TableRow>
         
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
