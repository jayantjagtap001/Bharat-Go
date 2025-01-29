import { Link } from "react-router-dom";
import { auth, logout } from "../firebase/config";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="navbar">
      <Link style={{color:"white"}} to="/">Home</Link>
      <Link style={{color:"white"}} to="/cart">Cart</Link>
      {user ? (
        <>
          <span>Hello welcome to our webpage, {user.email}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </> 
      )}
    </nav>
  );
};

export default Navbar;
