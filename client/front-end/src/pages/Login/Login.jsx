import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { axiosInstance } from "../../utils/axios";
import "./login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    // saving the value inserted in the input field on a variable
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
      // localStorage.setItem("token", data.token);
      console.log(data);
      navigate("/");
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  }
  return (
    <section className="aboutLogin-wrapper">
      <div className="about_page_outer_container">
        <div className="inner_container">
          <div className="about">
            <p>
              <a href="#">About</a>
            </p>
          </div>
          <div className="title">
            <h2> Evangadi Networks Q&A</h2>
          </div>
          <div className="content">
            <p>
              Evangadi Forum is a question-and-answer web platform where users
              can sign up, log in, post questions, and share answers.
              <br />
              <br /> It's aim is to create a place where Evangadi students can
              ask programing related questions and get answers for their
              questions. <br />
              <br />
              It is built like a learning community for programmers to grow
              together.It may contributes a lot on resource sharing
              capabilities, allowing users to share ideas with the community.
            </p>
          </div>
          <br />
          <div className="work">
            <a href="#">HOW IT WORKS?</a>
          </div>
        </div>
      </div>
      <div className="login_container">
        {/* form field */}
        <form className="login_container_form" onSubmit={handleSubmit}>
          <h3>Login to your account</h3>
          <p>
            Don't have an account?
            <Link to="/register">
              <span>Create a new account</span>
            </Link>
          </p>
          <div className="form_group">
            <input type="email" ref={emailDom} placeholder="Enter email" />
          </div>

          <div className="form_group input_with_icon">
            <input
              type={showPassword ? "text" : "password"}
              ref={passwordDom}
              placeholder="Enter password"
            />
            <span
              className="eye_icon"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <p className="orange">Forgot password?</p>

          <button id="submitButton" type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
