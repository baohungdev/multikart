import React, { useState } from "react";
import "./App.css";
import ProductPage from "./components/productsPage/productsHomePage";
import ProductDetailPage from "./components/productDetailPage/productDetail";
import CartPage from "./components/cart/cartPage";
import NavBar from "./components/navbar/navbar";
import Checkout from "./components/checkout/checkout.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [themeColor, setThemeColor] = useState("orange");

  return (
    <Router>
      <NavBar
        position="absolute"
        color="secondary"
        themeColor={themeColor}
        setThemeColor={setThemeColor}
      />
      <Route
        path="/"
        exact
        component={() => <ProductPage themeColor={themeColor} />}
      />
      <Route
        path="/Productdetail/"
        exact
        component={(props) => (
          <ProductDetailPage {...props} themeColor={themeColor} />
        )}
      />
      {/* // arrow function , location search undefined ??*/}
      <Route
        path="/cart"
        exact
        component={() => <CartPage themeColor={themeColor} />}
      />
      <Route
        path="/checkout"
        exact
        component={() => <Checkout themeColor={themeColor} />}
      />
    </Router>
  );
}
export default App;
