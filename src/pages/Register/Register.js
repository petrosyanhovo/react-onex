import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import './register.css'
import RegisterImg from '../Register/register_img/register.png'
import { useForm } from "react-hook-form";


const Register = () => {

const [input, setInput] = useState('');
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);

  return (
    <div className='register'>
        <div className='register-image'>
            <img src={RegisterImg}></img>
        </div>
        <div className='register-content'>
            <h1 className='register-title'>ԳՐԱՆՑՎԵԼ</h1>
            <h2 className='register-text'>Միացեք օնլայն գնումներ կատարող <br/> հազարավոր օգտատերերին</h2>
            <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
                <input type = 'text' placeholder='Էլ. հասցե' {...register('name', { required: true})}></input>
                {errors.name && errors.name.type === "required" && <span>Այս դաշտն անհրաժեշտ է լրացնել:</span>}
                <input type = 'phone' placeholder='11223344'></input>
                {errors.name && errors.name.type === "required" && <span>Այս դաշտն անհրաժեշտ է լրացնել:</span>}
                <input type = 'password' placeholder='Գաղտնաբառ'></input>
                {errors.name && errors.name.type === "required" && <span>Այս դաշտն անհրաժեշտ է լրացնել:</span>}
                <input type = 'password' placeholder='Կրկնել Գաղտնաբառը'></input>
                {errors.name && errors.name.type === "required" && <span>Այս դաշտն անհրաժեշտ է լրացնել:</span>}
                <Button buttonName = 'ՄՈՒՏՔ' />
            </form>
        </div>
    </div>
  )
}

export default Register