import React, { Fragment } from 'react'
import { Header, Footer, SideBar, RightSide } from '../Components/index.js'
import { Grid } from '@mui/material'

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Grid container spacing={4} sx={{ marginTop:"0.1px" }}>
        <Grid item xs={2} md={2.2} sx={{width: "100%", height: '100vh', display: { xs: 'none', md: "block" },overflow:'hidden'}}><SideBar /></Grid>
        <Grid item xs={12} md={9.8} sx={{ width: "100%", height: '100vh' }}><RightSide /></Grid>
      </Grid>
      <Footer />
    </Fragment>
  )
}

export default Home