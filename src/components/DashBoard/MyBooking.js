import React from 'react';
import { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import {RiArrowRightLine} from "react-icons/ri";
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import { useEffect } from 'react';

const MyBooking = () => {
  const{user}=useFirebase();
  const [booking,setBooking]=useState([]);
  useEffect(()=>{
  fetch(`https://young-cliffs-75372.herokuapp.com/booking/${user?.email}`)
  .then(res=>res.json())
  .then(data=>setBooking(data))
  },[user])
  return (
    <div>
      <Navbar/>
     <div className="container">
      <h1 className='mt-3'>Here all order </h1>
      {/* here show order info */}
      <div className="my-5">
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {booking.map(data=>(
         <div className="flight mt-5">
           <div className="card mb-3 ps-0">
         <div className="row g-0">
           <div className="col-md-4">
             <img src={data?.img} className="img-fluid  h-100 rounded-start" alt="..."/>
           </div>
           <div className="col-md-8">
             <div className="card-body ">
             <h5 className="card-title fw-bold">{data?.TourName}</h5>
             <h5 className="card-title fw-bold">{data?.hotelName}</h5>
             <div className='d-flex gap-5 align-items-center'>
             <h6 className="card-title fw-bold">{data?.from}</h6>
             <h6 className="card-title fw-bold">{data?.to}</h6>
             </div>
             <h6>Types: {data?.types}</h6>

              <div className="d-flex justify-content-between align-items-center mt-5">
              <div className="d-flex">
              <h6 className='mx-1'><b>BDT {data?.price}</b></h6>
               <p><small>(Per Person)</small></p>
              </div>
              <div className='select'>
              <Link to={`/tours/${data._id}`}>
              <button>Booking <RiArrowRightLine className='ms-4 fs-5'/></button> 
              </Link>
              </div>
              </div>
            </div>
           </div>
         </div>
       </div>
         </div>
        ))}
      </div>
     </div>
    </div>
     </div>
    </div>
  );
};

export default MyBooking;