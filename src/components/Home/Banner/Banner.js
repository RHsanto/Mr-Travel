import React from 'react';

const Banner = () => {
  return (
    <div className='banner-section'>
  <header >
     <div className="container mx-auto flex justify-between items-center">
      <div className="logo text-4xl font-bold">
       Mr.Travel
     </div>
     <div className="sign-in">
       <button className='bg-blue-800 text-white py-3 px-6 rounded'>Sign-in</button>
     </div>
     </div>
   </header>
      <h1>Banner</h1>
    </div>
  );
};

export default Banner;