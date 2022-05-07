import React from 'react';
import Navbar from '../common/Navbar';
import ModifyTour from '../ModifySearch/ModifyTour';

const TourSearch = () => {
  return (
    <div>
      <Navbar/>
         {/* here search input */}
    <div className=' all-inputs'>
    <div className=" rounded shadow-lg pt-5 pb-3 px-4">
      <div className="container">
        <ModifyTour/>
      </div>
     </div>
    </div>
   <div className="container">
   <h1>TourSearch
TourSearch</h1>
   </div>
    </div>
  );
};

export default TourSearch;