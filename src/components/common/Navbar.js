/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiCommercialAirplane ,GiPalmTree} from "react-icons/gi";
import { RiHotelFill } from "react-icons/ri";
import { FaBus } from "react-icons/fa";
import Flight from '../Home/SearchResult/Flight';
import Tour from '../Home/SearchResult/Tour';
import Hotel from '../Home/SearchResult/Hotel';
import Bus from '../Home/SearchResult/Bus';
const Navbar = () => {
  const[info,setInfo]=useState(<Flight/>)

  const handleFlight =(e)=>{
 setInfo(<Flight/>)}
  const handleTour =(e)=>{
 setInfo(<Tour/>)}
  const handleHotel =(e)=>{
 setInfo(<Hotel/>)}
  const handleBus =(e)=>{
 setInfo(<Bus/>)}
  return (
    <>
    <div className='nav-section '>
       <div className="container  pt-3 px-5 px-lg-0  d-flex justify-content-between align-items-center">
      <div className="logos">
      <h1><Link to='/'>  Mr.Travel</Link></h1>
     </div>
     <div>  <nav>
        <ul className=''>
         <li><Link to='/flight'><GiCommercialAirplane/> Flight</Link></li>  
         <li><Link to='/hotel' >< GiPalmTree/> Tour</Link></li>  
         <li ><Link to='/tour' ><RiHotelFill/> Hotel</Link></li>  
         <li ><Link to='/bus' ><FaBus/> Bus</Link></li>  
         </ul>
     </nav></div>
     <div className="sign-in">
       <button className='rounded '>Sign-in</button>
     </div>
       </div>

    </div>
    
    <div className=' all-inputs'>
    <div className=" rounded shadow-lg pt-5 pb-3 px-4">
      <div className="container">
      {info}
      </div>
     </div>
    </div>
    </>
  );
};

export default Navbar;