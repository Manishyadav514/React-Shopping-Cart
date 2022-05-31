import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Card, Button, ListGroup } from "react-bootstrap";
import Rating from "./Rating.js";
import { CartState } from "../context/Context.js";
const ProductCard = (props) => {
  // console.log(props);
  // console.log(props.product.image);
  // function randomDeliveryPeriod() {
  //   return Math.floor(Math.random() * 3 + 2);
  // }

  const {
    state: { cart, wishlist },
    dispatch,
  } = CartState();
  console.log(cart);

  return (
    <div>
      <Card style={{ width: "18rem", marginBottom: 20 }} key={props.id}>
        <Card.Img variant="top" src={props.product.image} />
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          {/* <p>{props.product.description}</p> */}
          <Card.Text>{props.product.department}</Card.Text>
          <ListGroup variant="flush">
            <Rating rating={props.product.ratings} />
            <span>Rs {props.product.price.split(".")[0]}</span>
            <span>
              {props.product.fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>{props.product.lateDelivery} Days</div>
              )}
            </span>
          </ListGroup>

          <div className="button-box">
            {/* WishLIst */}
            {wishlist.some((p) => p.id === props.product.id) ? (
              <AiFillHeart
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: props.product,
                  });
                }}
                style={{ color: "red", fontSize: "1.8rem" }}
              />
            ) : (
              <AiOutlineHeart
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: props.product,
                  });
                }}
                style={{ color: "black", fontSize: "1.8rem" }}
              />
            )}

            {cart.some((p) => p.id === props.product.id) ? (
                 <Button size="sm">Added</Button>
                 
            ) : (
              <Button
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: props.product,
                  });
                }}
                variant="primary"
                disabled={!props.product.inStock}
                size="sm"
              >
                {props.product.inStock ? (
                  <div>Add to Cart</div>
                ) : (
                  <div>Out of Stock</div>
                )}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
