import React, { useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { UserContext } from '../../UserContext/UserContext';
import { brandData } from '../../Data/SliderData';

const MaterialBrand = () => {
  
  const { url, setUrl, pageSize ,selectedbrand, setSelectedbrand} = useContext(UserContext);

  useEffect(() => {
    let selectedMaterialsString = selectedbrand.join('$');

    if (selectedMaterialsString !== '') {
      let newUrl = url.replace(/(\?|&)Brand=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl + `&Brand=${selectedMaterialsString}`);
    }
    else if (selectedMaterialsString === '') {
      
      let newUrl = url.replace(/(\?|&)Brand=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl)
    }

  }, [selectedbrand, setUrl, url]);

  const handleCheckboxChange = async (event, material) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedbrand([...selectedbrand, material]);
    } else {
      setSelectedbrand(selectedbrand.filter((item) => item !== material));
    }
  };
  return (
    <section className='sideBarMenuData'>
        {brandData.map((material, index) => (
          <Grid key={index} container spacing={2} sx={{ width: "100%", display: "flex", alignItems: 'center' }}>
            <Grid item xs={1.5}>
              <input checked={selectedbrand.includes(material)}  type="checkbox" style={{ scale: '1.3', cursor: 'pointer' }} onChange={(event) => handleCheckboxChange(event, material)} />
            </Grid>
            <Grid item xs={10.5}>
              <p style={{ fontSize: "11px" }}>{material}</p>
            </Grid>
          </Grid>
        ))}
      </section>
  )
}

export default MaterialBrand
