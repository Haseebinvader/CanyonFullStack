import React from 'react'
import { Box, Grid, Typography, Divider } from '@mui/material'
import { useTheme } from '@emotion/react'
import { BorderRight } from '@mui/icons-material'

const TopDetails = ({ color, AvailableQuantity, shipTime, row }) => {
    return (
        <section>
            <Box sx={{ py: 2 }}>
                <Typography variant="body1" color="initial" sx={{width:"100%",textAlign:'center', fontWeight:900}}>Color: {color}</Typography>
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 300 }}>
                {row.SizeStandard?.split(" ")[0].concat(row.SizeAS568)}
                <span></span> {row.CrossSectionalGeometry}
                <span></span> made from <span></span>
                {/* CP80BK21-OR-204; */}
                {row.SearchDescription?.split("-")[0]}; a <span></span>
                {/* 80 */}
                {row.Durometer}
                <span></span>
                {/* Shore A */}
                {row.DurometerScale} durometer <span></span>
                {/* Canrez */}
                {row.Description?.split(" ")[0]}  {row.Description?.split(" ")[2]}
                . This material is <span></span>
                {row.Color}, Clean Room Manufactured  {row.Description?.split(" ")[5]}  {row.Description?.split(" ")[6]} Encapsulated, High
                Temp, and Silicon Lubricated.

            </Typography>


            <Box sx={{ boxShadow: "0px 3px 4px #EDEDED", mt:0.51, px: 3 }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: "space-between", py: 1 }}>
                    <Typography variant="body2" color="initial" sx={{ fontWeight: 600 , color:'gray',fontSize:'11px'}}>Available Quantity</Typography>
                    <Typography variant="body2" color="initial" sx={{ fontWeight: 600 , color:'gray',fontSize:'11px'}}>Lead Time to Ship</Typography>
                </Box>
                <Divider width="full"></Divider>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: "space-between", py: 2 }}>
                    <Typography variant="body1" color="initial" sx={{ fontWeight: 300 , color:'gray',fontSize:'11px'}}>{row.qnty}</Typography>
                    <Typography variant="body1" color="initial" sx={{ fontWeight: 300 , color:'gray',fontSize:'11px'}}>{shipTime} Day</Typography>
                </Box>
            </Box>
        </section>
    )
}

export default TopDetails