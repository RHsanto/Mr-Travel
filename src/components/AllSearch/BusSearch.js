import React from 'react';
import Navbar from '../common/Navbar';
import ModifyBus from '../ModifySearch/ModifyBus';

const BusSearch = () => {
  return (
    <div>
      <Navbar/>  {/* here search input */}
    <div className=' all-inputs'>
    <div className=" rounded shadow-lg pt-5 pb-3 px-4">
      <div className="container">
        <ModifyBus/>
      </div>
     </div>
    </div>
      <div className="container">
      <h1>BusSearch
BusSearch</h1>
      </div>
    </div>
  );
};

export default BusSearch;