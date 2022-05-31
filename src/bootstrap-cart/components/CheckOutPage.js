import React, { useState, useEffect } from "react";
import { CartState } from "../context/Context.js";
import { AiFillDelete } from "react-icons/ai";
import {
  ListGroup,
  Button,
  Row,
  Col,
  Form,
  Image,
} from "react-bootstrap";
import Rating from "./Rating.js";
const CheckOutPage = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  
  // let initial = 0;
  // cart.map((p) => {
  //   initial = initial + p.price.split(".")[0] * p.qty;
  //   console.log(p.price.split(".")[0], p.qty, p.price.split(".")[0] * p.qty);
  //   console.log(initial);
  //   setTotal(initial);
  // });


  // function FunctionTotal(total, number){
  //   return total + number;
  // }
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      // cart.reduce((FunctionTotal))
      cart.reduce((acc, curr) => acc + Number(curr.price*curr.qty), 0)
    );
  }, [cart]);
  // console.log(cart);
  // console.log(total);

  return (
    <>
      <div className="home">
        <div className="checkout-product-container">
          <ListGroup>
            {cart.map((product) => (
              <ListGroup.Item key={product.id}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fluid
                      rounded
                    ></Image>
                  </Col>
                  <Col md={2}>
                    <span>{product.name}</span>
                  </Col>
                  <Col md={2}>
                    <span>{product.price}</span>
                  </Col>
                  <Col md={2}>
                    <Rating rating={product.ratings} />
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={product.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: { id: product.id, qty: e.target.value },
                        })
                      }
                    >
                      {[...Array(product.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col>
                    <div className="cart-delete-icon">
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      />
                    </div>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
            
          </ListGroup>
        </div>
        <div className="checkout-summary">
          <span className="checkout-title">Subtotal ({cart.length}) items</span>
          <span className="checkout-title">Total: Rs {total}</span>
          <Button size="sm" style={{  }} disabled={cart.length === 0}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
