import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { axiosInstance } from "../utils/axios";
const Register = () => {
  const navigate = useNavigate();
  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    const userValue = usernameDom.current.value;
    const firstValue = firstnameDom.current.value;
    const lastValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;
    if (!userValue || !firstValue || !lastValue || !emailValue || !passValue) {
      alert("Please provide all required information");
      return;
    }
    try {
      await axiosInstance.post("/users/register", {
        username: userValue,
        firstname: firstValue,
        lastname: lastValue,
        email: emailValue,
        password: passValue,
      });
      alert("registred successfully. please login");
      navigate("/login");
    } catch (error) {
      alert("something went wrong!");
      console.log(error.response);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>User name</p>
        <input type="text" ref={usernameDom} placeholder=" username" />
        <p>First name</p>
        <input type="text" ref={firstnameDom} placeholder=" First name" />
        <p>Last name</p>
        <input type="text" ref={lastnameDom} placeholder="Last name" />
        <p>Email</p>
        <input type="email" ref={emailDom} placeholder="Enter email" />
        <p>Password</p>
        <input type="password" ref={passwordDom} placeholder="Enter password" />
        <br />
        <br />
        <button id="submitButton" type="submit">
          Register
        </button>
      </form>
      <br />
      <br />
      <Link to={"/login"} className="register">
        Login
      </Link>
    </div>
  );
};

export default Register;
