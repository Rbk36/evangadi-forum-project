import Home from "../pages/Home";
import { Route, Routes } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="*" element={<h1>404 Page not found</h1>} /> */}
    </Routes>
  );
};

export default AppRoutes;
