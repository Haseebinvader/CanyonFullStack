// import { useEffect, useState } from "react";
// import React from "react";
// import Paper from "@mui/material/Paper";
// import { useNavigate } from "react-router-dom";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { UserContext } from "../../UserContext";
// import { useContext } from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// export default function ItemDetails() {
//   const navigate = useNavigate();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(25);
//   const [sortingColumn, setSortingColumn] = useState(null);
//   const [ascending, setAscending] = useState(true);
//   const sortTable = (column) => {
//     if (sortingColumn === column) {
//       setAscending(!ascending);
//     } else {
//       setSortingColumn(column);
//       setAscending(true);
//     }
//   };

//   const {
//     id1,
//     cs1,
//     isChanged,
//     isFlipped,
//     search,
//     setFilteredCount,
//     item,
//     lowtemp,
//     hightemp,
//     size,
//     cs,
//     id,
//     selectedbrand,
//     // selectedSubmaterial,
//     selectedmaterial,
//     selectedhardness,
//     selectedcolor,
//     price,
//     setprice,
//     // productWithOnlineStatus,
//   } = useContext(UserContext);
//   const filteredProducts =
//     item?.filter((product) => {
//       const lowerCaseSearch = search.toLowerCase();

//       const isWithinTemperatureRange =
//         product.LowTemperatureC >= -70 &&
//         product.LowTemperatureC <= lowtemp &&
//         product.HighTemperatureC >= hightemp &&
//         product.HighTemperatureC <= 360;

//       const matchesSearch =
//         !search ||
//         (product.ItemNo &&
//           product.ItemNo.toLowerCase()
//             .replace(/[^a-zA-Z0-9]/g, "")
//             .includes(lowerCaseSearch.replace(/[^a-zA-Z0-9]/g, ""))) ||
//         (product.Description &&
//           product.Description.toLowerCase().includes(lowerCaseSearch)) ||
//         (product.DurometerScale &&
//           product.DurometerScale.toLowerCase().includes(lowerCaseSearch)) ||
//         (product.Description2 &&
//           product.Description2.toLowerCase().includes(lowerCaseSearch)) ||
//         (product.Color &&
//           product.Color.toLowerCase().includes(lowerCaseSearch)) ||
//         (product.DurometerScale &&
//           product.DurometerScale.toLowerCase().includes(lowerCaseSearch)) ||
//         (product.Material &&
//           product.Material.toLowerCase()
//             .replace(/[^a-zA-Z0-9]/g, "")
//             .includes(lowerCaseSearch.replace(/[^a-zA-Z0-9]/g, ""))) ||
//         (product.SearchDescription &&
//           product.SearchDescription.replace(/-/g, "")
//             .toLowerCase()
//             .includes(lowerCaseSearch.replace(/-/g, ""))) ||
//         (product.CompoundNumber &&
//           product.CompoundNumber.toLowerCase().includes(lowerCaseSearch));

//       const matchesColor =
//         !selectedcolor ||
//         (product.Color && product.Color.includes(selectedcolor));
//       const matchesBrand =
//         !selectedbrand ||
//         (product.Brand && product.Brand.includes(selectedbrand));
//       const matchesHardness =
//         !selectedhardness ||
//         (product.DurometerRange &&
//           product.DurometerRange.includes(selectedhardness));
//       const matchesMaterial =
//         !selectedmaterial ||
//         (product.Material && product.Material.includes(selectedmaterial));
//       // const matchessubMaterial = !selectedSubmaterial || (product.MaterialNotes && product.MaterialNotes.includes(selectedSubmaterial));
//       const matchesCS =
//       !cs1 ||
//       (product.CrossSectionalDiameterCS &&
//         product.CrossSectionalDiameterCS.toString().includes(cs1.toString()));
//     const matchesID =
//       !id1 ||
//       (product.InsideDiameterID &&
//         product.InsideDiameterID.toString().includes(id1.toString()));

//       // const matchesSize =
//       //   !size ||
//       //   (product.SizeStandard &&
//       //     product.SizeStandard.toLowerCase().includes(size.toLowerCase()));

//       return (
//         isWithinTemperatureRange &&
//         matchesSearch &&
//         matchesColor &&
//         matchesBrand &&
//         matchesHardness &&
//         matchesMaterial &&
//         matchesCS &&
//         matchesID
//         // matchesSize
//       );
//     }) || [];
//     const sortedProducts = [...filteredProducts].sort((a, b) => {
//       if (sortingColumn) {
//         const aValue = a[sortingColumn];
//         const bValue = b[sortingColumn];
//         if (aValue < bValue) return ascending ? -1 : 1;
//         if (aValue > bValue) return ascending ? 1 : -1;
//         return 0;
//       }
//       return 0;
//     });

