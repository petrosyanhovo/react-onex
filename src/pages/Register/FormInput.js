import React, {useState} from 'react'
import './formInput.css'

const FormInput = (props) => {

    const {id, errorMessage, onChange, ...inputProps} = props;
    const [focused, setFocused] = useState(false);

    const handelFocus = (e) => {
        setFocused(true);
    }

  return (
    <div className='formInput'>
        <input
            {...inputProps}
            onChange = {onChange}
            onBlur = {handelFocus}
            // onFocus = {() => 
            //     inputProps.name === "confirmPassword" && setFocused(true)
            // }
            focused = {focused.toString()}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput