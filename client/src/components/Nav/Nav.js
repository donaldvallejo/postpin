import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-inverse sticky-top">
    <div className="container-fluid">
      <div className="navbar-header">
        
        <Link to="/discover" className="navbar-brand">
           Discover
        </Link>

        <Link to="/post" className="navbar-brand">
          Post
        </Link>
        <Link to="/login" className="navbar-brand">
          Login
        </Link>
        <Link to="/Metrics" className="navbar-brand">
          Metrics
        </Link>
        <Link to="/signup" className="navbar-brand">
          Sign Up
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;