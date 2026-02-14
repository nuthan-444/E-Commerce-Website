import React, { useEffect, useRef } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CartProductCard from '../Components/CartProductCard'
import { UseAllContext } from '../Contexts/AllContext'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import axios from 'axios'
import './Style/Cart.css'
import emptyImage from '/Photos/empty.png'



const Cart = () => {
    const {isLogin,userData,allCartProduct,setAllCartProduct} = UseAllContext();
    const navigate = useNavigate();
    const fetchedCartData = useRef(false);
    

  const getProduct = async() => {
    try{
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart/allcartproduct/${userData.email}`);
      if(response.data.message==="Successfully Fetched."){
          setAllCartProduct(response.data.cartProducts);
          return;
        }
    } catch(error) {
      alert("Failed to Fetch!");
      console.log(error);
    }
  }



useEffect(()=>{
  getProduct();
},[])





  return (
    <>
    {isLogin ? 
    <div>
      <Header />
        <div className='cart-product'>

          { allCartProduct.length > 0 ? 
            allCartProduct.map((item) => (
              <CartProductCard key={item._id} email={userData.email} prodID={item._id} url={item.url} 
          productName={item.productName} productDescription={item.productDescription} ratings={item.ratings} price={item.price} discountPrice={item.discountPrice} />
            )):<div className='empty-image-div'><img src={emptyImage} alt="No  Cart Products" className='empty-image'/></div>
          }

          </div>
      <Footer />
    </div> : <Login />}



    </>
  )
}

export default Cart
