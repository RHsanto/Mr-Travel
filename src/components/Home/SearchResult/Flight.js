import React, { useState } from "react";
import { Link } from "react-router-dom";

const Flight = () => {

  const [updatedValues, setUpdatedValues] = useState();


  // get input items when selected 
  const handleFrom = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newUpdatedValues = { ...updatedValues };
    newUpdatedValues[name] = value;
    setUpdatedValues(newUpdatedValues);
    localStorage.setItem('flightData', JSON.stringify(newUpdatedValues))
 
  };
  return (
    <div>
      <div className="d-block  d-md-flex  justify-content-center ">
        <div className="d-flex w-100 ">
          <div className="form-floating w-100">
            <input 
             onChange={handleFrom}
             name="from"
             type="text"
             className="form-control"
             id="floatingInput"
             placeholder="From" />
            <label for="floatingInput">FROM</label>
          </div>
          <div className="form-floating ms-2 w-100">
            <input
             onChange={handleFrom}
             name="to"
             type="text"
             className="form-control" 
             id="floatingInput"
             placeholder="To" />
            <label for="floatingInput">TO</label>
          </div>
        </div>
        <div className="d-none d-lg-flex date w-75  ms-0 ms-lg-3 my-4 my-lg-0">
          <div className="form-floating w-100">
            <input
              onChange={handleFrom}
              name="journey-date"
              type="date"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">JOURNEY DATE</label>
          </div>
          <div className="form-floating w-100">
            <input
              onChange={handleFrom}
              name="return-date"
              type="date"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">RETURN DATE</label>
          </div>
        </div>   
        <div className="form-floating w-50 ms-2 d-none d-lg-block">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select class</option>
            <option value="Economic">Economic</option>
            <option value="Business">Business</option>
          </select>
          <label for="floatingSelect">TRAVELER CLASS</label>
        </div>
 
 {/* for mobile device*/}
        <div className="d-block d-lg-none date w-100  ms-0 ms-lg-3 my-4 my-lg-0">
          <div className="form-floating w-100 mb-4">
            <input
              onChange={handleFrom}
              name="journey-date"
              type="date"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">JOURNEY DATE</label>
          </div>
          <div className="form-floating w-100">
            <input
              onChange={handleFrom}
              name="return-date"
              type="date"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">RETURN DATE</label>
          </div>
        </div>
        <div className="form-floating w-100  d-lg-none">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select class</option>
            <option value="Economic">Economic</option>
            <option value="Business">Business</option>
          </select>
          <label for="floatingSelect">TRAVELER CLASS</label>
        </div>
      </div>
      <div className="search-btn">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 mx-auto ">
              <Link to="/flight">
                {" "}
                <button> Search </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
