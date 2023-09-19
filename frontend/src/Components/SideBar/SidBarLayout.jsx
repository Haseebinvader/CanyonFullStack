import React, { useContext, useState ,useEffect} from 'react'
import Dimentions from './Dimentions.jsx'
import Standard from './Standard.jsx'
import Temperature from './Temperature.jsx'
import BaseMaterial from './BaseMaterial.jsx'
import MaterialSubtype from './MaterialSubtype.jsx'
import Compiance from './Compiance.jsx'
import Hardness from './Hardness.jsx'
import MaterialColor from './MaterialColor.jsx'
import MaterialBrand from './MaterialBrand.jsx'
import { Box, Button, Typography } from '@mui/material'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "../Styles.css"
import { UserContext } from '../../UserContext/UserContext.jsx'

const SidBarLayout = () => {
  const { setUrl, pageSize, setClearFilter,setSelectedbrand,clearFilter,setTemperature,setSelectedcolor,selectedMaterials, setSelectedhardness,setSelectedcompliance,setSelectedsubtype,setSelectedMaterials} = useContext(UserContext)
  const [showDimensions, setShowDimensions] = useState(false);
  const [showStandard, setShowStandard] = useState(false);
  const [showTemp, setShowTemp] = useState(false);
  const [showtype, setShowtype] = useState(false);
  const [showSubType, setShowSubType] = useState(false);
  const [showCompliance, setShowCompliance] = useState(false);
  const [showHardness, setShowHardness] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showBrand, setShowBrand] = useState(false);



  return (
    <div style={{ padding: " 0 1rem 5rem 1rem", height: "100%", overflowY: 'scroll' }}>
      <Button variant='contained' sx={{ width: 1, fontSize: "12px", height: '32px', backgroundColor: '#F4976C', '&:hover': { backgroundColor: '#F4976C' } }} onClick={() => {
        setUrl(`http://127.0.0.1:8000/api/products/?limit=${pageSize}&Blocked=False&ordering=CompoundNumber&Online=Online`); 
        setSelectedMaterials([])
        setSelectedcompliance([])
        setSelectedsubtype([])
        setSelectedhardness([])
        setSelectedcolor([])
        setSelectedbrand([])
        setTemperature([0, 70])
          setClearFilter(true);
        }} > Clear All Filters</Button>
      <input type="text" placeholder='Search Here' className='sidebarSearchInput' onChange={(e) =>{
      if(e.target.value){
        setUrl(

          `http://127.0.0.1:8000/api/products/?Online=Online&Blocked=False&limit=${pageSize}&search=${e.target.value}`

        )}
        else if(!e.target.value){
          setUrl(

            `http://127.0.0.1:8000/api/products/?Online=Online&Blocked=False&limit=${pageSize}&ordering=CompoundNumber`
  
          )
        }
        }
      } />

      <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'start', flexDirection: 'column', gap: 1, mt: 3, pl: { sm: 0, lg: 2 } }}>
        <Typography variant="body2" color="initial" onClick={() => setShowDimensions(!showDimensions)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>Dimensions(mm) <span style={{ marginTop: "5px", marginLeft: '7px', color: "#F4976C" }}>{showDimensions ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></Typography>
        {showDimensions && <Dimentions />}
        <Typography variant="body2" color="initial" onClick={() => setShowStandard(!showStandard)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>Standard Size <span style={{ marginTop: "5px", marginLeft: '7px', color: "#F4976C" }}>{showStandard ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></Typography>
        {showStandard && <Standard />}
        <Typography variant="body2" color="initial" onClick={() => setShowTemp(!showTemp)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>Temperature °C <span style={{ marginTop: "5px", marginLeft: '7px', color: "#F4976C" }}>{showTemp ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></Typography>
        {showTemp && <Temperature />}
        <Typography variant="body2" color="initial" onClick={() => setShowtype(!showtype)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>Base Material Type<span style={{ marginTop: "5px", marginLeft: '7px', color: "#F4976C" }}>{showtype ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></Typography>
        {showtype && <BaseMaterial />}
        <Typography variant="body2" color="initial" onClick={() => setShowSubType(!showSubType)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>Material Subtype<span style={{ marginTop: "5px", marginLeft: '7px', color: "#F4976C" }}>{showSubType ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></Typography>
        {showSubType && <MaterialSubtype />}
        <Typography variant="body2" color="initial" onClick={() => setShowCompliance(!showCompliance)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>Material Compliance<span style={{ marginTop: "5px", marginLeft: '7px', color: "#F4976C" }}>{showCompliance ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></Typography>
        {showCompliance && <Compiance />}
        <Typography variant="body2" color="initial" onClick={() => setShowHardness(!showHardness)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>Material Hardness<span style={{ marginTop: "5px", marginLeft: '7px', color: "#F4976C" }}>{showHardness ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></Typography>
        {showHardness && <Hardness />}
        <Typography variant="body2" color="initial" onClick={() => setShowColor(!showColor)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>Material Color<span style={{ marginTop: "5px", marginLeft: '7px', color: "#F4976C" }}>{showColor ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></Typography>
        {showColor && <MaterialColor />}
        <Typography variant="body2" color="initial" onClick={() => setShowBrand(!showBrand)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>Material Brand<span style={{ marginTop: "5px", marginLeft: '7px', color: "#F4976C" }}>{showBrand ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></Typography>
        {showBrand && <MaterialBrand />}
      </Box>
    </div>
  )
}

export default SidBarLayout
