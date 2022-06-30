import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const calculate = () => {
    import("../../../Math").then((math) => {
      console.log(math.sum(16, 26));
    });
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button onClick={() => navigate("/")}>Login</button>

      <button onClick={calculate}>Calculate</button>
    </div>
  );
}

export default Login;
