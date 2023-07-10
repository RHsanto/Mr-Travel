import React from 'react';
import payment from '../../../images/3226836.jpg'
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
 
  return (
    <div className='container mx-auto'>
     <div className="row d-flex align-items-center">
      <div className="col-lg-6">
        <h2>Payment Successful</h2>
        <p>Thank you for choosing MR.Travel.</p>
        <Link to='/'>
         <button className='confirm'>Back Home</button>
          
        </Link>
      </div>
      <div className="col-lg-6">
      <img src={payment} alt="" srcset="" className='w-100' />
      </div>

     </div>
    </div>
  );
};

export default PaymentSuccess;