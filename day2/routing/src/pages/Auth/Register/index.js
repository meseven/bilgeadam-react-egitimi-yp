import React from "react";

function Register() {
  return (
    <div className="form">
      <h2>Register</h2>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Register</button>
    </div>
  );
}

export default Register;
