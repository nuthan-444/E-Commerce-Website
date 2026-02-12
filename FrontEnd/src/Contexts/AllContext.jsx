import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const AllContext = createContext();


export const AllContextProvider = ({ children }) => {
    const navigate = useNavigate();

    //fetched the user data from sessionStorage if not set dummy data
    const [userData,setUserData] = useState(()=>{
        const userdetail = sessionStorage.getItem("userData");
        return userdetail ? JSON.parse(userdetail) : {};
    });
    //fetched the user data from sessionStorage if not set dummy data



    //stores is user login or not
    const [isLogin, setIsLogin] = useState(() => {
        let getLogin = sessionStorage.getItem("isLogin");
        return getLogin ? JSON.parse(getLogin) : false;
    });

    useEffect(() => {
    sessionStorage.setItem("isLogin",JSON.stringify(isLogin));
        if (isLogin===true) {
            sessionStorage.setItem("userData", JSON.stringify(userData));
        } else {
            sessionStorage.removeItem("userData");
        }
    }, [isLogin,userData]);

    //stores is user login or not




    //Adding Product details by Admin
    const [prodDetails,setProdDetails] = useState({});
    //Adding Product details by Admin


    //storing all category
    const [allCategory,setAllCategory] = useState([]);
    //storing all category




    const [allCartProduct,setAllCartProduct] = useState([]);

    


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
                allCategory,setAllCategory,

                //all cart product
                allCartProduct,setAllCartProduct,
            }}>

            {children}
        </AllContext.Provider>
    )

}



export const UseAllContext = () => useContext(AllContext)
