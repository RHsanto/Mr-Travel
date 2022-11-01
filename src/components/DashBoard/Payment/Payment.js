import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../common/Navbar";
import payments from "../../../images/payments.jpg";

const Payment = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    fetch(`https://young-cliffs-75372.herokuapp.com/booked/${id}`)
      .then(res => res.json())
      .then(data => setPayment(data));
  });
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <h1>Payment here</h1>
            <h5>{payment?.price ? <>BDT{payment?.price}</> : <></>}</h5>
            <h5>{payment?.sum ? <>${payment?.sum}</> : <></>}</h5>
          </div>
          <div className="col-lg-6">
            <img src={payments} alt="img " className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
