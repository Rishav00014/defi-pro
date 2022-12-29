import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

//Business details (various form fields like applicant’s business name, GST no, address and other

const data =[
  {
    lable :"Business Name",
    placeholder: "Enter Business Name",
    type: "text",
    name:"businessName"
  },
  {
    lable :" GST Number",
    placeholder: "Enter  GST Number",
    type: "text",
    name:"gstNo"
  },
  {
    lable :"Business Address",
    placeholder: "Enter Business Address",
    type: "text",
    name:"bAddress"
  },
  {
    lable :"Business Turn Over",
    placeholder: "Business Turn Over",
    type: "text",
    name:"bTurnOver"
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

export const BussinesDetails = (props) => {
  const [bd,setBd] =useState({
    businessName:"",
    gstNo:"",
    bAddress:"",
    bTurnOver:""
  })
  const handleChange = ({currentTarget:Input})=>{
    setBd({...bd,[Input.name]:Input.value});
  }
  const handleClick =(e)=>{
    e.preventDefault();
    props.setData({...props.data,bd:bd,bdDisplay:false,ldDisplay:true})
    console.log(bd)
  }
  return (
    <div>
      <h2 className='text-success'>Business Details</h2>
      <Form >
        {data.map((elements,index)=>{
          return <Tuple key={index} info={elements} handleChange={handleChange} bd={bd} />
        })}
        <Button className='float-end' variant="success" type="submit" onClick={handleClick}>
          Next
        </Button>
      </Form>
    </div>
  )
}
