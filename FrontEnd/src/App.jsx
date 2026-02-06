import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import Order from './Pages/Order'
import Cart from './Pages/Cart'
import Admin from './Pages/Admin'
import { AllContextProvider } from './Contexts/AllContext'



function App() {
  
  return (
    <>
      <BrowserRouter>
        <AllContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Order' element={<Order />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Admin' element={<Admin />} />:  
            <Route path='/Profile' element={<Profile />} />
          </Routes>
        </AllContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
