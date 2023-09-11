import "./ProductComponent.css";
import React, { useState, useContext, useEffect } from "react";
import product from "../../Static/Images/product.webp";
import BasicTable from "./BasicTable";
import DetailedDesc from "./DetailedDesc/DetailedDesc";
import Layout from "../Layout/Layout";
import CheckPrice from "../CheckPrice/CheckPrice";
import { useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";
import axios from "axios";

function ProductComponent() {
  const { productid } = useParams();
  const [row, setrow] = useState();
  const { item, cartlocalArray } = useContext(UserContext);
  useEffect(() => {
    return () => {
      axios
        .get(`http://127.0.0.1:8000/api/products/?ItemNo=${productid}`)
        .then((res) => {
          console.log(res);
          setrow(res);
        });
    };
  }, [row, productid]);
  return (
    <Layout>
      <div className="productComponent ">
        <>
          <div className="productDesc" style={{}}>
            <img
              src={product}
              alt="product"
              style={{
                width: "20rem",
                marginLeft: "1rem",
                position: "absolute",
              }}
            />

            <div className="productInfo" style={{ margin: "auto" }}>
              <h1
                style={{
                  backgroundColor: "#182E49",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {row ? row.data[0].SearchDescription : ""}
              </h1>

              <p>
                Color: <span>{row ? row.data[0].Color : ""}</span>{" "}
                <span id="circleColor"></span>{" "}
              </p>
              <p
                style={{
                  width: "50rem",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
              >
                {row
                  ? (row.data[0].SizeStandard
                      ? row.data[0].SizeStandard.split(" ")[0]
                      : "") +
                    (row.data[0].SizeAS568 ? row.data[0].SizeAS568 : "")
                  : ""}
                <span></span> {row ? row.data[0].CrossSectionalGeometry : ""}
                <span></span> made from <span></span>
                {/* CP80BK21-OR-204; */}
                {row ? row.data[0].SearchDescription.split("-")[0] : ""}; a{" "}
                <span></span>
                {/* 80 */}
                {row ? row.data[0].Durometer : ""}
                <span></span>
                {/* Shore A */}
                {row ? row.data[0].DurometerScale : ""} durometer <span></span>
                {/* Canrez */}
                {row ? row.data[0].Description.split(" ")[0] : ""}{" "}
                {row ? row.data[0].Description.split(" ")[2] : ""}. This
                material is <span></span>
                {row ? row.data[0].Color : ""}, Clean Room Manufactured
                {row ? row.data[0].Description.split(" ")[5] : ""}{" "}
                {row ? row.data[0].Description.split(" ")[6] : ""}
                Encapsulated, High Temp, and Silicon Lubricated.
              </p>
              <BasicTable rows={row} />
              <CheckPrice/>
            </div>

          </div>

          <DetailedDesc rows={row} />
        </>
      </div>
    </Layout>
  );
}

export default ProductComponent;
