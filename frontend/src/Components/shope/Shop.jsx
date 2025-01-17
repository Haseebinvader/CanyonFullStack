import React from "react";
import Sleft from "./ShopLeft";
import Sright from "./ShopRight";
import Drawer from "./Drawer";
import { useContext } from "react";
import "./Shop.css";
import Table from "./ItemDetails";
import { UserContext } from "../../UserContext";
import { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";

// import zIndex from '@mui/material/styles/zIndex';

const Shope = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { isdraweropen, setisdraweropen } = useContext(UserContext);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <div className="row" style={{ height: "100%" }}>
    //   <div>
    //     {isMobileView ? <>{isdraweropen ? <Drawer /> : null}</> : <Sleft />}
    //   </div>
    //   {isMobileView ? (
    //     <>
    //       <Sright />
    //     </>
    //   ) : (
    //     <Sright />
    //   )}
    //   {/* {isMobileView ? (
    //     <>
    //       {isdraweropen ? <div style={{"position":"absolute","zIndex":"1","top":"125px","left":"0"}}><Sright /> </div> :<div style={{"width":"100%"}}><Sright/></div>}
    //     </>
    //   ) : (
    //     <Sright />
    //   )}  */}
    // </div>
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
            {isMobileView ? <>{isdraweropen ? <Drawer /> : null}</> : <Sleft />}
        </Grid>
        <Grid item xs={10}>
          <Sright />
        </Grid>
      </Grid>
    </>
  );
};
export default Shope;
