// import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import {
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import { CartState } from "../context/Context.js";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
// import ProductCard from "./ProductCard.js";
import CartCard from "./CartCard.js";

const Header = () => {
  const {
    state: { cart },
    FilterDispatch,
  } = CartState();
  return (
    <div>
      <>
        <Navbar bg="light" variant="light" >
          <Container>
          <Link to="/">
              <span>Bootstrap-Cart</span>
            </Link>
            <Dropdown className="drop-down">
            <Link to="/WishListPage">
              <AiFillHeart
                style={{ color: "red", fontSize: "1.8rem", margin: 10 }}
              />
            </Link>
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
              <Dropdown.Menu>
                <span>
                  {cart.length === 0 ? (
                    <div style={{ padding: 10 }}>Cart is Empty</div>
                  ) : (
                    <div style={{}}>
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
            </Dropdown>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
