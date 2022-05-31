import { createContext, useReducer, useContext } from "react";
// import { faker } from "@faker-js/faker";
import { CartReducer, FilterReducer } from "./Reducer.js";
import data from "../product-data/data.json";

const Cart = createContext();

const Context = ({ children }) => {
  // const products = [...Array(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: faker.image.image(),
  //   inStock: faker.helpers.arrayElement([0, 3, 4, 8]),
  //   department: faker.commerce.department(),
  //   description: faker.commerce.productDescription(),
  //   fastDelivery: faker.datatype.boolean(),
  //   ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  //   lateDelivery: Math.floor(Math.random() * 3 + 2),
  // }));

  const products = data;
  // console.log(products);

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
    wishlist: [],
  });

  const [FilterState, FilterDispatch] = useReducer(FilterReducer, {
    byStock: false,
    byFastDelivery: false,
    sort: false,
    byRating: "",
    searchQuery: "",
  
  });
    // console.log("state : ", state);
    // console.log("dispatch : ", dispatch);
  return <Cart.Provider value={{ state, dispatch, FilterState, FilterDispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
