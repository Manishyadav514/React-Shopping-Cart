import React from "react";
import { CartState } from "../context/Context.js";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ListGroup, Row, Col, Image } from "react-bootstrap";
import "../BootstrapCart.css";

import Rating from "./Rating.js";
import {Link} from "react-router-dom";

const WishListPage = () => {
  const {
    state: { wishlist },
    dispatch,
  } = CartState();
  console.log(wishlist.length);
  return (
    <div>
      {wishlist.length >=  1 ? <div><ListGroup>
        {wishlist.map((product) => (
          <ListGroup.Item>
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
                {wishlist.some((p) => p.id === product.id) ? (
                  <AiFillHeart
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: product,
                      });
                    }}
                    style={{ color: "red", fontSize: "1.8rem" }}
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: product,
                      });
                    }}
                    style={{ color: "black", fontSize: "1.8rem" }}
                  />
                )}
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup></div> : <Link to="/"><div className="wishlist-button-text">Wishlist is Empty, Add some Products!</div></Link>
      }

      
    </div>
  );
};

export default WishListPage;
