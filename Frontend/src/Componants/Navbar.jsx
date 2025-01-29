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
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        textAlign: "center",
        alignItems:"center",
        textDecoration:"none",
        height: "50px",
        width: "100%",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        background: "pink",
      }}
    >
      <Link style={{textDecoration:"none"}} to="/">Home</Link>
      <Link style={{textDecoration:"none"}} to="/cart">Cart</Link>
      {user ? (
        <>
          <span>Hi, {user.email}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link style={{textDecoration:"none"}} to="/login">Login</Link>
          <Link style={{textDecoration:"none"}} to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
