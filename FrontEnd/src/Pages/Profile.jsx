import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Style/Profile.css'
import defaultProfilePic from '/Photos/573323465_1219825463302212_7278921664109726296_n.jpg'
import { UseAllContext } from '../Contexts/AllContext'
import Home from "../Pages/Home"
import axios from 'axios'



const Profile = () => {
  const {userData,isLogin,setIsLogin} = UseAllContext();

  const deleteAccount = async() => {
    try{
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/register/_id/${userData._id}`);
      if(response.data.message==="deleted successfully"){
        setIsLogin(false);
        sessionStorage.removeItem("userData");
        return;
      }
      if(response.data.message==="No such user."){
        alert("there is no user.")
        return;
      }
      alert("Server Issue ! Try again");
    }catch(error){
      alert("Try again");
      console.log(error);
    }
  }





  return (
    <>
    {isLogin ? 
      <div>
      <Header />
      <div className='profile-div'>
          <div className='user-pic'><img src={defaultProfilePic} alt="" /></div>
          <div className='userdata'>
            <label htmlFor="">Username: </label>
            <pre> {userData.username}</pre>
          </div>
          <div className='userdata'>
            <label htmlFor="">Email: </label>
            <pre> {userData.email}</pre>
          </div>
          <div className='userdata'>
            <label htmlFor="">UserID: </label>
            <pre> {userData._id}</pre>
          </div>
          <button title='delete account forever' className='delete-account' onClick={() => deleteAccount()}>Delete account</button>
      </div>
      <Footer />
    </div> : <Home />
  }
  </>
  )
}

export default Profile
