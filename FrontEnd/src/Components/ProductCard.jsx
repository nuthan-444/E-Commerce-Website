import React from "react";
import "./Style/ProductCard.css";
import { UseAllContext } from "../Contexts/AllContext";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// {image="public/vite.svg",productName="jkasbdjkbad",productDescription="distinctio totam dolor unde numquam optio. Cupiditate molestiae officiis repellat quaerat minima quisquam illum quod facilis sunt.",ratings=5,price=5000,discountPrice=30}
const ProductCard = ({_id,url,productName,productDescription,ratings,price,discountPrice}) => {
    
  let offer = (((price - discountPrice) / price) * 100).toFixed(2);

      const {userData,allCartProduct,setAllCartProduct} = UseAllContext();



    //add to card for user
    const addToCart = async(_id) => {
      try{
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,{email:userData.email,_id:_id});
        if(response.data.message==="successfully added."){
          
          alert("Product Added to cart.");
          setAllCartProduct(prevData => [...prevData,response.data.addedCart]);
        }
      }catch(error) {
        alert("Failed to add. try again !")
        console.log(error)
      }
    }


    // deleting the product from DB for Admin
    const deleteProductFromDB = async(_id) => {
      try{
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/product/${_id}`);
        if(response.data.message==="Successfully Deleted.") {
          alert("deleted successfully.");
        }
      } catch(error) {
        alert("Failed to delete! Try agian");
      }
    }




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

        { userData.role===import.meta.env.VITE_ADMIN_ROLE ?
          <div className='trash-icon-delete-cart-product' title='delete' onClick={()=>deleteProductFromDB(_id)}><i className="fa-solid fa-trash"></i></div>
          : <></>
        }
        <button className="add-to-cart-btn" onClick={() => addToCart(_id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
