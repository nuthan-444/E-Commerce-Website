import React, { useEffect } from 'react'
import "./Style/AddProd.css"
import { useState } from 'react';
import { UseAllContext } from '../Contexts/AllContext'
import axios from 'axios';



const AddProd = () => {
    const {prodDetails, setProdDetails} = UseAllContext();

    //product details input
    const [prodNameInput,setProdNameInput] = useState("");
    const [productDescriptionInput,setProductDescriptionInput] = useState("");
    const [categoryInput,setCategoryInput] = useState("");
    const [priceInput,setPriceInput] = useState("");
    const [discountPriceInput,setDiscountPriceInput] = useState("");
    const [ratings,setRatings] = useState("0");
    const [url,setUrl] = useState("");


    async function toTheProductDetailsInDataBase(prodDetails) {
        try{
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/product`,{productName:prodDetails.productName, productDescription:prodDetails.productDescription, category:prodDetails.category, price:prodDetails.price, discountPrice:prodDetails.discountPrice, offer:prodDetails.offer, ratings:prodDetails.ratings, url:prodDetails.url});
            if(response.data.message==="successfully created."){
                alert(response.data.prodDetailsBack.productName+" added successfully");
            }
        } catch(error) {
            alert("something went wrong, try again!");
            console.log(error)
        }
    }




   async function storeAllProdDetail(e) {
        e.preventDefault();
        setProdDetails({
            productName:prodNameInput,
            productDescription:productDescriptionInput,
            category:categoryInput,
            price:Number(priceInput),
            discountPrice:Number(discountPriceInput),
            ratings:Number(ratings),
            url:url
        });
    }


return (
    <>
    <div className='Addprod'> <center><h2>Add Product Detailes</h2></center>

    <form onSubmit={(e) => storeAllProdDetail(e)}>

            <div className='prod-details'>
                <div className='prod-detail-div'><label htmlFor="prodImgURL"> URL: <input type="text" name='prodImgURL' placeholder='enter url of the image' required value={url} onChange={(e)=>setUrl(e.target.value)}/></label></div>
                <div className='prod-detail-div'><label htmlFor="prodname"> Name: <input type="text" name='prodname' placeholder='ex: Watch' required value={prodNameInput} onChange={(e)=>setProdNameInput(e.target.value)}/></label></div>
                <div className='prod-detail-div'><label htmlFor="proddes"> Description: <input type="text" name='proddes' placeholder='ex: Write about watch' required value={productDescriptionInput} onChange={(e)=>setProductDescriptionInput(e.target.value)}/></label></div>
                <div className='prod-detail-div'><label htmlFor="prodcategory"> Category: <input type="text" list='categories' name='prodcategory' placeholder='ex: Electronics or Groccessry' required value={categoryInput} onChange={(e)=>setCategoryInput(e.target.value)}/></label></div>
                <datalist id="categories">
                  <option value="Electronics" />
                  <option value="Mens Collection" />
                  <option value="Womens Collection" />
                  <option value="Grocery" />
                </datalist>
                <div className='prod-detail-div'><label htmlFor="prodprice"> Price: <input type="number" name='prodprice' placeholder='ex: ₹100' required value={priceInput} onChange={(e)=>setPriceInput(e.target.value)}/></label></div>
                <div className='prod-detail-div'><label htmlFor="proddiscountPrice"> Discount Price: <input type="number" name='proddiscountPrice' placeholder='ex: ₹50' required value={discountPriceInput} onChange={(e)=>setDiscountPriceInput(e.target.value)}/></label></div>
                <div title='given by user' className='prod-detail-div'><label htmlFor="prodratings"> Ratings: <input style={{cursor:"not-allowed"}} type="number" readOnly name='prodratings' placeholder='this will be given by user' value={ratings} onChange={(e)=>setRatings(e.target.value)}/></label></div>
            </div>

        <div className='add-prod-btn-admin-div'>
        <button className='add-prod-btn-admin' type='reset'>Reset</button>
        <button className='add-prod-btn-admin' type='submit'>Preview</button>
        <button className='add-prod-btn-admin' type='submit'  onClick={() => toTheProductDetailsInDataBase(prodDetails)}>Add to Database</button>
        </div>

        </form>
    </div>
    </>
)
}

export default AddProd
