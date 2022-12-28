import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { PerosnalDetails } from './components/PerosnalDetails';


function App() {
  const [data,setData]=useState({
    pd:{},
    pdDisplay:true,
    bd:{},
    bdDisplay:false,
    ld:{},
    ldDisplay:false
  })
  return (
    <div style={{
      margin:"5vw 10vw 5vw 10vw"
    }} >
      <h1 className='text-center text-primary'>Get Loan In Sec</h1>
      <PerosnalDetails setData={setData} data={data} />
    </div>
  );
}

export default App;
