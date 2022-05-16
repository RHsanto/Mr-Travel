/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import Navbar from '../common/Navbar';
import ModifyHotel from '../ModifySearch/ModifyHotel';
import {RiArrowRightLine} from "react-icons/ri";
import {MdLocationPin} from "react-icons/md";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import Rating from 'react-rating';

const HotelSearch = () => {
  const [hotels,setHotels]=useState([]);

  useEffect(()=>{
    fetch('https://desolate-oasis-91427.herokuapp.com/hotelInfo')
    .then(response=>response.json())
    .then(data=>setHotels(data))
  },[])
  return (
    <div >
      <Navbar/>
        {/* here search input */}
    <div className=' all-inputs'>
    <div className=" rounded  pt-5 pb-3 px-4">
      <div className="container">
        <ModifyHotel/>
      </div>
     </div>
    </div>
    {/* here result */}
    <div className="common-section ">
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {hotels.map(hotel=>(
         <div className="flight mt-5">
           <div class="card mb-3 ps-0">
         <div class="row g-0">
           <div class="col-md-4">
             <img src={hotel?.img} class="img-fluid" alt="..."/>
           </div>
           <div class="col-md-8">
             <div class="card-body color">
               <div className="d-flex hotel ">
               <p className='hotel'>{hotel?.type}</p>
               <Rating className='ms-2  mt-1'
                   emptySymbol={<AiOutlineStar className='fs-5 '/>}
                   fullSymbol={<AiFillStar className='fs-5 '/>}
                   readonly
                  initialRating={hotel?.ratings}
                  > 
            </Rating>
               </div>
             <h5 class="card-title fw-bold">{hotel?.hotelName}</h5>
              <h6><MdLocationPin/> {hotel?.area}, Bangladesh</h6>

              <div className="d-flex justify-content-between align-items-center mt-5">
              <div className="d-flex">
              <h6 className='mx-1'><b>BDT {hotel?.price}</b></h6>
               <p><small>(Per Person)</small></p>
              </div>
              <div className='select'>
              <button>Booking <RiArrowRightLine className='ms-2 fs-5'/></button> 
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

export default HotelSearch;