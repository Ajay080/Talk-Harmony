import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../student.png";
import "./loginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("login_data: ", { username: username, password: password });
      const response = await axios.post("http://127.0.0.1:5000/signin", {
        username: username,
        password: password,
      });
      console.log(response.data);

      if (response.status === 200) {
        navigate("/Home");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
      <button
        onClick={() => {
          navigate("/Home");
        }}
      ></button>
    </div>
  );
}
