import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="loginLink">
      <ul>
        <Link to="/login">
          <li>Login Page</li>
        </Link>
        <Link to="/">
          <li>Home Page</li>
        </Link>
        <Link to="/public">
          <li>Public Page</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
