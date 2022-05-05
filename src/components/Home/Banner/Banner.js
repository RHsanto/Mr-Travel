import React from 'react';
import SearchResult from '../SearchResult/SearchResult';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner-section'>
  <header >
   
   <div className="container pt-3 px-5 px-lg-0  d-flex justify-content-between align-items-center">
      <div className="logo  text-white">
      <h1><Link to='/'>  Mr.Travel</Link></h1>
     </div>
     <div className="sign-in">
       <button className='rounded '>Sign-in</button>
     </div>
     </div>
     
   </header>
     {/* add search section */}

     <SearchResult/>
    </div>
  );
};

export default Banner;