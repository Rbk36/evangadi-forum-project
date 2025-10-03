import React from "react";
import { Link } from "react-router";
import logo from "../../assets/img/logo.jpg";
import "./header.css";
const Header = () => {
  return (
    <div className="header_container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav_links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="">How it works</Link>
        </li>
        <li>
          <Link to="/register">
            <button>Sign In</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
