import React, { useState } from "react";
import "./home-navbar.css";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
function HomeNavbar() {
  const [signup,setSignup]=useState(false)
  const [login,setLogin]=useState(false)
  const handleLogin=()=>{
    setLogin(false)
  }
  const handleSignup=()=>{
    setSignup(false)
  }
  return (
    <div> 
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
          <Link to="/about">
            <h4>About</h4>
          </Link>
          <Link to="/buisness">
            <h4>Buisness</h4>
          </Link>
          <Link to="/press">
            <h4>Press</h4>
          </Link>
        </div>
        <div className="links-buttons">
          
            <button onClick={()=>{setLogin(true)}} className="login-btn">Log in</button>
          
         
            <button onClick={()=>{setSignup(true)}} className="signup-btn">Sign up</button>
         
        </div>
      </div>
    </div>
    <div>{signup?<Signup signup={signup} handleSignup={handleSignup}/>:""}</div>
    <div>{login?<Login login={login} handleLogin={handleLogin}/>:""}</div>
    </div>
  );
}

export default HomeNavbar;
