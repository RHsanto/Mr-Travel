import React from 'react';

const ModifyTour = () => {
  return (
    <div className='d-flex'>
    <div class="form-floating w-100">
        <input type="text" class="form-control"
            id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">LOCATION / TOUR</label>
    </div>
    <button className='modify-btn mt-md-0 mt-3 py-2 py-lg-0'>Modify Search</button>
 </div>
  );
};

export default ModifyTour;