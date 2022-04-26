import React from 'react';
import { GiCommercialAirplane ,GiPalmTree} from "react-icons/gi";
import { RiHotelFill } from "react-icons/ri";
import { FaBus } from "react-icons/fa";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Flight from './Flight'
import Hotel from './Hotel'
import Tour from './Tour'
import Bus from './Bus'
const SearchResult = () => {
  return (
  
    <BrowserRouter>
      <div className='search-section '>
    <div className="container px-5 ">
      <div className="search-field">
        <div className="row">
          <div className="col-lg-6 mx-auto col-10">
          <div className="all-category  rounded shadow-lg
       d-flex justify-content-around align-items-center   "> 
         <li><Link to='/flight'><GiCommercialAirplane/> Flight</Link></li>  
         <li><Link to='/hotel'><RiHotelFill/> Hotel</Link></li>  
         <li><Link to='/tour'><GiPalmTree/> Tour</Link></li>  
         <li><Link to='/bus'><FaBus/> Bus</Link></li>  
         
       </div>
          </div>
        </div>
     {/* search body */}
     <div className="row">
       <div className="col">
       <div className="all-inputs bg-white rounded shadow-lg py-5 px-4">
        <h4 className='text-center pt-2 pb-4'>SELECTED YOU DESTINATION</h4>
         <Routes>
         <Route path="/" element={<Flight />}/>
         <Route path="/flight" element={<Flight />}/>
         <Route path="/hotel" element={<Hotel />}/>
         <Route path="/tour" element={<Tour />}/>
         <Route path="/bus" element={<Bus />}/>
         </Routes>
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
   
   </BrowserRouter>
  );
};

export default SearchResult;