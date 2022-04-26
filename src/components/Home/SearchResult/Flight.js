import React from 'react';

const Flight = () => {
  return (
    <div>
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
  );
};

export default Flight;