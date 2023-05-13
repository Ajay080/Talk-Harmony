import React, { useState } from "react";
import "./loginPage.css";
import Logo from "../student.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/signin", {
        email_or_username: emailOrUsername,
        password: password,
      });
      if (response.data.message) {
        navigate("/Home");
      }
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="newApp">
      <div className="loginBox">
        <img src={Logo} alt="" />
        <h1>TalkHarmony</h1>
      </div>
      <div className="loginForm">
        <form onSubmit={handleSubmit} action="#">
          <input
            type="text"
            name="emailOrUsername"
            placeholder="Email or Username"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input className="sub" type="submit" value="Login" />
        </form>
        {error && <div className="error">{error}</div>}
      </div>
      <div className="Questions">
        <Link to="/ForgetPage">Forgot Password?</Link>
        <br />
        <Link to="/SignupPage">New User? SignUp Now</Link>
      </div>
      <button onClick={()=> {navigate("/Home")}}></button>
    </div>
  );
}
