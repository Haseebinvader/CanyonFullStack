import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    //Table
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "1px solid #fff",
          borderRadius: "6px",
          overflow:"none",
          whiteSpace:'nowrap'
        },
        menuList: {
          borderRadius: "10px",
          width: "160px",
          backgroundColor: "#000",
        },
        columnHeaders: {
          backgroundColor: "#182E49",
          color: "#FFFFFF",
          fontSize: 12,
        },
        columnSeparator: {
          height: "80px",
        },
        virtualScroller: {
          "&::-webkit-scrollbar": {
            width: "0.5rem",
            height: "0.5rem",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#182E49",
            borderRadius: "4px",
          },
        },
        menu: {
          maxWidth: "160px",
        },
        customFontSize: {
          fontSize: 10, // Adjust the font size as needed
        },
      },
    },
  },
});

export default Theme;
