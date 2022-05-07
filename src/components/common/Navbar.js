/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { GiCommercialAirplane ,GiPalmTree} from "react-icons/gi";
import { RiHotelFill } from "react-icons/ri";
import { FaBus } from "react-icons/fa";

const Navbar = () => {
 
  return (
    <>
    <div className='nav-sections'>
    <div className="container  pt-3 px-5 px-lg-0  d-flex justify-content-between align-items-center">
      <div className="logos">
      <h1><Link to='/'>  Mr.Travel</Link></h1>
     </div>
     <div className='d-none d-lg-block'> 
        <nav >
         <ul className=''>
           <li><Link to='/flight'><GiCommercialAirplane/> Flight</Link></li>  
           <li><Link to='/tour' >< GiPalmTree/> Tour</Link></li>  
           <li ><Link to='/hotel' ><RiHotelFill/> Hotel</Link></li>  
           <li ><Link to='/bus' ><FaBus/> Bus</Link></li>  
         </ul>
       </nav>
      </div>
     <div className="sign-in">
       <button className='rounded mb-2'>Sign-in</button>
     </div>
   </div>
    </div>
    </>
  );
};

export default Navbar;