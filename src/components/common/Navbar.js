/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { GiCommercialAirplane ,GiPalmTree} from "react-icons/gi";
import { RiHotelFill } from "react-icons/ri";
import { FaBus } from "react-icons/fa";
import useFirebase from '../../hooks/useFirebase';

const Navbar = () => {
  const{user,logOut}=useFirebase();
  return (
    <>
    <div className='nav-sections '>
    <div className="container  pt-3 px-5 px-lg-0  d-flex justify-content-between align-items-center">
      <div className="logos">
      <h1><Link to='/'>  Mr.Travel</Link></h1>
     </div>
     <div className='d-none d-lg-block'> 
        <nav >
         <ul className=''>
           <li ><Link to='/bus' ><FaBus/> Bus</Link></li>  
           <li><Link to='/flight'><GiCommercialAirplane/> Flight</Link></li> 
           <li><Link to='/tour' >< GiPalmTree/> Tour</Link></li>  
           <li ><Link to='/hotel' ><RiHotelFill/> Hotel</Link></li>  
         </ul>
       </nav>
      </div>
     {/* here use login functionality */}
   <div>
   {user?.email ?
     <>
      <img className="UserImg" src={user.photoURL} alt="" />
            {/* <span className='user-name'>{user.displayName} </span> */}   
           {user.emailVerified? <></>:
            <span className='user-name'>{user.email} </span>}
            <button className='btn btn-danger ms-3' onClick={logOut}>
               Log-out</button> </>
     :  <div className="sign-in">
     <Link to='/sign-in'> <button button className='rounded '>Sign-in</button></Link>
     </div>
     }
   </div>
   </div>
    </div>
    </>
  );
};

export default Navbar;