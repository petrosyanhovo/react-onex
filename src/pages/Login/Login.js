import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import './login.css'
import LoginImg from '../Login/img/rocket.png'
import { useForm } from "react-hook-form";


const Login = () => {

const [input, setInput] = useState('');
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);

  return (
    <div className='login'>
        <div className='login-image'>
            <img src={LoginImg}></img>
        </div>
        <div className='login-content'>
            <h1 className='login-title'>ՄՈՒՏՔ</h1>
            <h2 className='login-text'>Մուտքագրեք Ձեր տվյալները</h2>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <input type = 'text' placeholder='Էլ. հասցե' {...register('name', { required: true})}></input>
                {errors.name && errors.name.type === "required" && <span>Այս դաշտն անհրաժեշտ է լրացնել:</span>}
                <input type = 'password' placeholder='Գաղտնաբառ'></input>
                {errors.name && errors.name.type === "required" && <span>Այս դաշտն անհրաժեշտ է լրացնել:</span>}
                <Button buttonName = 'ՄՈՒՏՔ' />
            </form>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input id="name" {...register('name', { required: true, maxLength: 30 })} />
      {errors.name && errors.name.type === "required" && <span>This is required</span>}
      {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
      <input type="submit" />
    </form> */}
        </div>

    </div>
  )
}

export default Login