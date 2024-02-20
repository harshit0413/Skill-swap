import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./LoginPage.css";
import firebase from "../../firebase-config";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/dashboard");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="other">
      <div className="login-page">
        <input
          placeholder="Email"
          type="text"
          className="input"
          onChange={handleEmail}
        />
        <br></br>
        <input
          placeholder="Password"
          type="password"
          className="input"
          onChange={handlePassword}
        />
        <br></br>
        <button className="buttonlogin" onClick={handleLogin}>
          Login
        </button>
        <div className="sign-up-text">
          Don't have an account?{" "}
          <span className="input">
            {" "}
            <Link to="/register" className="reallyobscure">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
