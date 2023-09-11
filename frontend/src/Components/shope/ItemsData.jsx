import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import "./css/ItemsData.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../Data/API";

export default function DataTable() {
  const navigate = useNavigate();

  const { row, isChanged, page_size, isFlipped } = useContext(UserContext);


  // const [url, setUrl] = useState(
  //   `api/products/?id=${id}&ItemNo=${ItemNo}&qnty=${qnty}&price=${price}&Description=${Description}&Description2=${Description2}&SearchDescription=${SearchDescription}&Blocked=${Blocked}&CompoundNumber=${CompoundNumber}&Material=${Material}&Durometer=${Durometer}&DurometerScale=${DurometerScale}&DurometerRange=${DurometerRange}&Color=${color}&LowTemperature=${LowTemperature}&FDACompliant=${FDACompliant}&MaterialSubtype=${MaterialSubtype}&Brand=${brand}&MaterialNotes=${MaterialNotes}&CrossSectionalGeometry=${CrossSectionalGeometry}&CrossSectionalDiameter=${CrossSectionalDiameter}&InsideDiameter=${InsideDiameter}&SizeAS568=${SizeAS568}&SizeMetric=${SizeMetric}&SizeJIS=${SizeJIS}&SizeStandard=${SizeStandard}&Online=${Online}&limit=${page_size}`
  // );
  const [count, setcount] = useState(0);
  console.log(isFlipped, "Changed");

  const columns = [
    {
      id: "ItemNo",
      field: "SearchDescription",
      headerName: "Part Number",
      cellClassName: "borderRightCell bold-text",
      flex: false,
      minWidth: 115,
      resizable: true, // Allow resizing for this column
      
    },
    {
      id: "ItemNo",
      field: "price",
      headerName: "Starting Price",
      maxWidth: 90,
      cellClassName: "borderRightCell bold-text",
      renderCell: (params) => {
        const price = params.value;
        let cellText = "";

        if (price > 0) {
          cellText = `$${price}`;
        } else if (price < 1) {
          cellText = "Check pricing";
        }

        return (
          <div
            style={{
              whiteSpace: "normal",
              wordWrap: "break-word",
              lineHeight: "1",
            }}
          >
            {cellText}
          </div>
        );
      },
    },
    {
      id: "ItemNo",
      field: "qnty",
      headerName: "Stock",
      cellClassName: "borderRightCell stock ",
      width: 70,
      renderCell: (params) => {
        const qnty = params.value;

        let cellText = "In";

        // Set the text based on the quantity
        if (qnty > 0) {
          cellText = "In stock";
          params.row.inStock = true;
        } else if (qnty < 1) {
          cellText = "Check stock";
          params.row.inStock = false;
        }

        return (
          <div
            style={{
              whiteSpace: "normal",
              wordWrap: "break-word",
              lineHeight: "1",
              textAlign: "center",
            }}
            className={`stock-cell  ${
              params.row.inStock ? "in-stock" : "check-stock"
            }`}
          >
            {cellText}
          </div>
        );
      },
    },
    {
      id: "ItemNo",
      field: "Material",
      headerName: "Material",
      minWidth: 175,
      headerClassName: "headerleftColumn",
      cellClassName: "borderRightCell",
      renderCell: (params) => {
        const material = params.value;
        return (
          <div
            style={{
              whiteSpace: "normal",
              wordWrap: "break-word",
              lineHeight: "1",
            }}
          >
            {material}
          </div>
        );
      },
    },
    {
      id: "ItemNo",
      field: "Color",
      headerName: "Color",
      resizable: true, // Allow resizing for this column
      cellClassName: "borderRightCell",
      maxWidth: 55,
    },
    {
      id: "ItemNo",
      field: "Durometer",
      headerName: "Hardness",
      resizable: true, // Allow resizing for this column

      flex: true,
      cellClassName: "borderRightCell centerText",
    },
    {
      id: "ItemNo",
      field: "DurometerScale",
      headerName: "Scale",
      width: 70,
      overflow: "hidden",
      whiteSpace: "wrap",
      resizable: true, // Allow resizing for this column
      headerClassName: "headerRightColumn",
      cellClassName: "borderRightCell",
    },
    {
      id: "ItemNo",
      field: "CrossSectionalGeometry",
      headerName: "Type",
      flex: true,
      resizable: true, // Allow resizing for this column
      cellClassName: "borderRightCell",
    },
    {
      id: "ItemNo",
      field: "SizeStandard",
      headerName: "Size",
      width: 85,
      resizable: true, // Allow resizing for this column
      cellClassName: "borderRightCell",
      valueGetter: (params) => {
        const { row } = params;
        // Check if row.SizeStandard is not null before splitting
        if (row.SizeStandard) {
          return row.SizeStandard.split(" ")[0].concat(row.SizeAS568 ? row.SizeAS568 : row.SizeJIS);
        } else {
          return row.SizeJIS; // Or handle the case where SizeStandard is null as needed
        }
      },
    },
    {
      id: "ItemNo",
      field: "CrossSectionalDiameter",
      headerName: isChanged ? "CS (in)" : "CS (mm)",
      flex: true,
      cellClassName: "borderRightCell",
      renderCell: (params) => {
        const value = params.value;
        const displayedValue = isChanged
          ? `${(value / 25.4).toFixed(3)} `
          : `${value}`;
        return <span>{displayedValue}</span>;
      },
    },
    {
      id: "ItemNo",
      field: "InsideDiameter",
      headerName: isChanged ? "ID (in)" : "ID (mm)",
      flex: true,
      headerClassName: "headerRightColumn",
      cellClassName: "headerRightCell",
      renderCell: (params) => {
        const value = params.value;
        const displayedValue = isChanged
          ? `${(value / 25.4).toFixed(3)} `
          : `${value}`;
        return <span style={{fontSize: '11px'}}>{displayedValue}</span>;
      },
    },
    {
      id: "ItemNo",
      field: "Description",
      resizable: true, // Allow resizing for this column
      headerName: "Material Description",
      cellClassName: "borderRightCell",
      minWidth: 150,
      renderCell: (params) => {
        const material = params.value;
        return (
          <div
            style={{
              whiteSpace: "normal",
              wordWrap: "break-word",
              lineHeight: "1",
            }}
          >
            {material}
          </div>
        );
      },
    },
    {
      id: "ItemNo",
      field: "LowTemperature",
      headerName: isFlipped ? "Low Tmp(°F)" : "Low Tmp(°C)" ,
      width: 85,
      cellClassName: "borderRightCell",
      renderCell: (params) => {
        const value = params.value;
        const displayedValue = isFlipped
          ? `${(value * 1.8 + 32).toFixed(0)}`
          : `${value}`;
        return <span>{displayedValue}</span>;
      },
    },
    {
      id: "ItemNo",
      field: "HighTemperature",
      headerName:  isFlipped ? "High Tmp(°F)" : "High Tmp(°C)",
      width: 90,
      cellClassName: "borderRightCell",
      renderCell: (params) => {
        const value = params.value;
        const displayedValue = isFlipped
          ? `${(value * 1.8 + 32).toFixed(0)}`
          : `${value}`;
        return <span>{displayedValue}</span>;
      },
    },
  ];

  const handleClick = (data) => {
    navigate(`/product/${data}`);
  };
  const getRowHeight = () => 35;
  return (
    <div style={{ height: "56.5rem" }}>
      <DataGrid
        rows={row}
        columns={columns}
        onCellClick={(params) => handleClick(params.row.ItemNo)}
        onClick={() => handleClick(row.ItemNo)}
        rowCount={page_size}
        hideFooter={true}
        disableColumnFilter={true}
        paginationMode={"server"}
        pageSizeOptions={[25, 50, 100]}
        getRowHeight={getRowHeight}
      />
    </div>
  );
}
