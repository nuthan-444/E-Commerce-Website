import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { UseAllContext } from '../Contexts/AllContext'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
const Cart = () => {
    const {isLogin,setIsLogin,userData} = UseAllContext();
    const navigate = useNavigate();
  return (
    <>
    {isLogin ? 
    <div>
      <Header />
      <Footer />
    </div> : <Login />}
    </>
  )
}

export default Cart
