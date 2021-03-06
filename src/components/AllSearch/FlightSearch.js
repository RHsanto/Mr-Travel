import React, { useState } from 'react';
import { useEffect } from 'react';
import {RiArrowRightLine} from "react-icons/ri";
import {AiOutlineSwap} from "react-icons/ai";
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import ModifyFlight from '../ModifySearch/ModifyFlight';
import '../AllSearch/Allcss.css'
const FlightSearch = () => {
  const[flights,setFlights]=useState([]);
  useEffect(()=>{
    fetch(' https://young-cliffs-75372.herokuapp.com/flightInfo')
    .then(response=>response.json())
    .then(data=>setFlights(data))

  },[])
  return (
    <div>
     <Navbar/>
     {/* here search input */}
    <div className=' all-inputs'>
    <div className=" rounded  pt-5 pb-3 px-4">
      <div className="container">
        <ModifyFlight/>
      </div>
     </div>
    </div>
    {/* here input result */}
    <div className="common-section ">
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {flights.map(flight=>(
         <div className="flight mt-5">
           <div className="card  mb-3 ps-0">
         <div className="row g-0">
           <div className="col-md-4">
             <img src={flight?.img} className="fla-img rounded-start" alt="..."/>
           </div>
           <div className="col-md-8">
             <div className="card-body">
            <div className="d-flex align-items-center justify-content-around mb-5">
              <div>
              <h6 className="card-title fw-bold">{flight?.from}</h6>
              <h6 className="card-title"><small>{flight?.startDate}</small></h6>
              </div>
               <h6  className='mx-5 arrow'><AiOutlineSwap/></h6>
               <div>
               <h6 className="card-title fw-bold">{flight?.to}</h6>
               <h6 className="card-title"><small>{flight?.endDate}</small></h6>
               </div>
               <div className="time ms-5">
                 <h6>{flight?.totalTime}</h6>
               </div>
            </div>
              
              <div className="d-flex justify-content-between">
              <div className="d-flex">
              <h5 className='ms-1 fw-bold'>BDT {flight?.price}</h5>
               <s className='ms-3 text-secondary'>{flight?.oldPrice}</s>
              </div>
              <div className='select flights'>
                <Link to={`/flights/${flight?._id}`}> 
                <button>Booking  <RiArrowRightLine className='ms-5 fs-5'/></button> </Link>
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
  );
};

export default FlightSearch;