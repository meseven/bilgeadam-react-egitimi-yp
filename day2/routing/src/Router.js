import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import DashboardLayout from "./layouts/Dashboard";
import AuthLayout from "./layouts/Auth";

// pages
import Home from "./pages/Dashboard/Home";
import Users from "./pages/Dashboard/Users";
import Contact from "./pages/Dashboard/Contact";
import UserDetail from "./pages/Dashboard/UserDetail";
import Error404 from "./pages/Error404";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

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
