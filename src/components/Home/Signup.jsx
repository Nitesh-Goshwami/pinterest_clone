import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext } from "react";
import "./signup.css";
function Signup({ signup, handleSignup }) {
  const { handleAuth } = useContext(AuthContext);
  // const [modal,setModal]=useState(true)
  const history = useHistory();
  const redirect = () => {
    history.push("/home-signed");
    handleAuth();
    return <Redirect to="/home-signed" />;
  };
  return (
    <div className={signup ? "modal-bg bg-active" : "modal-bg"}>
      <div className="modal">
        <img src="HomePage/logo.png" alt="" />
        <h2 className="line-height">Welcome to Pintrest</h2>
        <p className="line-height">Find new ideas to try</p>
        <div className="input-tags">
          <input type="text" name="email" placeholder="Email address" />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Create a password"
          />
          <br />
          <input type="Number" name="age" placeholder="Age" />
          <br />
        </div>

        <button
          onClick={redirect}
          style={{ background: "#D50C22" }}
          className="sign-btn"
        >
          Continue
        </button>
        <p>or</p>
        <button style={{ background: "#1877F2" }} className="sign-btn">
          Continue with Facebook
        </button>
        <span onClick={handleSignup} className="close-modal">
          X
        </span>
      </div>
    </div>
  );
}

export default Signup;
