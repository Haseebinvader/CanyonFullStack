import React, { useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { UserContext } from '../../UserContext/UserContext';
import { brandData } from '../../Data/SliderData';

const MaterialBrand = () => {
  
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const { url, setUrl, pageSize } = useContext(UserContext);

  useEffect(() => {
    let selectedMaterialsString = selectedMaterials.join(',');

    if (selectedMaterialsString !== '') {
      let newUrl = url.replace(/(\?|&)Brand=[^&]*/g, "");
      newUrl = newUrl.replace(/(\?|&)Online=[^&]*/g, "");
      setUrl(newUrl + `&Brand=${selectedMaterialsString}&Online=Online`);
    }
    else if (selectedMaterialsString === '') {
      setUrl(`http://127.0.0.1:8000/api/products/?limit=${pageSize}&Online=Online&ordering=CompoundNumber`)
    }

  }, [selectedMaterials, setUrl, url]);

  const handleCheckboxChange = async (event, material) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedMaterials([...selectedMaterials, material]);
    } else {
      setSelectedMaterials(selectedMaterials.filter((item) => item !== material));
    }
  };
  return (
    <section className='sideBarMenuData'>
        {brandData.map((material, index) => (
          <Grid key={index} container spacing={2} sx={{ width: "100%", display: "flex", alignItems: 'center' }}>
            <Grid item xs={1.5}>
              <input type="checkbox" style={{ scale: '1.3', cursor: 'pointer' }} onChange={(event) => handleCheckboxChange(event, material)} />
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
