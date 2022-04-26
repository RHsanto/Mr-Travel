import React from 'react';

const Flight = () => {
  return (
    <div>
      <div className="d-block  d-md-flex  justify-content-center ">
       <div className="d-flex">
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
       </div>
        <div className="date  d-flex ms-0 ms-lg-3 my-4 my-lg-0">
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
        <div class="form-floating ms-0  ms-lg-3 ">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">TRAVELER CLASS</label>
       </div>
      </div>
    </div>
  );
};  

export default Flight;