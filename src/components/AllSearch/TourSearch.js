import React from 'react';
import Navbar from '../common/Navbar';
import ModifyTour from '../ModifySearch/ModifyTour';

const TourSearch = () => {
  return (
    <div>
      <Navbar/>
         {/* here search input */}
    <div className=' all-inputs'>
    <div className=" rounded  pt-5 pb-3 px-4">
      <div className="container">
        <ModifyTour/>
      </div>
     </div>
    </div>
    <div className="common-section">
    <div className="container">
     <h1>Tour
     HotelSearch</h1>
     </div>
    </div>
    </div>
  );
};

export default TourSearch;