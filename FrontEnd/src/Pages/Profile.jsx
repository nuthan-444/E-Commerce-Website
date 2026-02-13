import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Style/Profile.css'
import defaultProfilePic from '../../public/Photos/573323465_1219825463302212_7278921664109726296_n.jpg'
import { UseAllContext } from '../Contexts/AllContext'
import Home from "../Pages/Home"
const Profile = () => {
  const {userData,isLogin} = UseAllContext();
  return (
    <>
    {isLogin ? 
      <div>
      <Header />
      <div className='profile-div'>
          <div className='user-pic'><img src={defaultProfilePic} alt="" /></div>
          <div className='userdata'>
            <label htmlFor="">Username:</label>
            <p>{userData.username}</p>
          </div>
          <div className='userdata'>
            <label htmlFor="">Email:</label>
            <p>{userData.email}</p>
          </div>
          <div className='userdata'>
            <label htmlFor="">UserID:</label>
            <p>{userData._id}</p>
          </div>
      </div>
      <Footer />
    </div> : <Home />
  }
  </>
  )
}

export default Profile
