import React from 'react';
import { Link } from 'react-router-dom';

const Tour = () => {
  return (
    <div>
       <div class="form-floating w-100">
           <input type="text" class="form-control"
               id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">LOCATION / TOUR</label>
       </div>
       <div className="search-btn">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 mx-auto ">
            <Link to='/tour'> <button>  Search </button></Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;