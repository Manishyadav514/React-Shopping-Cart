import React, { Fragment, useState, useEffect } from "react";

const Cart = ({ products, changeQuantity }) => {
  const [sum, setSum] = useState(0);
  useEffect(() => {
    let total = 0;
    for (var i = 0; i < products.length; i++) {
      total += products[i].price * products[i].quantity;
    }
    setSum(total);
  }, [products]);

  const checkout = () => {
    alert(`Checkout - Subtotal: $ ${sum.toFixed(2)}`);
  };

  return (
    <Fragment>
      <div className="cart-content">
        <h3>
          <img
            src="https://checkout.advancedshippingmanager.com/wp-content/uploads/2015/10/Cart-Icon-PNG-Graphic-Cave-e1461785088730-300x300.png"
            alt="cart"
          />
          Cart
        </h3>

        {products.length === 0 ? (
          <div className="empty-cart">
            There are no items in Cart, Please add items to checkout!!!
          </div>
        ) : (
          products.map((product) => {
            return (
              <>
                <div className="cart-item">
                  <img
                    src={product.url}
                    alt="cart-item"
                    className="cart-item-image"
                  />
                  <div>
                    <div>
                      <p className="item-title">{product.title}</p>
                      <span className="cart-item-price">
                        Rs {product.price}
                      </span>
                    </div>
                    <div>
                      <p className="item-quantity">
                        Quantity: <span>{product.quantity}</span>
                      </p>
                      <div>
                        <button
                          className="quantity-btn"
                          onClick={() => changeQuantity(product, "-")}
                        >
                          -
                        </button>
                        <button
                          className="quantity-btn"
                          onClick={() => changeQuantity(product, "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
        <div>
          <div className="subtotal-div">
            <p className="subtotal">SUBTOTAL</p>
            <p className="subtotal-price">Rs {sum.toFixed(2)}</p>
          </div>
        </div>


        <button className="checkout-btn" onClick={checkout}>
          CHECKOUT
        </button>
      </div>
    </Fragment>
  );
};

export default Cart;
