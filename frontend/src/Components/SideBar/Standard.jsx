import React, { useContext, useEffect, useState } from "react";
import { Divider, Grid } from "@mui/material";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "../Styles.css"
import axios from "axios";
import { UserContext } from "../../UserContext/UserContext";

const Standard = () => {

  const { setData, setUrl, pageSize } = useContext(UserContext)
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showTable, setShowTable] = useState(false);
  const countries = ["USA", "Japan"];
  const [isopen, setisopen] = useState(false);
  const [sizedata, setSizedata] = useState([]);
  const [size, setsize] = useState(0);
  const [cs, setCs] = useState(0);
  const [id, setid] = useState(0);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const showTableHandler = () => {
    setShowTable(!showTable)
  }
  useEffect(() => {
    if (selectedCountry === "USA") {

      axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=AS568&Onine=Online`).then((res) => {
        setSizedata(res?.data?.results);
      });
    }
    if (selectedCountry === "Japan") {

      axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=JIS&Onine=Online`).then((res) => {
        setSizedata(res?.data?.results);
      });
    }
  }, [selectedCountry]);
  const handlesizechange = (e) => {
    const isJapan = selectedCountry === "Japan";
    const isUsa = selectedCountry === "USA";
    if (e.target.value !== "") {
      if (isUsa) {
        axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=AS568&SizeAS568=-${e.target.value}&Onine=Online`).then((res) => {
          setSizedata(res?.data?.results);
        });
      } else if (isJapan) {
        axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=JIS&SizeJIS=${e.target.value}&Onine=Online`).then((res) => {
          setSizedata(res?.data?.results);
        });
      }
    }
    else{
      if (selectedCountry === "USA") {

        axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=AS568&Onine=Online`).then((res) => {
          setSizedata(res?.data?.results);
        });
      }
      if (selectedCountry === "Japan") {
  
        axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=JIS&Onine=Online`).then((res) => {
          setSizedata(res?.data?.results);
        });
      }
    }
  }
  const handlecschange = (e) => {
    const isJapan = selectedCountry === "Japan";
    const isUsa = selectedCountry === "USA";
    if (e.target.value !== "") {
      if (isUsa) {
        axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=AS568&CrossSectionalDiameter=${e.target.value}&Onine=Online`).then((res) => {
          setSizedata(res?.data?.results);
        });
      } else if (isJapan) {
        axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=JIS&CrossSectionalDiameter=${e.target.value}&Onine=Online`).then((res) => {
          setSizedata(res?.data?.results);
        });
      }
    }
    else{
      if (selectedCountry === "USA") {

        axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=AS568&Onine=Online`).then((res) => {
          setSizedata(res?.data?.results);
        });
      }
      if (selectedCountry === "Japan") {
  
        axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=JIS&Onine=Online`).then((res) => {
          setSizedata(res?.data?.results);
        });
      }
    }
  }
  const handleidchange = (e) => {
    const isJapan = selectedCountry === "Japan";
    const isUsa = selectedCountry === "USA";
    if (e.target.value !== "") {
      if (isUsa) {
        axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=AS568&InsideDiameter=${e.target.value}&Onine=Online`).then((res) => {
          setSizedata(res?.data?.results);
        });
      } else if (isJapan) {
        axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=JIS&InsideDiameter=${e.target.value}&Onine=Online`).then((res) => {
          setSizedata(res?.data?.results);
        });
      }
    }
    else{
      if (selectedCountry === "USA") {

        axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=AS568&Onine=Online`).then((res) => {
          setSizedata(res?.data?.results);
        });
      }
      if (selectedCountry === "Japan") {
  
        axios.get(`http://127.0.0.1:8000/api/products/?limit=10&SizeStandard=JIS&Onine=Online`).then((res) => {
          setSizedata(res?.data?.results);
        });
      }
    }
  }

  return (
    <section className="sideBarMenuData">
      <select value={selectedCountry} className="country"
        style={{ backgroundColor: "#fff", height: "2rem", width: "100%", border: "1px solid #c4c4c4", borderRadius: "4px", cursor: 'pointer' }} onChange={handleCountryChange} >
        <option value="" >Select Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
      <Grid container spacing={2} sx={{ mt: 0.4 }}>
        <Grid item xs={1.9} sx={{ mt: 0.5, cursor: "pointer" }}>
          {showTable&& !selectedCountry ? <AiFillCaretDown onClick={showTableHandler} /> : <AiFillCaretUp onClick={showTableHandler} />}
        </Grid>
        <Grid item xs={3.3}><input type="text" placeholder="Size" className="borderInput" onChange={handlesizechange}/></Grid>
        <Grid item xs={3.3}><input type="number" placeholder="CS" className="borderInput"onChange={handlecschange}/></Grid>
        <Grid item xs={3.3}><input type="number" placeholder="ID" className="borderInput"onChange={handleidchange}/></Grid>
      </Grid>
      {
        showTable? null : <div>
          <table style={{ width: "100%", maxHeight: "1vh", overflow: 'scroll', border: '1px solid #858585', padding: "3px", borderRadius: "6px" }}>
            <thead style={{ backgroundColor: "gray" }}>
            </thead>
            <tbody style={{}}>
              {sizedata ? (
                sizedata.map((i, index) => (
                  <React.Fragment key={index}>
                    <tr tabIndex={index}>
                      <td>
                        <input
                          type="checkbox"
                          style={{ width: '100%', transform: 'scale(1.3)', cursor: 'pointer' }}
                          onChange={(e) => {
                          
    
                            if (e.target.checked) {
                              const isJapan = selectedCountry === "Japan";
                              const isUsa = selectedCountry === "USA";
                              if(isUsa){
                                setUrl(`http://127.0.0.1:8000/api/products/?limit=${pageSize}&SizeAS568=${i.SizeAS568}&CrossSectionalDiameter=${i.CrossSectionalDiameter}&InsideDiameter=${i.InsideDiameter}&Online=Online`)
                                
                              }
                              else if(isJapan){
                                setUrl(`http://127.0.0.1:8000/api/products/?limit=${pageSize}&SizeAS568=${i.SizeJIS}&CrossSectionalDiameter=${i.CrossSectionalDiameter}&InsideDiameter=${i.InsideDiameter}&Online=Online`)
                              }
                            }
                            else{
                              setUrl(`http://127.0.0.1:8000/api/products/?limit=${pageSize}&Online=Online`)

                            }
                          }
                        
                        }
                        />
                      </td>
                      <td>{selectedCountry==="USA"?i.SizeAS568.replace("-",""):i.SizeJIS}</td>
                      <td>{i.CrossSectionalDiameter}</td>
                      <td>{i.InsideDiameter}</td>
                    </tr>
                    <tr>
                      <td colSpan="4">
                        <Divider sx={{ width: '500%' }} />
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Loading...</td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      }
    </section>
  );
};

export default Standard;