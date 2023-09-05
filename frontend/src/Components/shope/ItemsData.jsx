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

  const { color, setColor, row, setrow,  isChanged, isFlipped } = useContext(UserContext);


  const [id, setId] = useState("");
  const [ItemNo, setItemNo] = useState("");
  const [qnty, setQnty] = useState("");
  const [price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [Description2, setDescription2] = useState("");
  const [SearchDescription, setSearchDescription] = useState("");
  const [Blocked, setBlocked] = useState("");
  const [CompoundNumber, setCompoundNumber] = useState("");
  const [Material, setMaterial] = useState("");
  const [Durometer, setDurometer] = useState("");
  const [DurometerScale, setDurometerScale] = useState("");
  const [DurometerRange, setDurometerRange] = useState("");
  const [LowTemperature, setLowTemperature] = useState("");
  const [FDACompliant, setFDACompliant] = useState("");
  const [MaterialSubtype, setMaterialSubtype] = useState("");
  const [brand, setBrand] = useState("");
  const [MaterialNotes, setMaterialNotes] = useState("");
  const [CrossSectionalGeometry, setCrossSectionalGeometry] = useState("");
  const [CrossSectionalDiameter, setCrossSectionalDiameter] = useState("");
  const [InsideDiameter, setInsideDiameter] = useState("");
  const [SizeAS568, setSizeAS568] = useState("");
  const [SizeMetric, setSizeMetric] = useState("");
  const [SizeJIS, setSizeJIS] = useState("");
  const [SizeStandard, setSizeStandard] = useState("");
  const [Online, setOnline] = useState("");
  const [page_size, setPageSize] = useState(25); // Initial page size

  const [next, setnext] = useState("");
  const [prev, setprev] = useState("");

  const [url, setUrl] = useState(
    `api/products/?id=${id}&ItemNo=${ItemNo}&qnty=${qnty}&price=${price}&Description=${Description}&Description2=${Description2}&SearchDescription=${SearchDescription}&Blocked=${Blocked}&CompoundNumber=${CompoundNumber}&Material=${Material}&Durometer=${Durometer}&DurometerScale=${DurometerScale}&DurometerRange=${DurometerRange}&Color=${color}&LowTemperature=${LowTemperature}&FDACompliant=${FDACompliant}&MaterialSubtype=${MaterialSubtype}&Brand=${brand}&MaterialNotes=${MaterialNotes}&CrossSectionalGeometry=${CrossSectionalGeometry}&CrossSectionalDiameter=${CrossSectionalDiameter}&InsideDiameter=${InsideDiameter}&SizeAS568=${SizeAS568}&SizeMetric=${SizeMetric}&SizeJIS=${SizeJIS}&SizeStandard=${SizeStandard}&Online=${Online}&limit=${page_size}`
  );
  const [count, setcount] = useState(0);
  const getData = async (uri) => {
    // const a = await products(url);
    // setDa(a);
    // console.log(a.data);
    const b = await products(uri);
    console.log(b.data);
    setcount(b.data.count);
    setrow(b.data.results);
    setnext(b.next);
    setprev(b.previous);
  };

  useEffect(() => {
    setUrl(url);
    getData(url);
  }, [url]);


  const [columns, setColumns] = useState([
    {
      id: "ItemNo",
      field: "SearchDescription",
      headerName: "Part Number",
      cellClassName: "borderRightCell",
      flex: false,
      minWidth: 120,
      resizable: true, // Allow resizing for this column
    },
    {
      id: "ItemNo",
      field: "price",
      headerName: "Starting Price",
      maxWidth: 100,
      cellClassName: "borderRightCell",
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
      cellClassName: "borderRightCell stock",
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
              textAlign:'center'
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
      maxWidth:55
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
      width: 80,
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
      width: 90,
      resizable: true, // Allow resizing for this column
      cellClassName: "borderRightCell",
      valueGetter: (params) => {
        const { row } = params;
        // Check if row.SizeStandard is not null before splitting
        if (row.SizeStandard) {
          return row.SizeStandard.split(" ")[0].concat(row.SizeAS568);
        } else {
          return ""; // Or handle the case where SizeStandard is null as needed
        }
      },
    },
    {
      id: "ItemNo",
      field: "CrossSectionalDiameter",
      headerName: `${isChanged ? "CS (in)" : "CS (mm)"}`,
      flex: true,
      cellClassName: "borderRightCell",
      // valueGetter: (params) => {
      //   const { row } = params;
      //   if (isChanged) {
      //     return (row.CrossSectionalDiameter / 25.4).toFixed(3);
      //   } else {
      //     return row.CrossSectionalDiameter;
      //   }
      // },
    },
    
    {
      id: "ItemNo",
      field: "InsideDiameter",
      headerName: isChanged ? "ID (in)" : "ID (mm)",
      flex: true,
      resizable: true, // Allow resizing for this column
      headerClassName: "headerRightColumn",
      cellClassName: "headerRightCell",
    },
    {
      id: "ItemNo",
      field: "Description",
      resizable: true, // Allow resizing for this column
      headerName: "Material Description",
      cellClassName: "borderRightCell",
      minWidth: 130,
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
      resizable: true, // Allow resizing for this column
      headerName: isFlipped ? "Low Tmp(°F)" : "Low Tmp(°C)",
      width: 100,
      cellClassName: "borderRightCell",
    },
    {
      id: "ItemNo",
      field: "HighTemperature",
      resizable: true, // Allow resizing for this column
      headerName: isFlipped ? "High Tmp(°F)" : "High Tmp(°C)",
      width: 90,
      cellClassName: "borderRightCell",
    },
  ]);
  const handleColumnResize = (params) => {
    const updatedColumns = [...columns];
    const updatedColumn = updatedColumns.find(
      (col) => col.field === params.field
    );

    if (updatedColumn) {
      updatedColumn.width = params.width;
      setColumns(updatedColumns); // Assuming you have a state variable for columns
    }
  };
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
      // autoPageSize={true}
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
