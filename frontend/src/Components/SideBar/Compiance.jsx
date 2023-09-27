import React, { useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { complianceData } from '../../Data/SliderData';
import { UserContext } from '../../UserContext/UserContext';
import {Typography} from '@mui/material';
const Compiance = () => {
  const { url, setUrl, pageSize ,selectedcompliance, setSelectedcompliance} = useContext(UserContext);

  const handleCheckboxChange = (event, material) => {
    const isChecked = event.target.checked;
    console.log(material);
    if (isChecked) {
      if (material === 'FDA Compliant'){
        let newUrl = url.replace(/(\?|&)FDACompliant=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl + `&FDACompliant=${material}`);
      }
      if (material === 'USP Class VI'){
        let newUrl = url.replace(/(\?|&)USPClassVI=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl + `&USPClassVI=${material}`);
      }
      if (material === 'NSF 61'){
        let newUrl = url.replace(/(\?|&)NSF61=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl + `&NSF61=${material}`);
      }
    }
    else if(!isChecked) {
      if (material === 'FDA Compliant'){
        let newUrl = url.replace(/(\?|&)FDACompliant=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl);
      }
      if (material === 'USP Class VI'){
        let newUrl = url.replace(/(\?|&)USPClassVI=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl);
      }
      if (material === 'NSF 61'){
        let newUrl = url.replace(/(\?|&)NSF61=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl);
      }
    }
  };

  return (
    <section className='sideBarMenuData'>
        {complianceData.map((material, index) => (
          <Grid key={index}
          container
          spacing={0}
          sx={{ width: '100%', display: 'flex', alignItems: 'start', flexDirection: "start" }}>
            <Grid item xs={1.5}>
              <input  type="checkbox" style={{ scale: '1.3', cursor: 'pointer' }} onChange={(event) => handleCheckboxChange(event, material)} />
            </Grid>
            <Grid item xs={10}>

            <Typography varient='body2' sx={{ fontSize: { xs: "8px", md: "10px" }, ml: 1 }}>{material}</Typography>

          </Grid>
          </Grid>
        ))}
      </section>
  )
}

export default Compiance
