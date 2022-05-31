import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context.js";
const CartCard = (props) => {
  const {
    dispatch,
  } = CartState();
  // console.log("CartCard", cart);

  return (
    <div className="cart-product-container" key={props.product.id}>
      <img className="cart-product-image" src={props.product.image} alt="img" />
      <div className="cart-item-details">
        <div className="cart-product-title">{props.product.name}</div>
        <div className="cart-product-price">
          Rs {props.product.price}
        </div>
      </div>

      <div className="cart-delete-icon">
        <AiFillDelete
          fontSize="20px"
          style={{ cursor: "pointer" }}
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: props.product })
          }
        />
      </div>
    </div>
  );
};

export default CartCard;
