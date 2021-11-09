import React from "react";
import "./home-navbar.css";
import { Link } from "react-router-dom";
function HomeNavbar() {
  return (
    <div className="home-navbar">
      <div className="logo-div">
        <div className="logo">
          <img src="HomePage/logo.png" alt="" />
        </div>
        <div>
          <h3 className="h">Pinterest</h3>
        </div>
      </div>
      <div className="navbar-left-section">
        <div className="links">
          <Link>
            <h4>About</h4>
          </Link>
          <Link>
            <h4>Buisness</h4>
          </Link>
          <Link>
            <h4>Press</h4>
          </Link>
        </div>
        <div className="links-buttons">
          <Link>
            <button className="login-btn">Log in</button>
          </Link>
          <Link>
            <button className="signup-btn">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
