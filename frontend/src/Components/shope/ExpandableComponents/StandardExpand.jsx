import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const ExpandableContent = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = ["USA", "Japan"];
  const [isopen, setisopen] = useState(false);
  const [size, setsize] = useState(0);
  const [cs, setCs] = useState(0);
  const [id, setid] = useState(0);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <div>
        <p>Standard Size:</p>
        <div className="p1">
          <select
            value={selectedCountry}
            className="country"
            style={{ backgroundColor: "#fff", height: "2.5rem" }}
            onChange={handleCountryChange}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
          <AiFillCaretDown
            onClick={() => {
              setisopen(!isopen);
            }}
          />

          <input
            style={{ backgroundColor: "#fff", marginLeft: "-2rem" }}
            type="text"
            className="sizeinput"
            placeholder="Size"
            min={0}
            onChange={(e) => {
              setsize(e.target.value);
            }}
          />
          <div className="updown"></div>

          <input
            style={{ backgroundColor: "#fff" }}
            type="number"
            className="sizeinput"
            placeholder="CS"
            min={0}
            onChange={(e) => {
              setCs(e.target.value);
            }}
          />
          <div className="updown"></div>
          <input
            style={{ backgroundColor: "#fff" }}
            type="number"
            className="sizeinput"
            placeholder="ID"
            min={0}
            onChange={(e) => {
              setid(e.target.value);
            }}
          />
          <div className="updown"></div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableContent;
