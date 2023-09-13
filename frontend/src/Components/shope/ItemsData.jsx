import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import "./css/ItemsData.css";
import { useNavigate } from "react-router-dom";

export default function DataTable() {
  const navigate = useNavigate();

  const { row, isChanged, page_size, isFlipped } = useContext(UserContext);

  // const [url, setUrl] = useState(
  //   `api/products/?id=${id}&ItemNo=${ItemNo}&qnty=${qnty}&price=${price}&Description=${Description}&Description2=${Description2}&SearchDescription=${SearchDescription}&Blocked=${Blocked}&CompoundNumber=${CompoundNumber}&Material=${Material}&Durometer=${Durometer}&DurometerScale=${DurometerScale}&DurometerRange=${DurometerRange}&Color=${color}&LowTemperature=${LowTemperature}&FDACompliant=${FDACompliant}&MaterialSubtype=${MaterialSubtype}&Brand=${brand}&MaterialNotes=${MaterialNotes}&CrossSectionalGeometry=${CrossSectionalGeometry}&CrossSectionalDiameter=${CrossSectionalDiameter}&InsideDiameter=${InsideDiameter}&SizeAS568=${SizeAS568}&SizeMetric=${SizeMetric}&SizeJIS=${SizeJIS}&SizeStandard=${SizeStandard}&Online=${Online}&limit=${page_size}`
  // );

  const columns = [
    {
      id: "ItemNo",
      field: "SearchDescription",
      headerName: "Part Number",
      cellClassName: "borderRightCell bold-text",
      flex: false,
      minWidth: 120,
      resizable: true,

      renderCell: (params) => {
        const part = params.value;
        return (
          <div
            style={{
              whiteSpace: "normal",
              wordWrap: "break-word",
              lineHeight: "1",
              textAlign: "center",
            }}
          >
            {part}
          </div>
        );
      },
    },
    {
      id: "ItemNo",
      field: "price",
      headerName: (
        <div style={{ lineHeight: 1.2, textAlign: "center" }}>
          Starting <br /> Price
        </div>
      ),
      maxWidth: 70,
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
              textAlign: "center", // Add this line to center align the text
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
      flex: true,
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
              textAlign: "center",
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
      resizable: true,
      cellClassName: "borderRightCell",
      maxWidth: 65,
      textAlign: "center",
      renderCell: (params) => {
        const Color = params.value;
        return (
          <div
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            {Color}
          </div>
        );
      },
    },
    {
      id: "ItemNo",
      field: "Durometer",
      headerName: "Hardness",
      resizable: true,
      width: 70,
      flex: false,
      cellClassName: "borderRightCell centerText",
      textAlign: "center",
      renderCell: (params) => {
        const Hardness = params.value;
        return (
          <div
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            {Hardness}
          </div>
        );
      },
    },
    {
      id: "ItemNo",
      field: "DurometerScale",
      headerName: "Scale",
      width: 70,
      overflow: "hidden",
      whiteSpace: "wrap",
      resizable: true,
      headerClassName: "headerRightColumn",
      cellClassName: "borderRightCell",
    },
    {
      id: "ItemNo",
      field: "CrossSectionalGeometry",
      headerName: "Type",
      width: 62,
      flex: false,
      resizable: true,
      cellClassName: "borderRightCell",
    },
    {
      id: "ItemNo",
      field: "SizeStandard",
      headerName: "Size",
      width: 95,
      resizable: true,
      cellClassName: "borderRightCell",
      valueGetter: (params) => {
        const { row } = params;
        // Check if row.SizeStandard is not null before splitting
        if (row.SizeStandard) {
          return row.SizeStandard.split(" ")[0].concat(
            row.SizeAS568 ? row.SizeAS568 : row.SizeJIS
          );
        } else {
          return row.SizeJIS; // Or handle the case where SizeStandard is null as needed
        }
      },
    },
    {
      id: "ItemNo",
      field: "CrossSectionalDiameter",
      headerName: isChanged ? "CS (in)" : "CS (mm)",
      flex: false,
      width: 60,
      cellClassName: "borderRightCell",
      renderCell: (params) => {
        const value = params.value;
        const displayedValue = isChanged
          ? `${(value / 25.4).toFixed(3)} `
          : `${value}`;
        return (
          <span style={{ width: "100%", textAlign: "center" }}>
            {displayedValue}
          </span>
        );
      },
    },
    {
      id: "ItemNo",
      field: "InsideDiameter",
      headerName: isChanged ? "ID (in)" : "ID (mm)",
      flex: false,
      width: 60,
      headerClassName: "headerRightColumn",
      cellClassName: "headerRightCell",
      renderCell: (params) => {
        const value = params.value;
        const displayedValue = isChanged
          ? `${(value / 25.4).toFixed(3)} `
          : `${value}`;
        return (
          <span
            style={{ alignItems: "center", width: "100%", fontSize: "12px" }}
          >
            {displayedValue}
          </span>
        );
      },
    },
    {
      id: "ItemNo",
      field: "Description",
      resizable: true,
      headerName: "Material Description",
      cellClassName: "borderRightCell",
      flex: true,
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
      field: "HighTemperature",
      headerName: isFlipped ? (
        <div style={{ lineHeight: "1.2", textAlign: "center" }}>
          High Tmp
          <br /> (°F)
        </div>
      ) : (
        <div style={{ lineHeight: "1.2", textAlign: "center" }}>
          High Tmp
          <br /> (°C)
        </div>
      ),
      width: 70,
      cellClassName: "borderRightCell",
      renderCell: (params) => {
        const value = params.value;
        const displayedValue = isFlipped
          ? `${(value * 1.8 + 32).toFixed(0)}`
          : `${value}`;
        return (
          <span style={{ textAlign: "center", width: "100%" }}>
            {displayedValue}
          </span>
        );
      },
    },

    {
      id: "ItemNo",
      field: "LowTemperature",
      headerName: isFlipped ? (
        <div style={{ lineHeight: "1.2", textAlign: "center" }}>
          Low Tmp
          <br /> (°F)
        </div>
      ) : (
        <div style={{ lineHeight: "1.2", textAlign: "center" }}>
          Low Tmp
          <br /> (°C)
        </div>
      ),
      width: 70,
      cellClassName: "borderRightCell",
      renderCell: (params) => {
        const value = params.value;
        const displayedValue = isFlipped
          ? `${(value * 1.8 + 32).toFixed(0)}`
          : `${value}`;
        return (
          <span style={{ textAlign: "center", width: "100%" }}>
            {displayedValue}
          </span>
        );
      },
    },
  ];

  // const handleClick = (data) => {
  //   // const url = `/product/${data}`;
  //   navigate(`/product/${data}`); // Use navigate to navigate
  // };
  const getRowHeight = () => 35;
  return (
    <div style={{ height: "56.5rem" }}>
      <DataGrid
        rows={row}
        columns={columns}
        onCellClick={(params) => navigate(`/product/${params.row.ItemNo}`)}
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
