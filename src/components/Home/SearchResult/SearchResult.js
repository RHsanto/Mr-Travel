/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { GiCommercialAirplane ,GiPalmTree} from "react-icons/gi";
import { RiHotelFill } from "react-icons/ri";
import { FaBus } from "react-icons/fa";
import Flight from './Flight'
import Hotel from './Hotel'
import Tour from './Tour'
import Bus from './Bus'
import { useState } from 'react';

const SearchResult = () => {
  const[info,setInfo]=useState(<Flight/>)

  const handleFlight =(e)=>{
 setInfo(<Flight/>)

  }

  const handleTour =(e)=>{
 setInfo(<Tour/>)
  }
  const handleHotel =(e)=>{
 setInfo(<Hotel/>)
  }
  const handleBus =(e)=>{
 setInfo(<Bus/>)
  }
  return (
  
 
      <div className='search-section '>
    <div className="container px-5 ">
      <div className="search-field">
        <div className="row">
          <div className="col-lg-6 mx-auto col-11">
          <div className="all-category   rounded shadow-lg
         "> 
         <ul className='d-flex justify-content-around align-items-center '>
         <li className='active'><a onClick={handleFlight}><GiCommercialAirplane/> Flight</a></li>  
         <li><a onClick={handleHotel}><RiHotelFill/> Hotel</a></li>  
         <li><a onClick={handleTour}><GiPalmTree/> Tour</a></li>  
         <li><a onClick={handleBus}><FaBus/> Bus</a></li>  
         </ul>
         
       </div>
          </div>
        </div>
     {/* search body */}
     <div className="row">
       <div className="col">
       <div className="all-inputs bg-white rounded shadow-lg py-5 px-4">
        <h4 className='text-center pt-2 pb-4'>SELECTED YOU DESTINATION</h4>
         {info}
       </div>
       </div> 
     </div>
     <div className="row search-btn">
       <div className="col-5 mx-auto col-lg-2">
       <div className="btn btn-warning px-5 py-3">Search</div>
       </div>
     </div>
      </div>
    </div>

   
    </div>
   

  );
};

export default SearchResult;