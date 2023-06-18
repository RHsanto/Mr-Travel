import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../common/Navbar";
// import payments from "../../../images/payments.jpg";

const Payment = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    fetch(` https://mr-travel-server.onrender.com/booked/${id}`)
      .then(res => res.json())
      .then(data => setPayment(data));
  },[id]);
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="row">
         
          <div className="col-lg-6">
           <div>
           <img src={payment?.img} 
            alt="img" className="rounded" />
           </div>
           <div className="mt-3">
            <h2>{payment?.hotelName}</h2>
            <h5> Guest {payment?.guest}, Room {payment?.room }</h5>
            <div className="d-flex align-items- my-4">
              <h5>Price : {payment?.sum}</h5>
              <button className="ms-5 btn btn-primary">Payment</button>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
