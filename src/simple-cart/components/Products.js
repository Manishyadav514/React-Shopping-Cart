import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Products = ({ products, sortProducts, addToCart }) => {
  const [value, setValue] = useState("Select");
//   const [clickable, setClickable] = useState(true);
//   console.log(clickable);
 
  const setList = (e) => {
    setValue(e.target.value);
    sortProducts(e.target.value);
  };

  return (
    <div className="products">
      <div className="products-nav">
        <h3>Products</h3>
        <div className="sort-list">
          Sort by&nbsp;: &nbsp;
          <select value={value} onChange={setList}>
            <option value="Select">Select</option>
            <option value="Highest to Lowest">Highest to Lowest</option>
            <option value="Lowest to Highest">Lowest to Highest</option>
          </select>
        </div>
      </div>

      <div className="card-list">
        {products.length === 0 ? (
          <p className="text-center">No Products Available!</p>
        ) : (
          products.map((product) => {
            return (
              <div className="card" key={product.id}>
                <img
                  src={product.url}
                  className="card-image"
                  alt="product"
                  title={product.title}
                />
                <h3 className="card-title">{product.title}</h3>
                <p className="price">
                  price: <span>Rs {product.price}</span>
                </p>
                <p className="price">
                  size: <span> {product.size}</span>
                </p>
                {/* {clickable ? (
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() =>
                      addToCart(product) && setClickable(!clickable)
                    }
                  >
                    Add to cart
                  </Button>
                ) : (
                  <Button size="sm" variant="secondary">
                    Added
                  </Button>
                )} */}
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    Add to cart
                  </Button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
