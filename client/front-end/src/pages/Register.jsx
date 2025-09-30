import React from "react";

const Register = () => {
  return (
    <div>
      <form id="registration-form" action="#" method="POST">
        <p>User name</p>
        <input type="text" name="user-name" placeholder=" username" />
        <p>First name</p>
        <input type="text" name="first-name" placeholder=" First name" />
        <p>Last name</p>
        <input type="text" name="last-name" placeholder="Last name" />
        <p>Email</p>
        <input type="email" name="email" placeholder="Enter email" />
        <p>Password</p>
        <input type="password" name="password" placeholder="Enter password" />
        <br />
        <br />
        <button id="submitButton" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
