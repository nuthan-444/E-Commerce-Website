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
    console.log(category)
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
          <ProductCard key={item._id} url={"https://imgs.search.brave.com/442NJR6704Hii39JFoYhDW-DyjCNKVn7oyCx1aUJmTY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMwMC8zMDAveGlm/MHEvbW9iaWxlL2sv/bC9sLy1vcmlnaW5h/bC1pbWFndGM1Zno5/c3B5c3lrLmpwZWc_/cT05MA"} productName={item.productName} productDescription={item.productDescription} ratings={item.ratings} price={item.price} discountPrice={item.discountPrice}/>
        ))
        : <div>Loading</div>

      }
    </div>
    </div>
  )
}

export default Pagination;
