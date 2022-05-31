// import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import Rating from "./Rating.js";
import { CartState } from "../context/Context.js";

export const Filter = () => {
  // const [rate, setRating] = useState(0);
  const {
    FilterState: { byRating, sort },
    FilterDispatch,
  } = CartState();

  return (
    <div className="filters">
        <span className="title">Filter Products</span>
        <span>
          <Form  >
            <FormControl
              size="sm"
              type="search"
              placeholder="Search a product"
              className="me-2"
              aria-label="Search"
              onChange={(e) =>
                FilterDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                })
              }
            />
          </Form>
        </span>
        <span>
          <Form.Check
            inline
            label="Price low to high"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={() =>
              FilterDispatch({
                type: "SORT_BY_PRICE",
                payload: "LowToHigh",
              })
            }
            checked={sort === "lowToHigh" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Price high to low"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={() =>
              FilterDispatch({
                type: "SORT_BY_PRICE",
                payload: "HighToLow",
              })
            }
            checked={sort === "HighToLow" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Remove Out Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={() =>
              FilterDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Fast Delivery"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            onChange={() =>
              FilterDispatch({
                type: "FILTER_BY_DELIVERY",
              })
            }
          />
        </span>
        <span>
          <label>Rating</label>
          {/* <Rating
            rating={rate}
            onClick={(i) => setRating(i + 1)}
            style={{ cursor: "pointer" }}
          /> */}
          <Rating
            rating={byRating}
            onClick={(i) =>
              FilterDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
            style={{ cursor: "pointer" }}
          />
        </span>
        <Button
          size="sm"
          variant="success"
          onClick={() =>
            FilterDispatch({
              type: "CLEAR_FILTER",
            })
          }
        >
          Clear Filters
        </Button>
      </div>
  );
};
