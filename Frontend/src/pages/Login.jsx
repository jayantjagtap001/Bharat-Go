import { useState } from "react";
import { login } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/");
  };

  return (
    <div
      style={{
        width: "500px",
        height: "300px",
        border: "2px solid",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <h2>Login</h2>
      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="">Enter Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="">Enter Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          style={{
            marginTop: "20px",
            width: "150px",
            hight: "70px",
            cursor:"pointer",
            border: "none",
            borderRadius: "10px",
            background: "pink",
          }}
          type="submit"
        >
          Login
        </button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
