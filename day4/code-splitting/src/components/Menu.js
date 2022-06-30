import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <div className="menu">
        <button onClick={() => navigate(-1)}>Back</button>
        <Link to="/">Home</Link>
        <Link to="users">Users</Link>
        <Link to="contact">Contact</Link>
      </div>
      <button onClick={() => navigate("/auth")}>Logout</button>
    </div>
  );
}

export default Menu;
