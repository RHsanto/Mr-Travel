import React from 'react';

const ModifyFlight = () => {
  return (
    <div className='flight-modify'>
       <div className="d-block  d-md-flex  justify-content-center ">
       <div className="d-flex w-100 ">
       <div className="form-floating w-100">
           <input type="text" className="form-control"
               id="floatingInput" placeholder="From"/>
           <label for="floatingInput">FROM</label>
       </div>
       <div className="form-floating ms-2 w-100">
           <input type="text" className="form-control"
               id="floatingInput" placeholder="To"/>
           <label for="floatingInput">TO</label>
       </div>
       </div>
        <div className="d-none d-lg-flex date w-75  ms-0 ms-lg-3 my-4 my-lg-0">
        <div className="form-floating w-100">
           <input type='date' className="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">JOURNEY DATE</label>
       </div>
       <div className="form-floating w-100">
           <input type="date" className="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">RETURN DATE</label>
       </div>
        </div>
        {/* for mobile */}
        <div className="d-block d-lg-none date w-100 d-flex ms-0 ms-lg-3 my-4 my-lg-0">
        <div className="form-floating w-100">
           <input type='date' className="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">JOURNEY DATE</label>
       </div>
       <div className="form-floating w-100">
           <input type="date" className="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">RETURN DATE</label>
       </div>
        </div>
         <div className="form-floating w-50 ms-2 d-none d-lg-block">
           <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
             <option selected>Open this select class</option>
             <option value="Economic">Economic</option>
             <option value="Business">Business</option>
           </select>
           <label for="floatingSelect">TRAVELER CLASS</label>
         </div>
        {/* for mobile */}
         <div className="form-floating w-100 ms-2 d-block d-lg-none">
           <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
             <option selected>Open this select class</option>
             <option value="Economic">Economic</option>
             <option value="Business">Business</option>
           </select>
           <label for="floatingSelect">TRAVELER CLASS</label>
         </div>
        <button className='modify-btn mt-md-0 mt-3 py-3 py-lg-0'>Modify Search</button>
      </div>
    </div>
  );
};

export default ModifyFlight;