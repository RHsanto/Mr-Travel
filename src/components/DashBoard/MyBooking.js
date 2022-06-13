import React from 'react';
import { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import {RiArrowRightLine} from "react-icons/ri";
import {MdLocationPin} from "react-icons/md";
import {HiClock} from "react-icons/hi";
import {FaUsers} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';

const MyBooking = () => {
  const{user}=useFirebase();
  const [booking,setBooking]=useState([]);
  console.log(user?.email);
  fetch(`https://young-cliffs-75372.herokuapp.com/booking/${user?.email}`)
  .then(res=>res.json())
  .then(data=>setBooking(data))
  return (
    <div>
      <Navbar/>
     <div className="container">
      <h1>Here all order </h1>
      {/* here show order info */}
      <div className="">
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {booking.map(tour=>(
         <div className="flight mt-5">
           <div className="card mb-3 ps-0">
         <div className="row g-0">
           <div className="col-md-4">
             <img src={tour?.img} className="img-fluid  h-100 rounded-start" alt="..."/>
           </div>
           <div className="col-md-8">
             <div className="card-body ">
             <h5 className="card-title fw-bold">{tour?.TourName}</h5>
              <h6><MdLocationPin/> {tour?.area}, Bangladesh</h6>

              <div className="ms-1">
              <small ><HiClock/> {tour?.totalTime} hour</small>,
              <small className='ms-2'><FaUsers/> {tour?.member} people</small> 
              </div>

              <div className="d-flex justify-content-between align-items-center mt-5">
              <div className="d-flex">
              <h6 className='mx-1'><b>BDT {tour?.price}</b></h6>
               <p><small>(Per Person)</small></p>
              </div>
              <div className='select'>
              <Link to={`/tours/${tour._id}`}>
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