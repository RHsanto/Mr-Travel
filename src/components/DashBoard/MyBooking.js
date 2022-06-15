import React from 'react';
import { useState } from 'react';
import {AiOutlineSwap} from "react-icons/ai";
import { SiFampay} from "react-icons/si";
import { MdDelete} from "react-icons/md";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import Navbar from '../common/Navbar';
import './dashboard.css';
import oops from '../../images/opps-1.jpg'

const MyBooking = () => {
  const{user}=useFirebase();
  const [booking,setBooking]=useState([]);

  useEffect(()=>{
  fetch(`https://young-cliffs-75372.herokuapp.com/booking/${user?.email}`)
  .then(res=>res.json())
  .then(data=>setBooking(data))
  })

  return (
    <div>
      <Navbar/>
     <div className="container">
      {/* here show order info */}
      <div className="my-5">
    <div className="container">
      <div>
        {/* {booking?.length===0 ? <div className='text-center'>
          <h1 className='mb-4'>You made no order</h1>
          <img className='w-100' src={oops} alt="" />
        </div> :
        } */}
         <div className="row row-cols-1 row-cols-md-2 g-4">
        {booking.map(data=>(
          <div className="flight mt-5" key={data._id}>

            <div className="card mb-3 ps-0">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={data?.img} className="img-fluid  h-100 rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body ">
              <div>
              {data?.from  ? <div className='d-flex  align-items-center'> 
              <h6 className="card-title fw-bold">{data?.from}</h6>
              <h6  className='arrow mx-5'><AiOutlineSwap/></h6>
              <h6 className="card-title fw-bold">{data?.to}</h6></div> : <>
              <h5 className="card-title fw-bold">{data?.TourName}</h5>
              <h5 className="card-title fw-bold">{data?.hotelName}</h5></>
               }
              </div>
              <h6>Types: {data?.types}</h6>
 
               <div className="d-flex justify-content-between align-items-center mt-5">
               <div className="d-flex">
               <h6 className='mx-1'><b> {data?.price} {data?.sum}</b></h6>
                <p><small>(Per Person)</small></p>
               </div>
               <div className='select-btn gap-2 d-flex'>
               <Link to={`/payment/${data?._id}`}> <button className='btn btn-success '><SiFampay/> Payment</button></Link>
                <button className='btn btn-danger'><MdDelete/> Delete</button>
               </div>
               </div>
             </div>
            </div>
          </div>
        </div>
          </div>
         ))}</div>
      </div>
     </div>
    </div>
     </div>
    </div>
  );
};

export default MyBooking;