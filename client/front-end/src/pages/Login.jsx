import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { axiosInstance } from "../utils/axios";

const Login = () => {
  const navigate = useNavigate();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;
    if (!emailValue || !passValue) {
      alert("Please provide all required information");
      return;
    }
    try {
      const { data } = await axiosInstance.post("/users/login", {
        email: emailValue,
        password: passValue,
      });
      alert("login successfully.");
      localStorage.setItem("token", data.token);
      console.log(data);
      navigate("/");
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input type="email" ref={emailDom} placeholder="Enter email" />
        <p>Password</p>
        <input type="password" ref={passwordDom} placeholder="Enter password" />
        <br />
        <br />
        <button id="submitButton" type="submit">
          Login
        </button>
      </form>
      <br />
      <br />
      <Link to={"/register"} className="register">
        Register
      </Link>
    </div>
  );
};

export default Login;
