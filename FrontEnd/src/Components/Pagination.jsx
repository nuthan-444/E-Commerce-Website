import React, { useState } from 'react'
import './Style/Pagination.css'
import ProductCard from './ProductCard'
import axios from 'axios'
import { useEffect } from 'react'
import { useRef } from 'react'

const Pagination = ({category}) => {

  const fetchedRef = useRef(false);
  const [prodBySingleCategory,setProdBySingleCategory] = useState([]);



  const getProductsById = async() => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/category/${category}`);
        if(response.data.message === "got the products of same category.") {
            setProdBySingleCategory(response.data.cateProd);
        } else {
          alert("Server Issue,try again");
        }
        return;
      } catch(error) {
        // alert("Failed to get products.");
        console.log(error)
      }
  }


useEffect(() => {
  if(!category) return;
  if(fetchedRef.current) {return;}

  fetchedRef.current = true;
  getProductsById();
},[category]);


  return (
    <div className='pagination-container'>
    <h1>{category}</h1>
    <div className='pagination-product-card-container'>
      { prodBySingleCategory.length > 0 ?
        prodBySingleCategory.map((item) => (
          <ProductCard key={item._id} _id={item._id} url={item.url} 
          productName={item.productName} productDescription={item.productDescription} ratings={item.ratings} price={item.price} discountPrice={item.discountPrice}/>
        ))
        : <div>Loading</div>

      }
    </div>
    </div>
  )
}

export default Pagination;
