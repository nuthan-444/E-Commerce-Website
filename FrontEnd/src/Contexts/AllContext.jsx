import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const AllContext = createContext();


export const AllContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userData,setUserData] = useState(()=>{
        const userdetail = sessionStorage.getItem("userData");
        return userdetail ? JSON.parse(userdetail) : 
        {
            _id: "0", email: "@gmail.com",role:"none"
        };
    });




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



    return (
        <AllContext.Provider
            value={{
                //stores is user login or not
                isLogin,
                setIsLogin,
                
                //STORES User data in the form of object {}
                userData,
                setUserData
            }}>

            {children}
        </AllContext.Provider>
    )

}



export const UseAllContext = () => useContext(AllContext)
