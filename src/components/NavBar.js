import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/images/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navContainer">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="PhotoShooto" />
        </Link>
      </div>
      <div className="navLinks">
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/programs">
          Programs
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </div>
      <div className="sign-log-div">
      <div>
          <Link className="login-div" to = "/login">Login</Link>
        </div>
        <div >
          <Link className="sign-div" to="/sign">Register</Link>
        </div>
      </div>
      
    </nav>
  );
};

export default NavBar;
