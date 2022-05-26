import React from 'react';
import Navbar from '../common/Navbar';

const AddBooking = () => {
  return (
    <div>
     <Navbar/>
     <div className="container py-5">
       <div className="row">
         <div className="col-lg-8">
         <h4>Enter Traveler Details </h4>
         </div>
       </div>
     </div>
    </div>
  );
};

export default AddBooking;