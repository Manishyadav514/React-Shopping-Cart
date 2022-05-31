// import React, { useState } from "react";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { Button, Dropdown } from "react-bootstrap";
import { CartState } from "../context/Context.js";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartCard from "./CartCard.js";
import "../BootstrapCart.css";

const Header = () => {
  const {
    state: { cart },
  } = CartState();
  return (
    <div>
      <>
        <div className="navbar-container">
          <Link to="/">
            <AiFillHome
              style={{ color: "black", fontSize: "1.8rem", margin: 10 }}
            />
          </Link>
          <Link to="/WishListPage">
            <AiFillHeart
              style={{ color: "red", fontSize: "1.8rem", margin: 10 }}
            />
          </Link>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <AiOutlineShoppingCart
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  marginRight: 10,
                }}
              />
              {cart.length}
            </Dropdown.Toggle>
            <div className="cart-dropdown-fix">
              <Dropdown.Menu>
                <span>
                  {cart.length === 0 ? (
                    <div style={{ padding: 10 }}>Cart is Empty</div>
                  ) : (
                    <div>
                      {cart.map((product) => (
                        <CartCard product={product} key={product.id} />
                      ))}
                      <div className="button-box">
                        <Link to="/CheckOut" style={{ align: "center" }}>
                          <Button variant="success" size="sm">
                            Check Out
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </span>
              </Dropdown.Menu>
            </div>
          </Dropdown>
        </div>
      </>
    </div>
  );
};

export default Header;
