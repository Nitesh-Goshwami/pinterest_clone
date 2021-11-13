import React, { useState } from 'react'
import { Redirect,useHistory } from 'react-router-dom';
import "./signup.css"
function Login({login,handleLogin}) {
  const [details,setDetails]=useState({email:"",password:""})
  const handleChange=(e)=>{
   const {name,value}=e.target
   setDetails({...details,[name]:value})
   console.log(name,value);
  }
  const checkLogin=()=>{
    if(details.email==='admin' && details.password==='admin'){
        history.push("/home-signed")
        return <Redirect to="/home-signed"/>
    }
    else{
        return alert("Did not match")
    }
  }
  const history=useHistory()
 
  return (    
      <div className={login ? "modal-bg bg-active" : "modal-bg"}>
        <div className="modal">
          <img src="HomePage/logo.png" alt="" />
          <h2 className="line-height">Welcome to Pintrest</h2>
          <p className="line-height">Find new ideas to try</p>
          <div className="input-tags">
            <input onChange={(e)=>{handleChange(e)}} type="text" name="email" placeholder="Email" />
            <br />
            <input onChange={(e)=>{handleChange(e)}}
              type="password"
              name="password"
              placeholder="password"
            />
            <br />
            <p>Forgotten your password? </p>
          </div>

          <button onClick={checkLogin} style={{ background: "#D50C22" }} className="sign-btn">
            Continue
          </button>
          <p>or</p>
          <button style={{ background: "#1877F2" }} className="sign-btn">
            Continue with Facebook
          </button>
          <span onClick={handleLogin} className="close-modal">
            X
          </span>
        </div>
      </div>
    
  );
}

export default Login
