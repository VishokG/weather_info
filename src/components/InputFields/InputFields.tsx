import React, { useState } from 'react'
import { Inputs, InputContainer, SubmitButton } from '../../styled/InputFields.styled';
import "./inputfields.css";

const InputFields = (props:any) => {

    const [data, setData] = useState({
        city: "",
        country: ""
    });

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        props.handleInput(data);
    }

    function handleChange(type: number, e: React.ChangeEvent<HTMLInputElement>) {    
        if(type === 0) {
            setData({
                city: e.target.value,
                country: data.country
            })
        } else {
            setData({
                city: data.city,
                country: e.target.value
            })
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <InputContainer>
                <input placeholder='City' type="text" value={data.city} onChange={(e) => handleChange(0, e)}/>
            </InputContainer>
            <InputContainer>
                <input placeholder='Country' type="text" value={data.country} onChange={(e) => handleChange(1, e)}/>
            </InputContainer>
            <SubmitButton>Submit</SubmitButton>
        </form>
    )
}

export default InputFields;