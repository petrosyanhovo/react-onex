import { useState } from "react";

export default function Auth (value) {

    const [isAuth, setIsAuth] = useState(value);

    function login() {
        setIsAuth(true)
    }

    function logout() {
        setIsAuth(false)
    }

    return [isAuth, login, logout];
}


  