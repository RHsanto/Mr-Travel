import React from 'react';

const SearchResult = () => {
  return (
    <div>
    <div className="container px-52 mx-auto">
      <div className="search">
        <div className="row">
          <div className="col-lg-6 mx-auto">
          <div className="all-category  rounded shadow-lg
       d-flex justify-content-around align-items-center   ">
         <li>Plane</li>
         <li>Hotel</li>
         <li>Tour</li>
         <li>Bus</li>
       </div>
          </div>
        </div>
     {/* search body */}
     <div className="row">
       <div className="col">
       <div className="all-inputs bg-white rounded shadow-lg p-4">
         <h4>  One Way</h4>
        <div className="d-flex justify-content-center ">
        <input type="text" name="" id="" />
        <input type="text" name="" id="" className='ms-2' />
        <div className="date ms-4">
          <input type="text" />
          <input type="text" />
        </div>
        <input type="text" className='ms-4' />
        </div>
       </div>
       </div>
     </div>
      </div>
    </div>
    </div>
  );
};

export default SearchResult;