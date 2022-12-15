import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../common/Navbar";
import payments from "../../../images/payments.jpg";

const Payment = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    fetch(` https://mr-travel-server.onrender.com/booked/${id}`)
      .then(res => res.json())
      .then(data => setPayment(data));
  });
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <h3>Payment Gateway is coming soon...</h3>
            <img src={payments} alt="img " className="w-100" />
            
          </div>
          {/* <div className="col-lg-6">
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
