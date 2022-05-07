import React from 'react';
import Navbar from '../common/Navbar';
import ModifyHotel from '../ModifySearch/ModifyHotel';

const HotelSearch = () => {
  return (
    <div>
      <Navbar/>
        {/* here search input */}
    <div className=' all-inputs'>
    <div className=" rounded shadow-lg pt-5 pb-3 px-4">
      <div className="container">
        <ModifyHotel/>
      </div>
     </div>
    </div>
     <div className="container">
     <h1>HotelSearch
     HotelSearch</h1>
     </div>
    </div>
  );
};

export default HotelSearch;