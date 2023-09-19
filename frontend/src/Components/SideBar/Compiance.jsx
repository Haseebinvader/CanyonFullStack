import React, { useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { complianceData } from '../../Data/SliderData';
import { UserContext } from '../../UserContext/UserContext';

const Compiance = () => {
  const { url, setUrl, pageSize ,selectedcompliance, setSelectedcompliance} = useContext(UserContext);

  useEffect(() => {
    let selectedMaterialsString = selectedcompliance.join('$');

    if (selectedMaterialsString !== ''&&selectedcompliance!==null) {
      let newUrl = url.replace(/(\?|&)FDACompliant=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl + `&FDACompliant=${selectedMaterialsString}`);
    }
    else if (selectedMaterialsString === '') {
      let newUrl = url.replace(/(\?|&)FDACompliant=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl)
    }

  }, [selectedcompliance, setUrl, url]);

  const handleCheckboxChange = async (event, material) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedcompliance([...selectedcompliance, material]);
    } else {
      setSelectedcompliance(selectedcompliance.filter((item) => item !== material));
    }
  };

  return (
    <section className='sideBarMenuData'>
        {complianceData.map((material, index) => (
          <Grid key={index} container spacing={2} sx={{ width: "100%", display: "flex", alignItems: 'center' }}>
            <Grid item xs={1.5}>
              <input checked={selectedcompliance.includes(material)} type="checkbox" style={{ scale: '1.3', cursor: 'pointer' }} onChange={(event) => handleCheckboxChange(event, material)} />
            </Grid>
            <Grid item xs={10.5}>
              <p style={{ fontSize: "11px" }}>{material}</p>
            </Grid>
          </Grid>
        ))}
      </section>
  )
}

export default Compiance
