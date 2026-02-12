import React from 'react'
import './Style/CartProductCard.css'
import { UseAllContext } from "../Contexts/AllContext";
import axios from "axios";

const CartProductCard = ({_id,url,productName,productDescription,ratings,price,discountPrice}) => {
    
  let offer = (((price - discountPrice) / price) * 100).toFixed(2);




  return (
    <div className="product-card">

      <div className="discount-badge">
        {offer}% OFF
      </div>

      <img src={url} alt={productName} className="product-image" />

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


        <button className="add-to-cart-btn">
          Buy
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
