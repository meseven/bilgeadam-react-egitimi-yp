import React from "react";
import { Outlet } from "react-router-dom";
import AuthMenu from "../../components/AuthMenu";

function AuthLayout() {
  return (
    <div className="auth-layout">
      <AuthMenu />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
