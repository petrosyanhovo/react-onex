import React, { useState } from "react";
import FormInput from "./FormInput";
import Button from "../../components/Button/Button";
import "./register.css";
import RegisterImg from "../Register/register_img/register.png";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate();

  const [users, setUsers] = useState({
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",   
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      placeholder: "Phone Number",
      // errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: users.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    await axios.post("http://localhost:3000/users", users)
  };

  return (
    <div className="register">

      <div className="register-image">
        <img src={RegisterImg} alt = ""></img>
      </div>
      <div className="register-content">
        <h1 className="register-title">ԳՐԱՆՑՎԵԼ</h1>
        <h2 className="register-text"> Միացեք օնլայն գնումներ կատարող <br /> հազարավոր օգտատերերին </h2>
        
        <form className="register-form" onSubmit={onSubmit}>
          {inputs.map((input) => (
            <FormInput
              key = {input.id}
              {...input}
              defaultValue = {users[input.name]}
              onChange = {onChange}
            />
          ))}
          
          <Button buttonName="ՄՈՒՏՔ" onClick = {() => navigate('/login')} />
          {/* <button onClick = {() => navigate('/login')}>ՄՈՒՏՔ</button> */}
        </form>

      </div>

    </div>
  );
};

export default Register;
