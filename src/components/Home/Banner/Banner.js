import React from 'react';
import SearchResult from '../SearchResult/SearchResult';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

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
     <button className='rounded '><Link to='/sign-in'>Sign-in</Link></button>
     </div>
     }
   </div>
    
    </div>
     
   </header>
     {/* add search section */}

     <SearchResult/>
    </div>
  );
};

export default Banner;