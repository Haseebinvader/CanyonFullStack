import React, { useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { materialSubTypeItems } from '../../Data/SliderData'
import { UserContext } from '../../UserContext/UserContext';

const MaterialSubtype = () => {
  const [subMaterialSelected, setSubMaterialSelected] = useState([]);
  const { url, setUrl, pageSize } = useContext(UserContext);

  useEffect(() => {
    let subMaterialSelectedString = subMaterialSelected.join(',');

    if (subMaterialSelectedString !== '') {
      let newUrl = url.replace(/(\?|&)MaterialSubtype=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)Online=[^&]*/g, "");
      setUrl(newUrl + `&MaterialSubtype=${subMaterialSelectedString}&Online=Online`);
    }
    else if (subMaterialSelectedString === '') {
      setUrl(`http://127.0.0.1:8000/api/products/?limit=${pageSize}&Online=Online`)
    }

  }, [subMaterialSelected, url]);

  const checkboxChangeHandler = async (event, material) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSubMaterialSelected([...subMaterialSelected, material]);
    } else {
      setSubMaterialSelected(subMaterialSelected.filter((item) => item !== material));
    }
  };
    return (
        <section className='sideBarMenuData'>
        {materialSubTypeItems.map((material, index) => (
          <Grid key={index} container spacing={2} sx={{ width: "100%", display: "flex", alignItems: 'center' }}>
            <Grid item xs={1.5}>
              <input type="checkbox" style={{ scale: '1.3', cursor: 'pointer' }} onChange={(event) => checkboxChangeHandler(event, material)} />
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