import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import './register.css'
import RegisterImg from '../Register/register_img/register.png'
import { useForm } from "react-hook-form";
import axios from 'axios';


const Register = () => {


const [user, setUser] = useState({
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
});

const onInPutChange = e => {
  setUser({...user, [e.target.name] : e.target.value})
}

const onSubmit = async(e) => {
  e.preventDefault();
    await axios.post('http://localhost:3000/users', user)
    setUser({
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    })

}

  return (
    <div className='register'>
        <div className='register-image'>
            <img src={RegisterImg}></img>
        </div>
        <div className='register-content'>
            <h1 className='register-title'>ԳՐԱՆՑՎԵԼ</h1>
            <h2 className='register-text'>Միացեք օնլայն գնումներ կատարող <br/> հազարավոր օգտատերերին</h2>
            <form className='register-form' onSubmit = { e => onSubmit(e) } >
                <input 
                        type = 'text' 
                        placeholder='Էլ. հասցե' 
                        value = {user.email}
                        onChange = { e => onInPutChange(e)}
                        name = 'email'
                        required
                        ></input>
                <input 
                        type = 'phone' 
                        placeholder='11223344'
                        value = {user.phone}
                        onChange = { e => onInPutChange(e)}
                        name = 'phone'
                        required
                        ></input>
                <input 
                        type = 'password' 
                        placeholder='Գաղտնաբառ'
                        value = {user.password}
                        onChange = { e => onInPutChange(e)}
                        name = 'password'
                        required
                        ></input>
                <input 
                        type = 'password' 
                        placeholder='Կրկնել Գաղտնաբառը'
                        value = {user.confirmPassword}
                        onChange = { e => onInPutChange(e)}
                        name = 'confirmPassword'
                        required
                        ></input>
                <Button buttonName = 'ՄՈՒՏՔ' />
            </form>
        </div>
    </div>
  )
}

export default Register