//   useEffect(() => {
//     setFilteredCount(filteredProducts.length);
//   }, [filteredProducts]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(event.target.value);
//     setPage(0);
//   };

//   const paginationStyle = {
//     fontSize: "18px",
//   };

//   const dropdownStyle = {
//     fontSize: "14px",
//     fontWeight: "500",
//   };

//   const columns = [
//     { id: "name", label: "Part Number", minWidth: 77 },
//     { id: "code", label: "Starting Price", minWidth: 30 },
//     {
//       id: "population",
//       label: "Stock",
//       minWidth: 30,
//       align: "center",
//       format: (value) => value.toLocaleString("en-US"),
//     },
//     {
//       id: "size",
//       label: "Material",
//       minWidth: 150,
//       align: "center",
//       format: (value) => value.toLocaleString("en-US"),
//     },
//     {
//       id: "density",
//       label: "Color",
//       minWidth: 10,
//       align: "center",
//       format: (value) => value.toFixed(2),
//     },
//     {
//       id: "hardness",
//       label: "Hardness",
//       minWidth: 30,
//       format: (value) => value.toFixed(2),
//     },
//     {
//       id: "scale",
//       label: "Scale",
//       minWidth: 40,
//       align: "center",
//       format: (value) => value.toFixed(2),
//     },
//     {
//       id: "Type",
//       label: "Type",
//       minWidth: 25,
//       align: "center",
//       format: (value) => value.toFixed(2),
//     },
//     {
//       id: "Size",
//       label: "Size",
//       minWidth: 30,
//       align: "center",
//       format: (value) => value.toFixed(2),
//     },
//     {
//       id: "CS",
//       label: isChanged ? "CS (in)" : "CS (mm)",
//       minWidth: 30,
//       align: "center",
//       format: (value) => value.toFixed(2),
//     },
//     {
//       id: "ID",
//       label: isChanged ? "ID (in)" : "ID (mm)",
//       minWidth: 25,
//       align: "center",
//       format: (value) => value.toFixed(2),
//     },
//     {
//       id: "Material Description",
//       label: "Material Description",
//       minWidth: 90,
//       align: "center",
//       format: (value) => value.toFixed(2),
//     },
//     {
//       id: "LowTemp",
//       label: isFlipped ? "Low Tmp(°F)" : "Low Tmp(°C)",
//       minWidth: 30,
//       align: "center",
//       format: (value) => value.toFixed(2),
//     },
//     {
//       id: "High Temp(C)",
//       label: isFlipped ? "High Tmp(°F)" : "High Tmp(°C)",
//       minWidth: 30,
//       align: "center",
//       format: (value) => value.toFixed(2),
//     },
//   ];

//   const handleClick = (data) => {
//     navigate(`/product/${data}`);
//   };

