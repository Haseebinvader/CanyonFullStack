import React, { useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { hardnessData } from '../../Data/SliderData';
import { UserContext } from '../../UserContext/UserContext';

const Hardness = () => {
  const { url, setUrl, pageSize,selectedhardness, setSelectedhardness } = useContext(UserContext);

  useEffect(() => {
    let selectedMaterialsString = selectedhardness.join('$');

    if (selectedMaterialsString !== '') {
      let newUrl = url.replace(/(\?|&)DurometerRange=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl + `&DurometerRange=${selectedMaterialsString}`);
    }
    else if (selectedMaterialsString === '') {
      let newUrl = url.replace(/(\?|&)DurometerRange=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl)
    }

  }, [selectedhardness, setUrl, url]);

  const handleCheckboxChange = async (event, material) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedhardness([...selectedhardness, material]);
    } else {
      setSelectedhardness(selectedhardness.filter((item) => item !== material));
    }
  };
  return (
    <section className='sideBarMenuData'>
        {hardnessData.map((material, index) => (
          <Grid key={index} container spacing={2} sx={{ width: "100%", display: "flex", alignItems: 'center' }}>
            <Grid item xs={1.5}>
              <input checked={selectedhardness.includes(material)} type="checkbox" style={{ scale: '1.3', cursor: 'pointer' }} onChange={(event) => handleCheckboxChange(event, material)} />
            </Grid>
            <Grid item xs={10.5}>
              <p style={{ fontSize: "11px" }}>{material}</p>
            </Grid>
          </Grid>
        ))}
      </section>
  )
}

export default Hardness
