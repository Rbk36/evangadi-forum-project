import Home from "../pages/Home";
import { Route, Routes } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { axiosInstance } from "../utils/axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AppState = createContext();
const AppRoutes = () => {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  async function checkUser() {
    try {
      const { data } = await axiosInstance.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
    } catch (error) {
      console.log(error.response);
      navigate("/login");
    }
  }
  useEffect(() => {
    checkUser();
  }, []);
  return (
    <AppState.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppState.Provider>
  );
};

export default AppRoutes;
