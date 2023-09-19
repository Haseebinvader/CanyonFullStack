import React, { useContext, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { materialTypeItems } from '../../Data/SliderData.js';
import { UserContext } from '../../UserContext/UserContext.jsx';

const BaseMaterial = () => {
  const {
    url,
    setUrl,
    pageSize,
    selectedMaterials,
    setSelectedMaterials
  } = useContext(UserContext);

  useEffect(() => {
      const selectedMaterialsString = selectedMaterials.join('$');

      if (selectedMaterialsString !== '') {
        let newUrl = url.replace(/(\?|&)Material=[^&]*/g, '');
        newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
        setUrl(newUrl+`&Material=${selectedMaterialsString}`);
      } else {
        let newUrl = url.replace(/(\?|&)Material=[^&]*/g, '');
        newUrl = newUrl.replace(/(\?|&)offset=[^&]*/g, "");
        setUrl(newUrl);
      }
    
  }, [selectedMaterials, setUrl]);

  const handleCheckboxChange = (event, material) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedMaterials([...selectedMaterials, material]);
    } else {
      setSelectedMaterials(selectedMaterials.filter((item) => item !== material));
    }
  };

  return (
    <section className='sideBarMenuData'>
      {materialTypeItems.map((material, index) => (
        <Grid
          key={index}
          container
          spacing={2}
          sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
        >
          <Grid item xs={1.5}>
            <input
              type='checkbox'
              checked={selectedMaterials.includes(material)}
              style={{ scale: '1.3', cursor: 'pointer' }}
              onChange={(event) => handleCheckboxChange(event, material)}
            />
          </Grid>
          <Grid item xs={10.5}>
            <p style={{ fontSize: '11px' }}>{material}</p>
          </Grid>
        </Grid>
      ))}
    </section>
  );
};

export default BaseMaterial;
