import React from 'react';
import Navbar from '../common/Navbar';
import ModifyBus from '../ModifySearch/ModifyBus';

const BusSearch = () => {
  return (
    <div>
      <Navbar/>  {/* here search input */}
    <div className=' all-inputs'>
    <div className=" rounded  pt-5 pb-3 px-4">
      <div className="container">
        <ModifyBus/>
      </div>
     </div>
    </div>
    <div className="common-section">
    <div className="container">
     <h1>Bus
     HotelSearch</h1>
     </div>
    </div>
    </div>
  );
};

export default BusSearch;