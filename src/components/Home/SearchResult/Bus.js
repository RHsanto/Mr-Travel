import React from "react";
import { Link } from "react-router-dom";

const Bus = () => {
  return (
    <div>
      <div className="d-block  d-md-flex  gap-3">
        <div className="d-flex  w-100">
          <div className="form-floating w-50 ms-2 ">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Dhaka</option>
              <option value="Economic">Economic</option>
              <option value="Business">Business</option>
            </select>
            <label for="floatingSelect">FROM</label>
          </div>
          <div className="form-floating w-50 ms-2 ">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Chittagong</option>
              <option value="Economic">Economic</option>
              <option value="Business">Business</option>
            </select>
            <label for="floatingSelect">TO</label>
          </div>
        </div>
        <div className="form-floating  mt-3 mt-md-0 w-50 d-none d-md-block">
          <input
            type="date"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">JOURNEY DATE</label>
        </div>
        {/* for mobile */}
        <div className="form-floating  mt-3 mt-md-0  d-block d-md-none">
          <input
            type="date"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">JOURNEY DATE</label>
        </div>
      </div>
      <div className="search-btn">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 mx-auto ">
              <Link to="/bus">
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

export default Bus;
