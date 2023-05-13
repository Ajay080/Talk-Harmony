import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../student.png";
import "./signupPage.css";

export default function SignupPage() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form_data = formData;
    delete form_data.confirm_password;

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/signup",
        form_data
      );

      if (response.status === 201) {
        navigate("/Profile");
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err.response);
      if (err.response.data.message === "validation_error") {
        let e = "";
        for (const [k, v] of Object.entries(err.response.data.data.errors)) {
          e += `${k}: ${v[0]}\n`;
        }
        setError(e);
      }
    }
  };

  return (
    <div className="newApp">
      <div className="loginBox">
        <img src={Logo} alt="" />
        <h1>TalkHarmony</h1>
      </div>
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          <div className="names">
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First name"
              onChange={handleInputChange}
            />
            <input
              className="lName"
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last name"
              onChange={handleInputChange}
            />
          </div>

          <input
            type="text"
            id="username"
            name="username"
            placeholder="enter unique username"
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email address"
            onChange={handleInputChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={handleInputChange}
          />
          {error && <div className="error">{error}</div>}
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>

      <p className="policyPara">
        BY CLICKING SIGNUP YOU AGREE TO OUR TERMS, PRIVACY POLICIES AND COOKIE
        POLICIES. YOU MAY RECIE
      </p>
    </div>
  );
}
