import React, { useEffect } from "react";

import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillDelete,
} from "react-icons/ai";

import product from "../../Static/Images/product.png";

import { Link, useNavigate } from "react-router-dom";

import "./CartPage.css";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import Layout from "../Layout/Layout";

import { useContext } from "react";

import { UserContext } from "../../UserContext";

import { Button } from "@mui/material";

import EmptyCart from "../../Static/Images/empty-cart.svg";

const CartPopup = () => {
  const navigate = useNavigate();

  const minsurcharge = 150;

  const {
    cartlocalArray,

    setlocalcartArray,

    setcartCountBtn,

    setOrderable,

    Orderable,

    setTotalOrderPrice,

    islocalquantity,

    setislocalquantity,

    row,
    setrow,
  } = useContext(UserContext);

  // // console.log(cartlocalArray);

  const deleteproducts = (data) => {
    const updatedProducts = cartlocalArray?.filter(
      (product) => product.ItemNo !== data
    );

    setlocalcartArray(updatedProducts);

    localStorage.setItem("cart", JSON.stringify(updatedProducts));

    setcartCountBtn((cartCountBtn) => cartCountBtn - 1);
  };

  const handleIncrement = (index) => {
    // Increase the value of islocalquantity by 1

    setislocalquantity(islocalquantity + 1);
  };

  const handleDecrement = (index) => {
    // Decrease the value of islocalquantity by 1, but ensure it doesn't go below a minimum value (e.g., 0)

    if (islocalquantity > 0) {
      setislocalquantity(islocalquantity - 1);
    }
  };

  //this is total price of all cart items

  useEffect(() => {
    const total = cartlocalArray.reduce((acc, row) => {
      return acc + row.TotalPrice;
    }, 0);

    setTotalOrderPrice(total);

    return;
  }, [cartlocalArray]);

  const checkorder = () => {
    if (row.price >= 150) {
      navigate("/Checkout");
    } else {
      setOrderable(true);
    }
  };

  return (
    <>
      <Layout>
        <div className="border" style={{ color: "#000", marginBottom: "4rem" }}>
          <h2 className="heading">
            <h1 style={{ color: "#182E49" }}>
              <ShoppingBagIcon
                style={{ fontSize: "2.5rem", color: "#182E49" }}
              />
              My Cart
            </h1>
          </h2>
          {islocalquantity !== null &&
          cartlocalArray &&
          cartlocalArray.length > 0 ? (
            <div className="flexwrap">
              <div className="leftcart">
                <table className="tableborder" cellSpacing={20}>
                  <tr className="head-row">
                    <td>Product</td>

                    <td>Quantity</td>

                    <td>Unit Cost</td>

                    <td>Sub Total</td>
                  </tr>

                  {cartlocalArray ? (
                    cartlocalArray.map((row, index) => {
                      return (
                        <>
                          <tr key={row.ItemNo}>
                            <td>
                              <div
                                className="flex"
                                style={{ textAlign: "center" }}
                              >
                                <Link to={`/product/${row.ItemNo}`}>
                                  {" "}
                                  <img
                                    src={product}
                                    alt="product"
                                    height={80}
                                    width={80}
                                  />
                                </Link>

                                <div
                                  className="flexcol"
                                  style={{ marginLeft: "1rem" }}
                                >
                                  <h5 className="headingcolor">
                                    {row.SearchDescription}
                                  </h5>

                                  <h5 className="headingcolor">
                                    {row.Description2}
                                  </h5>

                                  <p> Expected to Ship Tommarow</p>
                                </div>
                              </div>
                            </td>

                            <td style={{ textAlign: "center" }}>
                              <span style={{ display: "inline-block" }}>
                                <AiFillMinusCircle
                                  style={{
                                    cursor: "pointer",

                                    color: "#f4966b",

                                    marginRight: "5px",

                                    fontSize: "15px",
                                  }}
                                  onClick={() => handleDecrement(index)}
                                />

                                {islocalquantity}

                                <span style={{ display: "inline-block" }}>
                                  <AiFillPlusCircle
                                    style={{
                                      cursor: "pointer",

                                      color: "#f4966b",

                                      marginLeft: "5px",

                                      fontSize: "15px",
                                    }}
                                    onClick={() => handleIncrement(index)}
                                  />
                                </span>
                              </span>
                            </td>

                            <td style={{ textAlign: "center" }}>
                              ${" "}
                              {islocalquantity >= 10 && islocalquantity < 30
                                ? (row.price * 0.8587).toFixed(2)
                                : islocalquantity >= 30 && islocalquantity < 100
                                ? (row.price * 0.7382).toFixed(2)
                                : islocalquantity >= 100 &&
                                  islocalquantity < 500
                                ? (row.price * 0.7014).toFixed(2)
                                : islocalquantity >= 500 &&
                                  islocalquantity < 1000
                                ? (row.price * 0.6855).toFixed(2)
                                : islocalquantity >= 1000 &&
                                  islocalquantity < 2500
                                ? (row.price * 0.6644).toFixed(2)
                                : islocalquantity > 2500
                                ? (row.price * 0.6337).toFixed(2)
                                : row.price}
                            </td>

                            <td style={{ textAlign: "center" }}>
                              ${" "}
                              {islocalquantity >= 10 && islocalquantity < 30
                                ? (
                                    row.price *
                                    0.8587 *
                                    islocalquantity
                                  ).toFixed(2)
                                : islocalquantity > 30 && islocalquantity < 100
                                ? (
                                    row.price *
                                    0.7382 *
                                    islocalquantity
                                  ).toFixed(2)
                                : islocalquantity > 100 && islocalquantity < 500
                                ? (
                                    row.price *
                                    0.7014 *
                                    islocalquantity
                                  ).toFixed(2)
                                : islocalquantity > 500 &&
                                  islocalquantity < 1000
                                ? (
                                    row.price *
                                    0.6855 *
                                    islocalquantity
                                  ).toFixed(2)
                                : islocalquantity > 1000 &&
                                  islocalquantity < 2500
                                ? (
                                    row.price *
                                    0.6644 *
                                    islocalquantity
                                  ).toFixed(2)
                                : islocalquantity > 2500
                                ? (
                                    row.price *
                                    0.6337 *
                                    islocalquantity
                                  ).toFixed(2)
                                : (row.price * islocalquantity).toFixed(2)}
                              {/* {row.TotalPrice !== null ? row.TotalPrice.toFixed(2) : "N/A"} */}
                            </td>

                            <td style={{ textAlign: "center" }}>
                              <AiFillDelete
                                // color="#F4966B"

                                color="182E49"
                                onClick={() => deleteproducts(row.ItemNo)}
                                style={{ fontSize: "22px" }}
                              />
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </table>
              </div>

              <div className="rightcart" style={{ marginTop: "-5rem" }}>
                <div className="flexcol">
                  <h4
                    style={{
                      marginLeft: 38,

                      fontWeight: "500",

                      fontSize: "1.3rem",

                      paddingTop: "3rem",
                    }}
                  >
                    ORDER SUMMARY
                  </h4>

                  <div
                    className="ordersummary flexcol"
                    style={{ border: "1px solid lightgrey" }}
                  >
                    {Orderable ? (
                      <div className="summarybanner ">
                        <div className="flex">
                          <h3
                            style={{
                              color: "#FFFFFF",

                              marginTop: 15,

                              marginLeft: 10,
                            }}
                          >
                            Minimum Order
                          </h3>
                        </div>

                        <p
                          style={{
                            color: "#FFFFFF",

                            width: "16rem",

                            fontSize: "1rem",

                            fontWeight: "500",

                            paddingLeft: "1rem",

                            textAlign: "center",
                          }}
                        >
                          To place the order min value required is $150
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}

                    {cartlocalArray.map((row, index) => (
                      <div className="summarybanner1" key={index}>
                        <div className="flexbaner">
                          <h4
                            style={{
                              color: "black",
                              marginLeft: 10,
                              fontWeight: "500",
                            }}
                          >
                            SubTotal (1-item):
                          </h4>

                          <h4 style={{ marginLeft: 10, fontWeight: "500" }}>
                            ${" "}
                            {islocalquantity >= 10 && islocalquantity < 30
                              ? (row.price * 0.8587).toFixed(2)
                              : islocalquantity >= 30 && islocalquantity < 100
                              ? (row.price * 0.7382).toFixed(2)
                              : islocalquantity >= 100 && islocalquantity < 500
                              ? (row.price * 0.7014).toFixed(2)
                              : islocalquantity >= 500 && islocalquantity < 1000
                              ? (row.price * 0.6855).toFixed(2)
                              : islocalquantity >= 1000 &&
                                islocalquantity < 2500
                              ? (row.price * 0.6644).toFixed(2)
                              : islocalquantity > 2500
                              ? (row.price * 0.6337).toFixed(2)
                              : row.price}
                          </h4>
                        </div>

                        <div className="flexbaner">
                          <h4
                            style={{
                              color: "black",
                              marginTop: 0,
                              marginLeft: 10,
                              fontWeight: "500",
                            }}
                          >
                            Shipping:
                          </h4>

                          <h4
                            style={{
                              marginTop: 0,
                              marginLeft: 10,
                              fontWeight: "500",
                            }}
                          >
                            TBD
                          </h4>
                        </div>

                        <div className="flexbaner">
                          <h4
                            style={{
                              color: "black",
                              marginTop: 0,
                              marginLeft: 10,
                              fontWeight: "500",
                            }}
                          >
                            Tax:
                          </h4>

                          <h4
                            style={{
                              marginTop: 0,
                              marginLeft: 10,
                              fontWeight: "500",
                            }}
                          >
                            TBD
                          </h4>
                        </div>

                        <hr />

                        <div className="flexbaner">
                          <h4
                            style={{
                              color: "black",
                              marginTop: 0,
                              marginLeft: 10,
                              fontWeight: "500",
                            }}
                          >
                            Total:
                          </h4>

                          <h4
                            style={{
                              marginTop: 0,
                              marginLeft: 10,
                              fontWeight: "500",
                            }}
                          >
                            ${" "}
                            {islocalquantity >= 10 && islocalquantity < 30
                              ? (row.price * 0.8587 * islocalquantity).toFixed(
                                  2
                                )
                              : islocalquantity > 30 && islocalquantity < 100
                              ? (row.price * 0.7382 * islocalquantity).toFixed(
                                  2
                                )
                              : islocalquantity > 100 && islocalquantity < 500
                              ? (row.price * 0.7014 * islocalquantity).toFixed(
                                  2
                                )
                              : islocalquantity > 500 && islocalquantity < 1000
                              ? (row.price * 0.6855 * islocalquantity).toFixed(
                                  2
                                )
                              : islocalquantity > 1000 && islocalquantity < 2500
                              ? (row.price * 0.6644 * islocalquantity).toFixed(
                                  2
                                )
                              : islocalquantity > 2500
                              ? (row.price * 0.6337 * islocalquantity).toFixed(
                                  2
                                )
                              : (row.price * islocalquantity).toFixed(2)}
                          </h4>
                        </div>

                        <Button
                          className="btn"
                          style={{ color: "#fff", border: "2px solid #fff" }}
                          onClick={() => {
                            const calculatedPrice =
                              islocalquantity >= 10 && islocalquantity < 30
                                ? (
                                    row.price *
                                    0.8587 *
                                    islocalquantity
                                  ).toFixed(2)
                                : islocalquantity > 30 && islocalquantity < 100
                                ? (
                                    row.price *
                                    0.7382 *
                                    islocalquantity
                                  ).toFixed(2)
                                : islocalquantity > 100 && islocalquantity < 500
                                ? (
                                    row.price *
                                    0.7014 *
                                    islocalquantity
                                  ).toFixed(2)
                                : islocalquantity > 500 &&
                                  islocalquantity < 1000
                                ? (
                                    row.price *
                                    0.6855 *
                                    islocalquantity
                                  ).toFixed(2)
                                : islocalquantity > 1000 &&
                                  islocalquantity < 2500
                                ? (
                                    row.price *
                                    0.6644 *
                                    islocalquantity
                                  ).toFixed(2)
                                : islocalquantity > 2500
                                ? (
                                    row.price *
                                    0.6337 *
                                    islocalquantity
                                  ).toFixed(2)
                                : (row.price * islocalquantity).toFixed(2);

                            if (calculatedPrice >= 150) {
                              navigate("/Checkout");
                              setOrderable(false);
                            } else {
                              setOrderable(true);
                              // alert(
                              //   " To place the order min value required is $150"
                              // );
                            }
                          }}
                        >
                          PROCEED TO CHECKOUT
                        </Button>

                        <div className="summarybanner2">
                          <div className="flex" style={{ height: "4rem" }}>
                            <p
                              style={{
                                color: "#856404",
                                marginBottom: "1rem",
                                height: "3rem",
                              }}
                            >
                              We currently only ship web orders to the United
                              States. Please submit an RFQ if you need
                              international shipping.
                            </p>
                          </div>
                        </div>

                        <Link to="/">
                          <Button
                            className="btn-back"
                            style={{
                              marginTop: "2rem",
                              color: "#fff",
                            }}
                          >
                            BACK TO SHOP
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={EmptyCart} width={350} alt="Empty Cart" />
              <p>No items in your cart....</p>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default CartPopup;
