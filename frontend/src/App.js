import React, { useEffect, useState } from "react";
// import  { useState } from 'react';
import "./App.css";
import { UserContext } from "../src/UserContext";
import { Routes, Route } from "react-router-dom";
import Index from "./Components/Index";
import RequestQuote from "./Components/REquestQutoe/RequestQuote";
import SignIn from "./Components/Signin/signin";
import Signup from "./Components/Signup/Signup";
import Checkout from "./Components/CheckoutComponent/Checkout";
import ProductComponent from "./Components/ProductOverview/ProductComponent.jsx";
import CartPopup from "./Components/CartPage/CartPopup";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import CenteredIcon from "./Components/CenteredIcon/CenteredIcon";
import { products } from "./Data/API";
// import CheckPrice from './Components/CheckPrice/CheckPrice';

function App() {
  const [page_size, setPageSize] = useState(25);
  const [url, setUrl] = useState(
    `http://127.0.0.1:8000/api/products/?Online=Online&limit=${page_size}`
  );
  const [size1, setsize1] = useState();
  const [cs1, setcs1] = useState();
  const [id1, setid1] = useState();
  const [Orderable, setOrderable] = useState(false);
  const [TotalOrderPrice, setTotalOrderPrice] = useState(0);
  const [sideMenuBar, setsideMenuBar] = useState(false);
  const [cartArray, setcartArray] = useState([]);
  const [sideMenuBarDropDown, setsideMenuBarDropDown] = useState(false);
  const [sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex] =
    useState(false);
  const [size, setsize] = useState(0);
  const [cs, setCs] = useState(0);
  const [search, setsearch] = useState("");
  const [selectedhardness, setselectedhardness] = useState([]);
  // API DATA BELOW
  const [material, setmaterial] = useState(null);
  const [SubMaterial, setSubMaterial] = useState(null);
  const [DurometerRange_Compliance, setDurometerRange_Compliance] =
    useState(null);
  const [cartlocalArray, setlocalcartArray] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [cartCountBtn, setcartCountBtn] = useState(
    Math.max(cartlocalArray.length, 0)
  );
  const [qntyinput, setqntyinput] = useState(0);
  const [baseMaterialTypeArray, setbaseMaterialTypeArray] = useState([]);
  const [hardArray, sethardArray] = useState([]);
  const [colorArray, setcolorArray] = useState([]);
  const [brandArray, setbrandArray] = useState([]);
  const [submaterialArray, setsubmaterialArray] = useState([]);
  const [price, setPrice] = useState("");
  const [isCartopen, setisCartopen] = useState(false);
  // ITEM DETAILS API
  const [accessToken, setaccessToken] = useState();
  // States New
  useEffect(() => {
    axios
      .get("https://canyoncomponents.vercel.app/api/data")
      .then((res) => {
        let a = JSON.parse(res.data);
        setaccessToken(a.access_token);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const [color, setColor] = useState("");
  const [item, setitem] = useState([]);
  const [numberofcecords, setnumberofcecords] = useState();
  const [login, setlogin] = useState(() => {
    const prevLogin = localStorage.getItem("login");
    return prevLogin ? JSON.parse(prevLogin) : false;
  });
  const [userdetail, setuserdetail] = useState(() => {
    const prevUserDetail = localStorage.getItem("userdetail");
    return prevUserDetail ? JSON.parse(prevUserDetail) : null;
  });
  const [selectedcolor, setselectedcolor] = useState([]);
  const [selectedmaterial, setselectedmaterial] = useState([]);
  const [selectedSubmaterial, setselectedSubmaterial] = useState([]);
  const [selectedbrand, setselectedbrand] = useState([]);
  const [lowtemp, setlowtemp] = useState(0);
  const [hightemp, sethightemp] = useState(80);
  const [filteredCount, setFilteredCount] = useState(0);
  // Update local storage when login or userdetail change

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(login));
  }, [login]);

  useEffect(() => {
    localStorage.setItem("userdetail", JSON.stringify(userdetail));
  }, [userdetail]);

  const [totalprice, settotalprice] = useState(0);
  const [row, setrow] = useState([]);

  const [isChanged, setIsChanged] = useState(false);

  const [isFlipped, setIsFlipped] = useState(false);

  const [orderno, setorderno] = useState(null);

  const [value, setValue] = React.useState([0, 80]);

  const [shouldClearCheckboxes, setShouldClearCheckboxes] = useState(false);

  const [checkboxStates, setCheckboxStates] = useState({});

  const [selectedCountry, setselectedCountry] = useState();

  const [dataLoaded, setDataLoaded] = useState(false);
  const [paginationControl, setPaginationControl] = useState();

  const handleDataLoaded = () => {
    setDataLoaded(true);
  };

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(login));
    axios.get(url).then((res) => {
      setPaginationControl(res.data);
      setrow(res.data.results);
      // console.log(res.data, "first");
    });
  }, [login, row, url, paginationControl, page_size]);

  return (
    <>
      <div>
        {!dataLoaded && <CenteredIcon onDataLoaded={handleDataLoaded} />}
        {dataLoaded && (
          <div>
            <Toaster position="top-center" reverseOrder={false} />
            <UserContext.Provider
              value={{
                color,
                setColor,
                selectedCountry,
                setselectedCountry,
                paginationControl,

                id1,
                setid1,
                cs1,
                setcs1,
                size1,
                setsize1,
                shouldClearCheckboxes,
                setShouldClearCheckboxes,
                checkboxStates,
                setCheckboxStates,
                page_size,
                setPageSize,

                value,
                setValue,
                setorderno,
                orderno,
                row,
                setrow,
                url,
                setUrl,
                submaterialArray,
                setsubmaterialArray,

                TotalOrderPrice,
                setTotalOrderPrice,

                Orderable,
                setOrderable,
                setPageSize,
                page_size,
                isChanged,
                setIsChanged,
                isFlipped,
                setIsFlipped,

                totalprice,
                settotalprice,

                cartlocalArray,
                setlocalcartArray,

                qntyinput,

                setqntyinput,

                userdetail,
                setuserdetail,

                hardArray,

                baseMaterialTypeArray,

                brandArray,

                colorArray,

                setlogin,

                login,

                filteredCount,

                setFilteredCount,

                hightemp,

                sethightemp,

                lowtemp,

                setlowtemp,

                numberofcecords,

                setnumberofcecords,

                selectedhardness,

                setselectedhardness,

                price,
                setPrice,

                selectedcolor,

                setselectedcolor,

                selectedmaterial,

                setselectedmaterial,

                selectedSubmaterial,
                setselectedSubmaterial,

                setsearch,

                search,

                selectedbrand,

                setselectedbrand,

                setsize,

                cartCountBtn,
                setcartCountBtn,

                cartArray,
                setcartArray,

                size,

                cs,
                setCs,

                sideMenuBar,

                isCartopen,

                item,

                SubMaterial,

                DurometerRange_Compliance,

                setDurometerRange_Compliance,

                setSubMaterial,

                material,

                setmaterial,

                setisCartopen,

                setsideMenuBar,

                sideMenuBarDropDown,

                setsideMenuBarDropDown,

                sideMenuBarDropDownIndex,

                setsideMenuBarDropDownIndex,

                accessToken,
              }}
            >
              <Routes>
                <Route path="/" element={<Index />} />

                {/* <Route path='/' element={<CheckPrice/>}/> */}

                <Route
                  path="/Signin"
                  element={login ? <OrderHistory /> : <SignIn />}
                />

                <Route path="/Signup" element={<Signup />} />

                <Route
                  path="/request-quote/:productid"
                  element={<RequestQuote />}
                />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route
                  path="/CartPopup"
                  element={login ? <CartPopup /> : <SignIn />}
                />
                <Route
                  path="/Checkout"
                  element={login ? <Checkout /> : <SignIn />}
                />
                <Route
                  path="/product/:productid"
                  element={<ProductComponent />}
                />
                <Route path="/table" element={<OrderHistory />}></Route>
                <Route path="/table/:userNo" element={<OrderHistory />}></Route>
              </Routes>
            </UserContext.Provider>{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
