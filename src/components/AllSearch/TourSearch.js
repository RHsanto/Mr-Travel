import React, { useEffect, useState } from 'react';
import Navbar from '../common/Navbar';
import ModifyTour from '../ModifySearch/ModifyTour';
import {RiArrowRightLine} from "react-icons/ri";
import {MdLocationPin} from "react-icons/md";
import {HiClock} from "react-icons/hi";
import {FaUsers} from "react-icons/fa";
import { Link } from 'react-router-dom';

const TourSearch = () => {
  const[tours,setTours]=useState([]);

  useEffect(()=>{
   fetch(' https://young-cliffs-75372.herokuapp.com/tourInfo')
   .then(response=>response.json())
   .then(data=>setTours(data))
  },[])
  return (
    <div>
      <Navbar/>
         {/* here search input */}
    <div className=' all-inputs'>
    <div className=" rounded  pt-5 pb-3 px-4">
      <div className="container">
        <ModifyTour/>
      </div>
     </div>
    </div>
    {/* here result */}
    <div className="common-section ">
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {tours.map(tour=>(
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
  );
};

export default TourSearch;