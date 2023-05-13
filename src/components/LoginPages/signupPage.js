import React, { useState } from "react";
import "./signupPage.css";
import Logo from "../student.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    date_of_birth: new Date().toISOString().substr(0, 10),
    gender: "",
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/Signup", formData)
      .then((response) => {
        if (response.status === 200){          
           navigate("/Profile");
        } else {
          alert("Invalid credentials")
        }
       
      })
      .catch((error) => {
        console.log(error);
      });
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
            placeholder="ente unique username"
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
          <fieldset>
            <div className="DOB">
              <label htmlFor="dateOfBirth">Date:</label>
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                onChange={handleInputChange}
              />
            </div>
          </fieldset>

          <label className="genderLabel" htmlFor="gender">
            Gender:
          </label>
          <select
            className="gender"
            name="gender"
            id="gender"
            onChange={handleInputChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>

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