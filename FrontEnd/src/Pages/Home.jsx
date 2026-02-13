import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Pagination from '../Components/Pagination'
import BigAds from '../Components/BigAds'
import axios from 'axios'
import { useEffect } from 'react'
import { UseAllContext } from '../Contexts/AllContext'
import { useRef } from 'react'
import './Style/Home.css'


const Home = () => {

  const {allCategory,setAllCategory} = UseAllContext();
  const fetchedRef = useRef(false);


  async function fetchAllCategoriesFromBackend() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/category`);
        if(response.data.message==="fetch successfully.") {
            setAllCategory(response.data.category);
        }
    } catch(error) {
        alert("failed to fetch,Try to login again");
        console.log(error);
    }
  }


  useEffect(()=>{
    if(fetchedRef.current){ return;}

    fetchedRef.current = true;
    fetchAllCategoriesFromBackend();
  },[])


  return (
    <>
      <Header />
      <BigAds />
      {
        (allCategory && allCategory.length > 0) ? 
        allCategory.map((cate,idx) => (
          <div key={idx}>
            <Pagination category={cate}/>
          </div>
        ))
        : <div>
          loading
          </div>
      }
      <Footer />
    </>
  )
}

export default Home
