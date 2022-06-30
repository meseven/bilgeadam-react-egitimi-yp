import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import DashboardLayout from "./layouts/Dashboard";
import AuthLayout from "./layouts/Auth";

// pages
const Home = lazy(() => import("./pages/Dashboard/Home"));
const Users = lazy(() => import("./pages/Dashboard/Users"));
const Contact = lazy(() => import("./pages/Dashboard/Contact"));
const UserDetail = lazy(() => import("./pages/Dashboard/UserDetail"));
const Error404 = lazy(() => import("./pages/Error404"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UserDetail />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
