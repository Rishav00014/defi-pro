import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

//e first name, last name, age, mobile no. & other personal
const data =[
  {
    lable :"First Name",
    placeholder: "Enter First Name",
    type: "text",
    name:"firstName"
  },
  {
    lable :"Last Name",
    placeholder: "Enter Last Name",
    type: "text",
    name:"lastName"
  },
  {
    lable :"Age",
    placeholder: "Enter Age",
    type: "text",
    name:"age"
  },
  {
    lable :"Mobile Number",
    placeholder: "Enter mobile number",
    type: "tel",
    name:"mobile"
  },
  {
    lable :"Address",
    placeholder: "Enter your address",
    type: "text",
    name:"address"
  }
]
const Tuple = (props)=>{
  
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="text-success">{props.info.lable}</Form.Label>
      <Form.Control 
        required 
        type={props.info.type} 
        placeholder={props.info.placeholder} 
        name={props.info.name}  
        onChange={props.handleChange}
      />  
    </Form.Group>
  )
}

export const PerosnalDetails = (props) => {
  const [pd,setPd] =useState({
    firstName:"",
    lastName:"",
    age:"",
    mobile:"",
    address:""
  })
  const handleChange = ({currentTarget:Input})=>{
    setPd({...pd,[Input.name]:Input.value});
  }
  const handleClick =(e)=>{
    e.preventDefault();
    props.setData({...props.data,pd:pd})
    console.log(pd)
  }
  return (
    <div>
      <h2 className='text-success'>Presonal Details</h2>
      <Form >
        {data.map((elements,index)=>{
          return <Tuple key={index} info={elements} handleChange={handleChange} pd={pd} />
        })}
        <Button className='float-end' variant="success" type="submit" onClick={handleClick}>
          Next
        </Button>
      </Form>
    </div>
  )
}
