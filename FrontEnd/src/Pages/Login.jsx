import React from 'react'
import { useState,useRef,useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import './Style/Login.css'
import { UseAllContext } from '../Contexts/AllContext';
import Home from "./Home"
import axios from 'axios';

const Login = () => {
  const {isLogin,setIsLogin,userData,setUserData} = UseAllContext();
  const [invalidMessage,setInvalidMessage] = useState("");
  const [showInvalidMessage,setShowInvalidMessage] = useState(false);
  const invalidMessageDivRef = useRef();
  const navigate = useNavigate();
  const [emailValue,setEmailValue] = useState("");
  const [password,setPassword] = useState("");
  
  



  async function submitHandler(e) {
      e.preventDefault();

      try{
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`,{email:emailValue,password:password});

        if(response.data.message === "Successfully Login"){
          setIsLogin(true);
          navigate("/");
          setUserData(response.data.userData);  //stores in userData variable that stored in sessionStorage
        } else if(response.data.message==="There is no such account in that email") {
          alert("there is no such user.")
        }

      } catch (error) {
          console.log("Axios login error : ",error);
          alert("Login Page : Something went wrong !");
      }
  }




  useEffect(() => {
    if (!showInvalidMessage) return;

    const timer = setTimeout(() => {
      setShowInvalidMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showInvalidMessage]);





  return (
    <>

    {!isLogin ? <form onSubmit={submitHandler} id='login-form'>
      <div className='login-container'>
        <h1 className='login-title'>Login</h1>
        <div className='email-div'>  
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
        </div>
        <div className='password-div'>   
            <label htmlFor="password">Password</label>
            <input type="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='login-btn-div'><button>Login</button></div>
        <div className='dont-have-an-account'>
          <p>forget password?</p>
          <p onClick={() => navigate("/Register")}><span style={{color:"rgba(0, 140, 255, 1)",fontWeight:"bold"}}> create an account</span></p>
        </div>
      </div> 
      </form> : <Home />}


       {showInvalidMessage && <div className="display-invalid-message" ref={invalidMessageDivRef} >{invalidMessage}</div>} 
      </>
  )
}

export default Login
