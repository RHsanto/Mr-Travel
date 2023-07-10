import React from "react";
import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <div className='container mx-auto my-5'>
     <div className="row d-flex align-items-center">
      <div className="col-lg-6">
        <h2>Payment Failed</h2>
        <p>Thank you for choosing MR.Travel.</p>
        <Link to='/'>
         <button className='confirm'>Back Home</button>
          
        </Link>
      </div>
     

     </div>
    </div>
  );
};

export default PaymentFail;
