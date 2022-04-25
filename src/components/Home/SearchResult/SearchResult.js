import React from 'react';

const SearchResult = () => {
  return (
    <div className='search-section '>
    <div className="container px-5 ">
      <div className="search-field">
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
       <div className="all-inputs bg-white rounded shadow-lg p-5">
         <h4>  One Way</h4>
        <div className="d-flex justify-content-center ">
        <div class="form-floating ">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="From"/>
           <label for="floatingInput">FROM</label>
       </div>
       <div class="form-floating ms-2">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="To"/>
           <label for="floatingInput">TO</label>
       </div>
        <div className="date ms-4 d-flex">
        <div class="form-floating ">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">JOURNEY DATE</label>
       </div>
       <div class="form-floating ">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">RETURN DATE</label>
       </div>
        </div>
        <div class="form-floating ms-4">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">TRAVELER CLASS</label>
       </div>
        </div>
       </div>
       </div> 
     </div>
     <div className="row search-btn">
       <div className="col-2 mx-auto">
       <div className="btn btn-warning px-5 py-3">Search</div>
       </div>
     </div>
      </div>
    </div>
    </div>
  );
};

export default SearchResult;