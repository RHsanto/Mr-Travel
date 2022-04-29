import React from 'react';

const Flight = () => {
  return (
    <div>
      <div className="d-block  d-md-flex  justify-content-center ">
       <div className="d-flex w-100 ">
       <div class="form-floating w-100">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="From"/>
           <label for="floatingInput">FROM</label>
       </div>
       <div class="form-floating ms-2 w-100">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="To"/>
           <label for="floatingInput">TO</label>
       </div>
       </div>
        <div className="d-none d-lg-flex date w-75  ms-0 ms-lg-3 my-4 my-lg-0">
        <div class="form-floating w-100">
           <input type='date' class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">JOURNEY DATE</label>
       </div>
       <div class="form-floating w-100">
           <input type="date" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">RETURN DATE</label>
       </div>
        </div>
        {/* for mobile */}
        <div className="d-block d-lg-none date w-100 d-flex ms-0 ms-lg-3 my-4 my-lg-0">
        <div class="form-floating w-100">
           <input type='date' class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">JOURNEY DATE</label>
       </div>
       <div class="form-floating w-100">
           <input type="date" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">RETURN DATE</label>
       </div>
        </div>
         <div class="form-floating w-50 ms-2 d-none d-lg-block">
           <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
             <option selected>Open this select class</option>
             <option value="Economic">Economic</option>
             <option value="Business">Business</option>
           </select>
           <label for="floatingSelect">TRAVELER CLASS</label>
         </div>
        {/* for mobile */}
         <div class="form-floating w-100 ms-2 d-bloc d-lg-none">
           <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
             <option selected>Open this select class</option>
             <option value="Economic">Economic</option>
             <option value="Business">Business</option>
           </select>
           <label for="floatingSelect">TRAVELER CLASS</label>
         </div>
      </div>
    </div>
  );
};  

export default Flight;