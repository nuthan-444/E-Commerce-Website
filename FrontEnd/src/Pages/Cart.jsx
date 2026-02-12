import React, { useEffect, useRef } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CartProductCard from '../Components/CartProductCard'
import { UseAllContext } from '../Contexts/AllContext'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import axios from 'axios'


const Cart = () => {
    const {isLogin,setIsLogin,userData,allCartProduct,setAllCartProduct} = UseAllContext();
    const navigate = useNavigate();
    const fetchedCartData = useRef(false);


  const getCartProduct = async() => {
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart/${userData.email}`);
        if(response.data.message==="Successfully Fetched.") {
          setAllCartProduct(response.data.cartProduct);
        }
    } catch(error) {
      alert("Axios Error,Try Again");
      console.log(error)
    }
  }

useEffect(() => {
    if(fetchedCartData.current){ return;}

    fetchedCartData.current = true;
    getCartProduct();

}, [fetchedCartData,userData]);





  return (
    <>
    {isLogin ? 
    <div>
      <Header />
          { allCartProduct.length>0 ?
            allCartProduct.map((item) => (
              <CartProductCard key={item._id} _id={item._id} url={item.url} 
          productName={item.productName} productDescription={item.productDescription} ratings={item.ratings} price={item.price} discountPrice={item.discountPrice} />
            )):<div>No Product added</div>
          }
      <Footer />
    </div> : <Login />}



    </>
  )
}

export default Cart
