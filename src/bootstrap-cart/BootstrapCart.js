import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import CheckOutPage from "./components/CheckOutPage.js";
import Products from "./components/ProductPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WishListPage from "./components/WishListPage.js";

function main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Products />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/WishListPage"
            element={
              <>
                <Header />
                <WishListPage />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/CheckOut"
            element={
              <>
                <Header />
                <CheckOutPage />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default main;
