import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth () {

    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate()


    useEffect(()=>{
        console.log('useEffect', isAuth);
        if(isAuth){
            navigate('/orders')
        }
    },[isAuth])

    function login() {
        console.log('login')
        setIsAuth(true)
    }

    function logout() {
        console.log(888)
        setIsAuth(false)
    }

    return {isAuth, login, logout};
}


  