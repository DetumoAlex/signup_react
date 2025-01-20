import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
// import Home from "./components/Home";
import Login from "./components/Login";
// import Nav from "./components/Nav"
import SignUp from "./components/SignUp"
import Nav from "./components/Nav";
import Home from "./components/Home";
import { useState } from "react";

const App = () => {
  // Cart state to manage added products
  const [cart, setCart] = useState([]);

  // Function to add products to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to remove products from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Router>
      <Nav cart={cart}/>
    <Routes>
      
      <Route path="/home" element={<Home addToCart={addToCart}/>} /> 
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>} />
    </Routes>
  </Router>
  )
}

export default App
