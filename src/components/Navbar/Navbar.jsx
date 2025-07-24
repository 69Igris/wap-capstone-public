import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <h1>
            Side<span>Kicks</span>
          </h1>
        </Link>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
      </ul>

      <div className={`nav-login-signup ${isOpen ? "open" : ""}`}>
        <Link to="/login" className="btn btn-primary" onClick={() => setIsOpen(false)}>Login</Link>
        <Link to="/signup" className="btn btn-secondary" onClick={() => setIsOpen(false)}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
