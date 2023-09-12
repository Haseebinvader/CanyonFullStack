// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { UserContext } from "../../UserContext";
// import { useContext } from "react";
// import { useEffect } from "react";
// import "./css/ItemsData.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { products } from "../../Data/API";

// const MyTable = () => {
//     const navigate = useNavigate();
//     const { color, setColor, row, setrow,  isChanged, isFlipped } = useContext(UserContext);
//     const [id, setId] = useState("");
//     const [ItemNo, setItemNo] = useState("");
//     const [qnty, setQnty] = useState("");
//     const [price, setPrice] = useState("");
//     const [Description, setDescription] = useState("");
//     const [Description2, setDescription2] = useState("");
//     const [SearchDescription, setSearchDescription] = useState("");
//     const [Blocked, setBlocked] = useState("");
//     const [CompoundNumber, setCompoundNumber] = useState("");
//     const [Material, setMaterial] = useState("");
//     const [Durometer, setDurometer] = useState("");
//     const [DurometerScale, setDurometerScale] = useState("");
//     const [DurometerRange, setDurometerRange] = useState("");
//     const [LowTemperature, setLowTemperature] = useState("");
//     const [FDACompliant, setFDACompliant] = useState("");
//     const [MaterialSubtype, setMaterialSubtype] = useState("");
//     const [brand, setBrand] = useState("");
//     const [MaterialNotes, setMaterialNotes] = useState("");
//     const [CrossSectionalGeometry, setCrossSectionalGeometry] = useState("");
//     const [CrossSectionalDiameter, setCrossSectionalDiameter] = useState("");
//     const [InsideDiameter, setInsideDiameter] = useState("");
//     const [SizeAS568, setSizeAS568] = useState("");
//     const [SizeMetric, setSizeMetric] = useState("");
//     const [SizeJIS, setSizeJIS] = useState("");
//     const [SizeStandard, setSizeStandard] = useState("");
//     const [Online, setOnline] = useState("");
//     const [page_size, setPageSize] = useState(25); // Initial page size

//     const [next, setnext] = useState("");
//     const [prev, setprev] = useState("");

//     const [url, setUrl] = useState(
//       `api/products/?id=${id}&ItemNo=${ItemNo}&qnty=${qnty}&price=${price}&Description=${Description}&Description2=${Description2}&SearchDescription=${SearchDescription}&Blocked=${Blocked}&CompoundNumber=${CompoundNumber}&Material=${Material}&Durometer=${Durometer}&DurometerScale=${DurometerScale}&DurometerRange=${DurometerRange}&Color=${color}&LowTemperature=${LowTemperature}&FDACompliant=${FDACompliant}&MaterialSubtype=${MaterialSubtype}&Brand=${brand}&MaterialNotes=${MaterialNotes}&CrossSectionalGeometry=${CrossSectionalGeometry}&CrossSectionalDiameter=${CrossSectionalDiameter}&InsideDiameter=${InsideDiameter}&SizeAS568=${SizeAS568}&SizeMetric=${SizeMetric}&SizeJIS=${SizeJIS}&SizeStandard=${SizeStandard}&Online=${Online}&limit=${page_size}`
//     );
//     const [count, setcount] = useState(0);
//     const getData = async (uri) => {
//       // const a = await products(url);
//       // setDa(a);
//       // console.log(a.data);
//       const b = await products(uri);
//       console.log(b.data);
//       setcount(b.data.count);
//       setrow(b.data.results);
//       setnext(b.next);
//       setprev(b.previous);
//     };

//     useEffect(() => {
//       setUrl(url);
//       getData(url);
//     }, [url]);
//   const [data, setData] = useState([
//     { id: 1, col1: 'Data 1', col2: 'Data 6', col3: 'Data 11', col4: 'Data 16', col5: 'Data 21' },
//     { id: 2, col1: 'Data 2', col2: 'Data 7', col3: 'Data 12', col4: 'Data 17', col5: 'Data 22' },
//     // Add more data rows as needed
//   ]);

//   const [sortDirection, setSortDirection] = useState('▼');

//   const handleSortChange = () => {
//     const newDirection = sortDirection === '▼' ? '▲' : '▼';
//     setSortDirection(newDirection);

//     // Sort the data array based on the selected direction
//     const sortedData = [...data].sort((a, b) => {
//       if (newDirection === '▼') {
//         return a.col1.localeCompare(b.col1);
//       } else {
//         return b.col1.localeCompare(a.col1);
//       }
//     });

//     setData(sortedData);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>

//             <th>Column 1 <button onClick={handleSortChange}> {sortDirection}</button>  </th>
//             <th>Column 2 <button onClick={handleSortChange}> {sortDirection}</button></th>
//             <th>Column 3 <button onClick={handleSortChange}> {sortDirection}</button></th>
//             <th>Column 4 <button onClick={handleSortChange}> {sortDirection}</button></th>
//             <th>Column 5 <button onClick={handleSortChange}>{sortDirection}</button></th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row) => (
//             <tr key={row.id}>
//               <td>{row.col1}</td>
//               <td>{row.col2}</td>
//               <td>{row.col3}</td>
//               <td>{row.col4}</td>
//               <td>{row.col5}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyTable;
