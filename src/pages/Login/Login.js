import React, { useState, useEffect } from 'react'
import Button from '../../components/Button/Button'
import './login.css'
import LoginImg from '../Login/login_img/rocket.png'
import { useNavigate } from 'react-router-dom'
import auth from '../../useAuth'
import useAuth from '../../useAuth'


const Login = ({login, isAuth}) => {
  

  const navigate = useNavigate();
  const [focused, setFocused] = useState(false);
  const errorMessage = "Սխալ տվյալներ";

  const [allUsers, setAllUsers] = useState({})
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(json => setAllUsers(json));
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    let isRegistered = allUsers.some(el =>  el.email === user.email) && 
                      allUsers.some(el => el.password === user.password);

    if (isRegistered) {
      login()
      // navigate('/orders')
    } else {
      setFocused(true)
      console.log('by');
    }
  }



  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  return (
    <div className='login'>
        <div className='login-image'>
            <img src={LoginImg} alt = ""></img>
        </div>
        <div className='login-content'>
            <h1 className='login-title'>ՄՈՒՏՔ</h1>
            <h2 className='login-text'>Մուտքագրեք Ձեր տվյալները</h2>
            <form className='login-form' onSubmit={e => onSubmit(e)}>
                <input type = 'text' placeholder='Էլ. հասցե' name = 'email' onChange={(e) => onChange(e)}></input>
                <input type = 'password' placeholder='Գաղտնաբառ' name = 'password' onChange={(e) => onChange(e)}></input>
                <span style={{color: 'red'}} focused = {focused.toString()}>{errorMessage}</span>
                
                 <Button buttonName = 'ՄՈՒՏՔ' onClick = {login} />
            
            </form>
        </div>

    </div>
  )
}

export default Login