import React, { useState, useEffect } from "react";
import Sizes from "./components/Sizes";
import Products from "./components/Products";
import Cart from "./components/Cart";
import filterList from "./components/filterList";
import "./SimpleCart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

import {
  Dropdown,
} from "react-bootstrap";

const SimpleCart = () => {
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [cart, setCart] = useState([]);

  console.log(
    "products",
    products,
    "selectedSizes",
    selectedSizes,
    "cart",
    cart
  );

  useEffect(() => {
    setProducts(filterList([], null));
    if (JSON.parse(localStorage.getItem("cart"))) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const setSize = (size) => {
    const sizes = [...selectedSizes];

    if (sizes.includes(size)) {
      const index = sizes.indexOf(size);
      sizes.splice(index, 1);
    } else {
      sizes.push(size);
    }
    setSelectedSizes(sizes);
    setProducts(filterList(sizes, "size"));
  };

  const sortProducts = (method) => {
    const array = products;

    if (method === "Lowest to Highest") {
      array.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (method === "Highest to Lowest") {
      array.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    setProducts(array);
  };

  const addToCart = (item) => {
    const productList = [...cart];
    if (!productList.includes(item)) {
      productList.push(item);
    }
    const index = productList.indexOf(item);
    productList[index].quantity++;
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  };

  const changeQuantity = (item, e) => {
    const productList = [...cart];
    const index = productList.indexOf(item);
    if (e === "+") {
      productList[index].quantity++;
    } else {
      if (productList[index].quantity > 1) {
        productList[index].quantity--;
      } else {
        productList.splice(index, 1);
      }
    }
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  };
  return (
    <div>
      <Dropdown className="drop-down">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <AiOutlineShoppingCart
            style={{
              color: "white",
              fontSize: "1.3rem",
              marginRight: 10,
            }}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Cart products={cart} changeQuantity={changeQuantity} />
        </Dropdown.Menu>
      </Dropdown>

      <div className="home-container">
        <Sizes selectedSizes={selectedSizes} setSize={setSize} />
        <Products
          products={products}
          sortProducts={sortProducts}
          addToCart={addToCart}
        />
        {/* <Cart products={cart} changeQuantity={changeQuantity} /> */}
      </div>
    </div>
  );
};

export default SimpleCart;
