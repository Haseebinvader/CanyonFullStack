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
          border: "1px solid rgba(24, 46, 73, 1)",

          borderRadius: "6px",
        },

        menuList: {
          borderRadius: "10px",

          width: "200px",

          backgroundColor: "#000",
        },

        columnHeaders: {
          backgroundColor: "rgba(24, 46, 73, 1)",

          color: "#FFFFFF",

          fontSize: 12,
        },

        columnSeparator: {
          height: "120px",
          color: '#fff'
        },

        virtualScroller: {
          "&::-webkit-scrollbar": {
            width: "0.5rem",

            height: "0.5rem",
          },

          "&::-webkit-scrollbar-track": {
            background: "rgba(24, 46, 73, 1)",
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(24, 46, 73, 1)",

            borderRadius: "4px",
          },
        },

        menu: {
          maxWidth: "200px",
        },

        MenuItem: {
          maxWidth: "200px",

          padding: "3px 10px",
        },

        footerContainer: {
          minHeight: "20px",
        },

        footerPanel: {
          height: "20px",
        },

        panelFooter: {
          display: "none",
        },

        columnsPanelRow: {
          paddingLeft: "6px ",

          fontSize: "0.75rem",
        },

        paper: {
          minWidth: "90px",

          marginLeft: "10px",

          height: "300px",
        },
      },
    },

  

    //Card

    MuiCard: {
      styleOverrides: {
        root: {
          // boxShadow: "0px 0px 19px 9px rgba(231, 231, 231, 0.7)",

          borderRadius: "8px",

          backgroundColor: "#F9F8F7",
        },
      },
    },

    //Dialog

    MuiDialog: {
      styleOverrides: {
        paper: {
          width: "fit-contant", // Set the desired width here

          maxWidth: "none",

          borderRadius: "10px",

          backgroundColor: "#F9F8F7",
        },
      },
    },

  
    

    //TabBar Customization

  

    MuiMenu: {
      styleOverrides: {
        paper: {
          color: "gray",
        },

        list: {
          fontSize: "12px",

          padding: "-30px",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "12px",

          width: "120px",
        },
      },
    },
  },
});

export default Theme;
