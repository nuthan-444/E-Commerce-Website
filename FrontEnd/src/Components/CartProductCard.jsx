import React from 'react'
import './Style/CartProductCard.css'
import { UseAllContext } from "../Contexts/AllContext";
import axios from "axios";

const CartProductCard = ({email,prodID,url,productName,productDescription,ratings,price,discountPrice}) => {
    
  let offer = (((price - discountPrice) / price) * 100).toFixed(2);



  const removeFromCart = async(email,prodID) => {
      try{
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/cart/removeoneproductfromcart/${prodID}/${email}`);
        if(response.data.message==="Removed succussfully."){
          alert("Product has been removed from the Cart");
          return;
        }
        alert("Try again");
      }catch(error) {
          alert("Axios error");
          console.log(error)
      }
  }
    
  




  return (
    <div className="product-card">

      <div className="discount-badge">
        {offer}% OFF
      </div>

      <img src={url} alt={productName} loading='lazy' className="product-image" />

      <div className="product-info">
        <h3 className="product-name">{productName}</h3>
        <p className="product-desc">{productDescription}</p>

        <div className="ratings">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < ratings ? "star filled" : "star"}
            >
              ★
            </span>
          ))}
        </div>


        <div className="price">
          <span className="discounted-price">₹{discountPrice}</span>
          <span className="actual-price">₹{price}</span>
        </div>

          <div className='trash-icon-delete-cart-product' title='remove' onClick={()=>removeFromCart(email,prodID)}><i className="fa-solid fa-trash"></i></div>

        <button className="add-to-cart-btn">
          Buy
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
