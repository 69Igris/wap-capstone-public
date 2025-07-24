import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <h1>
            Side<span>Kicks</span>
          </h1>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>

      <div className="nav-login-signup">
      <Link to="/login" className="btn btn-primary">Login</Link>
      <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
      </div>


      
    </div>
  );
};

export default Navbar;
