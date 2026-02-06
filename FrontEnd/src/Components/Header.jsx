import React from 'react'
import './Style/Header.css'
import Button from './Button'
import {Link} from "react-router-dom"
import { UseAllContext } from '../Contexts/AllContext'

const Header = () => {
  const {isLogin,setIsLogin,userData} = UseAllContext();
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

{isLogin?
      <div className='routes-home-cart-order'>
        {userData.role===import.meta.env.VITE_ADMIN_ROLE?
        <Link to="/Admin"><p>Admin</p></Link>
        :<Link to="/Profile"><p>Profile</p></Link>
        }
      </div>
:<div></div>
      }

      {/* Add toggle btn  */}

      {!isLogin ? 
      <div className='login-signup-btn'>
        <Link to="/Login"><Button content={"Login"}/></Link>
        <p>/</p>
        <Link to="/Register"><Button content={"Signup"}/></Link>
      </div> 
      : <div>
        <button onClick={() => { 
          setIsLogin(false)
          sessionStorage.setItem("userData",{_id: "69809707369e6b93217eee68", email: "nuthu@gmail.com",role:"none"});
        }
          }>Logout</button>
        </div>}
    </div>
  )
}

export default Header
