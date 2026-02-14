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
      </div>
      <Footer />
    </div> : <Home />
  }
  </>
  )
}

export default Profile
