import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { UseAllContext } from '../Contexts/AllContext'
import Login from './Login'

const Order = () => {
  const {isLogin,setIsLogin,userData} = UseAllContext();  
  
  return (
    <>
    {(isLogin && userData!=null) ? <div>
      <Header />
      <Footer />
    </div> : <Login />}
    </>
  )
}

export default Order
