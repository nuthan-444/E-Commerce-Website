import React, { useState } from 'react'
import './Style/Pagination.css'
import ProductCard from './ProductCard'

const Pagination = ({category}) => {


  return (
    <div className='pagination-container'>
    <h1>{category}</h1>
    <div className='pagination-product-card-container'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>


    </div>
    </div>
  )
}

export default Pagination
