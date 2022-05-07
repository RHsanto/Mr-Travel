import React from 'react';

const ModifyBus = () => {
  return (
    <div>
    <div className='d-block  d-md-flex  gap-3'>
  <div className="d-flex  w-100">
  <div class="form-floating w-50 ms-2 ">
<select class="form-select" id="floatingSelect" aria-label="Floating label select example">
  <option selected>Dhaka</option>
  <option value="Economic">Economic</option>
  <option value="Business">Business</option>
</select>
<label for="floatingSelect">FROM</label>
  </div>
  <div class="form-floating w-50 ms-2 ">
<select class="form-select" id="floatingSelect" aria-label="Floating label select example">
  <option  selected>Chittagong</option>
  <option value="Economic">Economic</option>
  <option value="Business">Business</option>
</select>
<label for="floatingSelect">TO</label>
  </div>
  </div>
    <div class="form-floating  mt-3 mt-md-0 w-50 d-none d-md-block">
         <input type="date" class="form-control"
             id="floatingInput" placeholder="name@example.com"/>
         <label for="floatingInput">JOURNEY DATE</label>
     </div>
     {/* for mobile */}
    <div class="form-floating  mt-3 mt-md-0  d-block d-md-none">
         <input type="date" class="form-control"
             id="floatingInput" placeholder="name@example.com"/>
         <label for="floatingInput">JOURNEY DATE</label>
     </div>
  </div>
  <button className='modify-btn mt-md-0 mt-3 py-2 py-lg-0'>Modify Search</button>
 </div>
  );
};

export default ModifyBus;