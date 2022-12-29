import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

//Loan Application details (various form fields like loan amount, interest rate, loan tenure etc.)


const data =[
  {
    lable :"Loan Amount",
    placeholder: "Enter Loan Amount",
    type: "text",
    name:"loanAmount"
  },
  {
    lable :"Interest rate",
    placeholder: "Enter Interest rate",
    type: "text",
    name:"interestRate"
  },
  {
    lable :"Loan Tenure",
    placeholder: "Enter Loan Tenure",
    type: "text",
    name:"loanTenure"
  },
  {
    lable :"Credit Score",
    placeholder: "Credit Score",
    type: "text",
    name:"creditScore"
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

export const LoanDetails = (props) => {
  const [ld,setLd] =useState({
    loanAmount:"",
    interestRate:"",
    loanTenure:"",
    creditScore:""
  })
  const handleChange = ({currentTarget:Input})=>{
    setLd({...ld,[Input.name]:Input.value});
  }


  const handleClick =(e)=>{
    e.preventDefault();
    props.setData({...props.data,ld:ld,sDisplay:true})
  }
  return (
    <div>
      <h2 className='text-success'>Loan Details</h2>
      <Form >
        {data.map((elements,index)=>{
          return <Tuple key={index} info={elements} handleChange={handleChange} ld={ld} />
        })}
        <Button className='float-end' variant="success" type="submit" onClick={handleClick}>
          Next
        </Button>
      </Form>
    </div>
  )
}
