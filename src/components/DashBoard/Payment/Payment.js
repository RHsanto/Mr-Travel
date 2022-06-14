import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../common/Navbar';


const Payment = () => {
  const{id}=useParams()
  const [payment,setPayment]=useState([])

  useEffect(()=>{
    fetch(`https://young-cliffs-75372.herokuapp.com/booked/${id}`)
    .then(res=>res.json())
    .then(data=>setPayment(data))
  })
  return (
    <div>
      <Navbar/>
      <div className="container my-5">
      <h1>Payment here</h1>
      <h5>{payment?.price ? <>BDT{payment?.price}</> : <></> }</h5>
      <h5>{payment?.sum ? <>${payment?.sum}</> : <></> }</h5>
      </div>
    </div>
  );
};

export default Payment;