//   return (
//     <Paper style={{ width: "77.8rem", height: "100%" }}>
//       {item ? (
//         <TableContainer
//           style={{ maxHeight: 855, minHeight: 855, borderRadius: "0.5rem" }}
//           xs={12}
//           md={8}
//           lg={4}
//         >
//           <Table stickyHeader aria-label="sticky table">
//             <TableHead>
//               <TableRow>
//                 {columns.map((column, index) => (
//                   <TableCell
//                     key={column.id}
//                     align={column.align}
//                     style={{
//                       minWidth: column.minWidth,
//                       backgroundColor: "#182E49",
//                       color: "#fff",
//                       fontSize: "13px",
//                       fontWeight: "600",
//                       lineHeight: "1",
//                       borderRight:
//                         index === 2 || index === 6 || index === 10
//                           ? "3px solid grey"
//                           : "none",
//                       borderWidth: "1.8px",
//                     }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {filteredProducts
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => (
//                   <TableRow
//                     hover
//                     role="checkbox"
//                     tabIndex={-1}
//                     key={index}
//                     onClick={() => handleClick(row.ItemNo)}
//                     sx={{
//                       p: 0,
//                       maxHeight: "18px",
//                       backgroundColor: index % 2 === 0 ? "white" : "#E5E5E5", // Apply alternating row colors
//                       lineHeight: "1",
//                     }}
//                   >
//                     <TableCell
//                       style={{
//                         padding: "5px",
//                         fontSize: "0.8rem",
//                         fontWeight: "600",
//                         textAlign: "center",
//                         borderRight: "1px solid #E5E5E5",
//                       }}
//                     >
//                       {row.SearchDescription}
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         maxHeight: "20px",
//                         fontSize: "0.8rem",
//                         textAlign: "center",
//                         fontWeight: "600",
//                         borderRight: "1px solid #E5E5E5",
//                       }}
//                     >
//                       {price.find(
//                         (i) => row.ItemNo === i.ItemNo && i.UnitPrice !== 0
//                       )
//                         ? `$${
//                             price.find(
//                               (i) =>
//                                 row.ItemNo === i.ItemNo && i.UnitPrice !== 0
//                             ).UnitPrice
//                           }`
//                         : "Check Pricing"}
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         textAlign: "center",
//                         padding: "5px",
//                         maxHeight: "20px",
//                         backgroundColor: row.qnty ? "#92D050" : "#E5E5E5",
//                         borderRight: "3px solid grey",
//                         fontWeight: "600",
//                         fontSize: "0.8rem",
//                       }}
//                     >
//                       {row.qnty ? "IN STOCK" : "CHECK STOCK"}
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         padding: "5px",
//                         maxHeight: "20px",
//                         fontSize: "0.8rem",
//                         fontWeight: "100",
//                         width: "200px",
//                         textAlign: "center",
//                         borderRight: "1px solid #E5E5E5",
//                       }}
//                     >
//                       {row.Material}
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         padding: "5px",
//                         maxHeight: "20px",
//                         fontSize: "0.8rem",
//                         fontWeight: "100",
//                         textAlign: "center",
//                         borderRight: "1px solid #E5E5E5",
//                       }}
//                     >
//                       {row.Color}
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         padding: "5px",
//                         maxHeight: "20px",
//                         fontSize: "0.8rem",
//                         fontWeight: "100",
//                         textAlign: "center",
//                         borderRight: "1px solid #E5E5E5",
//                       }}
//                     >
//                       {row.Durometer}
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         padding: "5px",
//                         maxHeight: "20px",
//                         fontSize: "0.8rem",
//                         fontWeight: "100",
//                         textAlign: "center",
//                         borderRight: "3px solid grey",
//                       }}
//                     >
//                       {row.DurometerScale}
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         padding: "5px",
//                         maxHeight: "20px",
//                         fontSize: "0.8rem",
//                         fontWeight: "100",
//                         textAlign: "center",
//                         borderRight: "1px solid #E5E5E5",
//                       }}
//                     >
//                       {row.CrossSectionalGeometry}
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         padding: "5px",
//                         maxHeight: "20px",
//                         fontSize: "0.8rem",
//                         fontWeight: "100",
//                         textAlign: "center",
//                         borderRight: "1px solid #E5E5E5",
//                       }}
//                     >
//                       {row.SizeStandard.split(" ")[0].concat(row.SizeAS568).concat(row.size)}
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         padding: "5px",
//                         maxHeight: "20px",
//                         fontSize: "0.8rem",
//                         fontWeight: "100",
//                         textAlign: "center",
//                         borderRight: "1px solid #E5E5E5",
//                       }}
//                     >
//                       {isChanged
//                         ? `${(row.CrossSectionalDiameterCS / 25.4).toFixed(3)} `
//                         : `${row.CrossSectionalDiameterCS}`}
//                     </TableCell>{" "}
//                     <TableCell
//                       style={{
//                         padding: "5px",
//                         maxHeight: "20px",
//                         fontSize: "0.8rem",
//                         fontWeight: "100",
//                         textAlign: "center",
//                         borderRight: "3px solid grey",
//                       }}
//                     >
//                       {isChanged
//                         ? `${(row.InsideDiameterID / 25.4).toFixed(3)} `
//                         : `${row.InsideDiameterID}`}
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         padding: "5px",
//                         maxHeight: "20px",
//                         fontSize: "0.8rem",
//                         fontWeight: "100",
//                         textAlign: "center",
//                         borderRight: "1px solid #E5E5E5",
//                       }}
//                     >
//                       {row.Description}
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         padding: "5px",
//                         maxHeight: "20px",
//                         fontSize: "0.8rem",
//                         fontWeight: "100",
//                         textAlign: "center",
//                         borderRight: "1px solid #E5E5E5",
//                       }}
//                     >
//                       {isFlipped
//                         ? `${(row.LowTemperatureC * 1.8 + 32).toFixed(0)}`
//                         : `${row.LowTemperatureC}`}
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         padding: "5px",
//                         maxHeight: "20px",
//                         fontSize: "0.8rem",
//                         fontWeight: "100",
//                         textAlign: "center",
//                         borderRight: "1px solid #E5E5E5",
//                       }}
//                     >
//                       {isFlipped
//                         ? `${(row.HighTemperatureC * 1.8 + 32).toFixed(0)} `
//                         : `${row.HighTemperatureC}`}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       ) : (
//         <Skeleton count={5} width={1300} height={100} />
//       )}

//       <TablePagination
//         style={paginationStyle}
//         SelectProps={{
//           style: dropdownStyle,
//         }}
//         rowsPerPageOptions={[25, 50, 100]}
//         component="div"
//         count={filteredProducts.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }
