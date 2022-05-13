/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import SearchResult from '../SearchResult/SearchResult';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import { IoIosArrowDown } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Banner = () => {
  const{user,logOut}=useFirebase();
  return (
    <div className='banner-section'>
  <header >
    <div className="container pt-3  d-flex justify-content-between align-items-center">
      <div className="logo  text-white">
      <h1><Link to='/'>  Mr.Travel</Link></h1>
     </div>

{/* here use login functionality */}
   <div className='d-flex align-items-center'>
   {/* {user.email ?
     <>
      <img className="UserImg" src={user.photoURL} alt="" />
            <span className='user-name text-light ms-2'>{user.displayName} </span>   
           {user.emailVerified? <></>:
            <span className='user-name'>{user.email} </span>}
            <button className='btn btn-danger ms-3' onClick={logOut}>
               Log-out</button> </>
     :  <div className="sign-in">
     <Link to='/sign-in'><button className='rounded '> Sign-in</button> </Link>
     </div>
     } */}
      {user.email ?
      <> 
     {user.photoURL ? <img className="UserImg" src={user.photoURL} alt="" />
     : <><FaUserCircle className='text-light fs-1'/></>
    }
     <div class="dropdown">
     <div className='text-light ms-2'  type="button" id="dropdownMenuButton1"
      data-bs-toggle="dropdown" aria-expanded="false">
      <IoIosArrowDown className=' fw-bold fs-5'/>
     </div>
     <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
     <span className='dropdown-item'>Profile </span>  
     <span class="dropdown-item">My Booking </span>  
     <a><span className='dropdown-item w-100' onClick={logOut}>
      <FiLogOut/>   Sign-out</span></a>
     </ul>
     </div>
     </> :
     <div className="sign-in">
     <Link to='/sign-in'><button className='rounded '> Sign-in</button> </Link>
     </div> 
      }
     
   
   
   </div>

   {/* user login info */}
   
    
    </div>
     
   </header>
     {/* add search section */}

     <SearchResult/>
    </div>
  );
};

export default Banner;