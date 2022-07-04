import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./register.css";
import RegisterImg from "../Register/register_img/register.png";
import { useForm } from "react-hook-form";
<<<<<<< HEAD
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Register = () => {
  const [input, setInput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [value, setValue] = useState();

  return (
    <div className="register">
      <div className="register-image">
        <img src={RegisterImg}></img>
      </div>
      <div className="register-content">
        <h1 className="register-title">ԳՐԱՆՑՎԵԼ</h1>
        <h2 className="register-text">
          Միացեք օնլայն գնումներ կատարող <br /> հազարավոր օգտատերերին
        </h2>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Էլ. հասցե"
            {...register("name", { required: true })}
          ></input>
          {errors.name && errors.name.type === "required" && (
            <span>Այս դաշտն անհրաժեշտ է լրացնել:</span>
          )}
          <input type="phone" placeholder="11223344"></input>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
          {errors.name && errors.name.type === "required" && (
            <span>Այս դաշտն անհրաժեշտ է լրացնել:</span>
          )}
          <input type="password" placeholder="Գաղտնաբառ"></input>
          {errors.name && errors.name.type === "required" && (
            <span>Այս դաշտն անհրաժեշտ է լրացնել:</span>
          )}
          <input type="password" placeholder="Կրկնել Գաղտնաբառը"></input>
          {errors.name && errors.name.type === "required" && (
            <span>Այս դաշտն անհրաժեշտ է լրացնել:</span>
          )}
          <Button buttonName="ՄՈՒՏՔ" />
        </form>
      </div>
=======
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
>>>>>>> a06e31f2aa80537b4ed152be7480c1276c4b86b5
    </div>
  );
};

export default Register;
