import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { BussinesDetails } from './components/BussinesDetails';
import { LoanDetails } from './components/LoanDetails';
import { PerosnalDetails } from './components/PerosnalDetails';
import axios from 'axios'
axios.defaults.baseURL="http://15.207.113.166:8080/api"

function App() {
  const [data,setData]=useState({
    pd:{},
    pdDisplay:true,
    bd:{},
    bdDisplay:false,
    ld:{},
    ldDisplay:false,
    sDisplay:false,
    sendDisplay:false
  })
  const handleSubmit =async ()=>{
    setData({...data,sendDisplay:true})
    try {
      console.log(data)
      const {data: res} = await axios({
        method:"post",
        url:"/users/",
        headers:{"Content-Type":"application/json"},
        data:data
      });

    } catch (error) {
      if(error.responce && error.responce.status >=400 && error.responce.staus <=500 ){
          console.log(error);
      }
    }
  }
  return (
    <div style={{
      margin:"5vw 10vw 5vw 10vw"
    }} >
      <h1 className='text-center text-primary'>Get Loan In Sec</h1>
      {(data.sendDisplay)?<h5 className="text-light text-center bg-success">Data  Send Sucessfully</h5> :null}
      {(data.pdDisplay)?<PerosnalDetails setData={setData} data={data} />:null}
      {(data.bdDisplay)?<BussinesDetails Details setData={setData} data={data} />:null}
      {(data.ldDisplay)?<LoanDetails setData={setData} data={data} />:null}
      {(data.sDisplay)?<div className='text-center mt-5'><Button  variant="primary" size='lg' type="submit" onClick={handleSubmit}>Submit</Button></div>:null}
    </div>
  );
}

export default App;
