import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Pagination from '../Components/Pagination'
import BigAds from '../Components/BigAds'
const Home = () => {

  return (
    <>
      <Header />
      <BigAds />
      <Pagination category={"Mens Collection"} productDetail={{rating:5}}/>
      <Pagination category={"Womens Collection "}productDetail={{rating:4}}/>
      <Pagination category={"Electronics"} productDetail={{rating:3}}/>
      <Pagination category={"Grocery"} productDetail={{rating:2}}/>

      <Footer />
    </>
  )
}

export default Home
