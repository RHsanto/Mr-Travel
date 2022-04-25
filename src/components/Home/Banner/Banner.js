import React from 'react';
import SearchResult from '../SearchResult/SearchResult';

const Banner = () => {
  return (
    <div className='banner-section'>
  <header >
   
   <div className="container p-4 mx-auto flex justify-between items-center">
      <div className="logo text-4xl font-bold text-white">
       Mr.Travel
     </div>
     <div className="sign-in">
       <button className='bg-blue-800 text-white py-3 px-6 rounded'>Sign-in</button>
     </div>
     </div>
   </header>
     {/* add search section */}

     <SearchResult/>
    </div>
  );
};

export default Banner;