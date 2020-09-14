import React from "react";
import "./App.css";
import ProductPage from "./components/productsPage/products";
import ProductDetailPage from "./components/productDetailPage/productDetail";
import CartPage from "./components/cart/cartPage";
import NavBar from "./components/navbar/navbar";
import Checkout from "./components/checkout/checkout.js"

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar position="absolute" color="secondary" />
      <Route path="/" exact component={ProductPage} />
      <Route path="/Productdetail" exact component={ProductDetailPage} />
      <Route path="/cart"  exact component={CartPage} />
      <Route path="/checkout" exact component= {Checkout}/>
    </Router>
  );
}
export default App;
