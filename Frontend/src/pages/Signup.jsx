import { useState } from "react";
import { signUp } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signUp(email, password);
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
        margin:"auto",
        marginTop:"50px",
        rowGap:"20px"
      }}
    >
      <h2>Sign Up</h2>
      <form
        onSubmit={handleSignup}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="">USERNAME:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="">PASSWORD:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={{ marginTop: "20px" ,width:"150px",hight:"70px",cursor:"pointer",border:"none",borderRadius:"10px",background:"pink" }} type="submit">
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
