import React from 'react';

const Bus = () => {
  return (
    <div className='d-flex gap-3'>
      <div class="form-floating w-50">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">FROM</label>
       </div>
      <div class="form-floating w-50">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">TO</label>
       </div>
      <div class="form-floating w-50">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">JOURNEY DATE</label>
       </div>
    </div>
  );
};

export default Bus;