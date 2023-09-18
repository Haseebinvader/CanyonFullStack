import React, { Fragment, useContext } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { useTheme } from '@emotion/react'
import TopDetails from './TopDetails.jsx'
import QuantityCheckHandler from './QuantityCheckHanlder.jsx'
import Description from './Description.jsx'
import { UserContext } from '../../UserContext/UserContext.jsx'
// import product from 'public/PNG/product.webp'

const DetailPageContent = () => {
  const theme = useTheme();
  const {row} = useContext(UserContext)
  
  return (

    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Box sx={{
            p:2, pt:8
          }}>
            <img src='../../public/PNG/product.webp' alt="product" style={{scale: '0.8'}} />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ width: "100%", m: 'auto', py: 4 }}>
            <Box sx={{ width: 1, backgroundColor: theme.palette.secondary.main }}>
              <Typography variant="h4" sx={{ color: theme.palette.white[900], display: "flex", justifyContent: 'center', alignItems: "center", height: '50px', fontWeight: 600, }}>CP7823-OR-273</Typography>
            </Box>

            <TopDetails color={row.Color} shipTime={2} AvailableQuantity={row.qnty} row={row}/>
            <QuantityCheckHandler />
            <Description />
          </Box>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>


    </Fragment>
  )
}

export default DetailPageContent