import React, { useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { materialSubTypeItems } from '../../Data/SliderData'
import { UserContext } from '../../UserContext/UserContext';

const MaterialSubtype = () => { 
  const { url, setUrl, pageSize ,selectedsubtype, setSelectedsubtype} = useContext(UserContext);

  useEffect(() => {
    let subMaterialSelectedString = selectedsubtype.join('$');

    if (subMaterialSelectedString !== '') {
      let newUrl = url.replace(/(\?|&)MaterialSubtype=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl + `&MaterialSubtype=${subMaterialSelectedString}`);
    }
    else if (subMaterialSelectedString === '') {
      let newUrl = url.replace(/(\?|&)MaterialSubtype=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
      setUrl(newUrl)
    }

  }, [selectedsubtype, url]);

  const checkboxChangeHandler = async (event, material) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedsubtype([...selectedsubtype, material]);
    } else {
      setSelectedsubtype(selectedsubtype.filter((item) => item !== material));
    }
  };
    return (
        <section className='sideBarMenuData'>
        {materialSubTypeItems.map((material, index) => (
          <Grid key={index} container spacing={2} sx={{ width: "100%", display: "flex", alignItems: 'center' }}>
            <Grid item xs={1.5}>
              <input checked={selectedsubtype.includes(material)} type="checkbox" style={{ scale: '1.3', cursor: 'pointer' }} onChange={(event) => checkboxChangeHandler(event, material)} />
            </Grid>
            <Grid item xs={10.5}>
              <p style={{ fontSize: "11px" }}>{material}</p>
            </Grid>
          </Grid>
        ))}
      </section>
    )
}

export default MaterialSubtype