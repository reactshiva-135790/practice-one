import "./App.css"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Products from "./pages/products/Products"
import Navbar from "./components/navbar/Navbar";
import SingleProduct from "./pages/singleProduct/SingleProduct"
import Cart from "./pages/cart/Cart"
import { Routes, Route, json } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";

function App() {

  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    console.log(JSON.parse(cart));
  }, [])

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/about" element={<About />} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:_id" element={<SingleProduct />}></Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </>
  );
}

export default App;
