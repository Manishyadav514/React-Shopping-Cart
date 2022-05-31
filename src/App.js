import BootstrapCart from "./bootstrap-cart/BootstrapCart.js";
import SimpleCart from "./simple-cart/SimpleCart.js";
import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function App() {
  const [bootstrapCart, SetBootstrapCart] = useState(true);
  return (
    <div className="App">
      <div className="cart-navbar">
          <span href="/">React-Shopping-Cart</span>
        
        <div className="cart-toggle">
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Click to Switch into Different Cart"
              onClick={() =>
                bootstrapCart ? SetBootstrapCart(false) : SetBootstrapCart(true)
              }
            />
          </Form>
        </div>
      </div>
      {bootstrapCart ? (
        <div class="grid-container">
          <div class="grid-item-active">CART-1</div>
          <div class="grid-item-deactive">CART 2</div>
        </div>
      ) : (
        <div class="grid-container">
          <div class="grid-item-deactive">CART 1</div>
          <div class="grid-item-active">CART 2</div>
        </div>
      )}

      {bootstrapCart ? <BootstrapCart /> : <SimpleCart />}
    </div>
  );
}

export default App;
