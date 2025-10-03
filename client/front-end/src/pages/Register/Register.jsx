import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { axiosInstance } from "../../utils/axios";
import "./register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
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
    <section className="outer_wrapper">
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

      <div>
        <form onSubmit={handleSubmit}>
          <h3>Join the network</h3>
          <p>
            Already have an account?
            <Link to="/login">
              <span>Signin</span>
            </Link>
          </p>

          <input type="text" ref={usernameDom} placeholder=" username" />
          <div className="first-last">
            <input type="text" ref={firstnameDom} placeholder=" First name" />

            <input type="text" ref={lastnameDom} placeholder="Last name" />
          </div>

          <input type="email" ref={emailDom} placeholder="Enter email" />

          <div className="input_with_icon">
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
          <p className="agree">
            I agree to the <span>privacy policy </span> and
            <span>terms of service. </span>
          </p>
          <button id="submitButton" type="submit">
            Agree and Join
          </button>
          <p style={{ color: "orange" }}>Already have an account?</p>
        </form>
      </div>
    </section>
  );
};

export default Register;
