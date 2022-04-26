import React from 'react';

const Hotel = () => {
  return (
    <div>
      <div className="d-block  d-md-flex justify-content-center ">
        <div class="form-floating w-50">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="From"/>
           <label for="floatingInput">CITY/HOTEL/RESORT/AREA</label>
       </div>
        <div className="date ms-0  ms-lg-3 my-3 my-lg-0 d-flex">
        <div class="form-floating ">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">CHECK IN</label>
       </div>
       <div class="form-floating ms-2">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">CHECK OUT</label>
       </div>
        </div>
        <div class="form-floating ms-0  ms-lg-3">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">ROOMS & GUESTS</label>
       </div>
      </div>
    </div>
  );
};

export default Hotel;