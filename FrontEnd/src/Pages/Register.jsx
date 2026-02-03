import React, { useRef, useState , useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import './Style/Register.css'
import { UseAllContext } from "../Contexts/AllContext";
import Home from "./Home";



const Register = () => {
  const {isLogin,setIsLogin,userData,setUserData} = UseAllContext();
  const navigate = useNavigate();
  const [invalidMessage,setInvalidMessage] = useState("");
  const [showInvalidMessage,setShowInvalidMessage] = useState(false);
  const invalidMessageDivRef = useRef();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameValue, setUsernameValue] = useState("");

  

  useEffect(() => {
    if (!showInvalidMessage) return;

    const timer = setTimeout(() => {
      setShowInvalidMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showInvalidMessage]);

  async function submitHandler(e) {
    e.preventDefault();
    if (passwordValue != confirmPassword) {
        setInvalidMessage("password is not matching !");
        setShowInvalidMessage(true);
        return;
      }
    if (usernameValue.length < 5) {
      setInvalidMessage("Username Must be greater than 5 characters .");
      setShowInvalidMessage(true);
      return;
    }

    try{
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`,{email:emailValue,password:passwordValue,username:usernameValue});
      if(response.data.message==="successfully registered"){
          setUserData(response.data.user);
          console.log(userData);
          setIsLogin(true);
          navigate("/");
      } else {
      setEmailValue("");
      setPasswordValue(""); 
      setConfirmPassword("");
      setUsernameValue("");
      }
    } catch(error) {
      alert("Failed to Create account! try agian");
      console.log(error)
    }
  }


  return (
    <>
      {!isLogin ? <form onSubmit={submitHandler} id="register-form">
        <div className='register-container'>
          <h1 className='register-title'>Register</h1>
          <div className='register-email-div'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
          </div>
          <div className='register-password-div'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
          </div>
          <div className='register-confirmPassword-div'>
            <label htmlFor="confirmpassword">confirm Password</label>
            <input type="password" name="confirmpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <div className='register-username-div'>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} />
          </div>
          <div className='register-btn-div'><button>Register</button></div>
          <div className='already-have-an-account'>
            <pre onClick={() => navigate("/Login")}><span style={{ color: "rgba(0, 140, 255, 1)", fontWeight: "bold" }}> already have an account an account!</span></pre>
          </div>
        </div>
      </form> : <Home />}
      {showInvalidMessage && <div className="display-invalid-message" ref={invalidMessageDivRef} >{invalidMessage}</div>}
    </>
  );
};

export default Register;
