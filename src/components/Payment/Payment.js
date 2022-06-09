import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
  const {id}=useParams();
  const[payment,setPayment]=useState([]);
  useEffect(()=>{
    fetch(`https://young-cliffs-75372.herokuapp.com/tours/${id}`)
    .then(res=>res.json())
    .then(data=>setPayment(data))
  })
  return (
    <div>
      <div className="container">
      <h1>Payment{payment?.TourName}</h1>
      </div>
    </div>
  );
};

export default Payment;