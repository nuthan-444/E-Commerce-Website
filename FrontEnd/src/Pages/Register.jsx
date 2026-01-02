import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import './Style/Register.css'

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (password == confirmPassword) {
      setEmail("");
      setPassword(""); 
      setConfirmPassword("");
      setUsername("");
    }
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className='register-container'>
          <h1 className='register-title'>Register</h1>
          <div className='register-email-div'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='register-password-div'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='register-confirmPassword-div'>
            <label htmlFor="confirmpassword">confirm Password</label>
            <input type="password" name="confirmpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <div className='register-username-div'>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='register-btn-div'><button>Register</button></div>
          <div className='already-have-an-account'>
            <pre onClick={() => navigate("/Login")}><span style={{ color: "rgba(0, 140, 255, 1)", fontWeight: "bold" }}> already have an account an account!</span></pre>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
