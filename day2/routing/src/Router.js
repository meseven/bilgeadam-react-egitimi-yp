import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import UserDetail from "./pages/UserDetail";
import Error404 from "./pages/Error404";
import DashboardLayout from "./layouts/Dashboard";
import AuthLayout from "./layouts/Auth";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Router() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default Router;
