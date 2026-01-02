import React from 'react'
import './Style/Header.css'
import Button from './Button'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='outer-layer-header'>

      <div className='website-name'>
        E-commerce
      </div>

      <div className='routes-home-cart-order'>
        <Link to="/"><p>Home</p></Link>
        <Link to="/Cart"><p>Cart</p></Link>
        <Link to="/Order"><p>Order</p></Link>
      </div>

      <div className="search-bar-div">
          <input type="search" name="search" id="search" placeholder='Search'/>
      </div>

      {/* Add toggle btn  */}

      <div className='login-signup-btn'>
        <Link to="/Login"><Button content={"Login"}/></Link>
        <p>/</p>
        <Link to="/Register"><Button content={"Signup"}/></Link>
      </div>
    </div>
  )
}

export default Header
