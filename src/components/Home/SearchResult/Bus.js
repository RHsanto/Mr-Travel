import React from 'react';

const Bus = () => {
  return (
    <div className='d-block  d-md-flex  gap-3'>
    <div className="d-flex  w-100">
    <div class="form-floating w-50">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">FROM</label>
       </div>
      <div class="form-floating w-50 ms-2">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">TO</label>
       </div>
    </div>
      <div class="form-floating  mt-3 mt-md-0 w-50 d-none d-md-block">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">JOURNEY DATE</label>
       </div>
      <div class="form-floating  mt-3 mt-md-0  d-block d-md-none">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">JOURNEY DATE</label>
       </div>
    </div>
  );
};

export default Bus;