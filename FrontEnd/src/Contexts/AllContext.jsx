import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const AllContext = createContext();


export const AllContextProvider = ({ children }) => {
    const navigate = useNavigate();
    //stores is user login or not
    const [isLogin, setIsLogin] = useState(() => {
        const login = sessionStorage.getItem("isLogin");
        return login ? true : false;
    }); 
    useEffect(() => {
        sessionStorage.setItem("isLogin",isLogin);
                  console.log(isLogin);
    },[isLogin])

    return (
        <AllContext.Provider
            value={{
                //stores is user login or not
                isLogin,
                setIsLogin,
            }}>

            {children}
        </AllContext.Provider>
    )

}



export const UseAllContext = () => useContext(AllContext)
