import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { CartProvider } from "./context/CartContext";
import { auth } from "./firebase/config";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Componants/Navbar";
import Cart from "./Componants/Cart";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <CartProvider>
      <Router>
        {user && <Navbar />}
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/product/:id" element={user ? <ProductDetails /> : <Login />} />
          <Route path="/cart" element={user ? <Cart /> : <Login />} />
          <Route path="/checkout" element={user ? <Checkout /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
