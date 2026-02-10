import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const AllContext = createContext();


export const AllContextProvider = ({ children }) => {
    const navigate = useNavigate();

    //fetched the user data from sessionStorage if not set dummy data
    const [userData,setUserData] = useState(()=>{
        const userdetail = sessionStorage.getItem("userData");
        return userdetail ? JSON.parse(userdetail) : 
        {
            _id: "0", email: "@gmail.com",role:"none"
        };
    });
    //fetched the user data from sessionStorage if not set dummy data



    //stores is user login or not
    const [isLogin, setIsLogin] = useState(() => {
        const login = sessionStorage.getItem("isLogin");
        return login ? true : false;
    }); 


    useEffect(() => {
        sessionStorage.setItem("isLogin",isLogin);
        if(isLogin === true) {
            sessionStorage.setItem("userData",JSON.stringify(userData));
        }
    },[isLogin]);
    //stores is user login or not




    //Adding Product details by Admin
    const [prodDetails,setProdDetails] = useState({});
    //Adding Product details by Admin


    //storing all category
    const [allCategory,setAllCategory] = useState([]);
    //storing all category


    //storing All Product data from backend 
    // const []
    //storing All Product data from backend 

    // useEffect(() => {
        
    // },[allCategory])



    


    return (
        <AllContext.Provider
            value={{
                //stores is user login or not
                isLogin,
                setIsLogin,
                
                //STORES User data in the form of object {}
                userData,
                setUserData,

                //Stores the admin adding the product details
                prodDetails,
                setProdDetails,

                
                

                //storing all category
                allCategory,setAllCategory
            }}>

            {children}
        </AllContext.Provider>
    )

}



export const UseAllContext = () => useContext(AllContext)
