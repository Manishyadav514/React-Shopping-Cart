import React from "react";
import ProductCard from "./ProductCard.js";
import { CartState } from "../context/Context";
import "../BootstrapCart.css";
import { Filter } from "./Filter.js";
const Products = () => {
  const {
    state: { products },
    FilterState: { byStock, byFastDelivery, byRating, sort, searchQuery },
  } = CartState();
  // console.log("PRODUCTS : ", products);
  // console.log("FILTER STATE : ", "byStock", byStock,"byFastDelivery", byFastDelivery,"byRating", byRating, "sort", sort,"searchQuery", searchQuery);

  const FilteredProduct = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "LowToHigh" ? a.price - b.price : b.price - a.price
      );
      // console.log("sort", sortedProducts);
    }
    if (byStock) {
      sortedProducts = sortedProducts.filter(
        (product) => product.inStock >= true
      );
      // console.log("byStock", sortedProducts);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter(
        (product) => product.fastDelivery === true
      );
      // console.log("byFastDelivery", sortedProducts);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log("searchQuery", sortedProducts);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (product) => product.ratings === byRating
      );
      // console.log("byRating", sortedProducts);
    }
    // console.log("sortedProducts", sortedProducts);
    return sortedProducts;
  };
  // const {
  //   FilterState,
  //   FilterDispatch
  // } = CartState();

  return (
    <>
      <div className="home">
        <div className="filterContainer">
          <Filter />
        </div>
        <div className="productContainer">
          {FilteredProduct().map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
