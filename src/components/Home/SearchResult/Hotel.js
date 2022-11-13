import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hotel = () => {
  const [updatedValues, setUpdatedValues] = useState();

  // get input items when selected
  const handleFrom = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newUpdatedValues = { ...updatedValues };
    newUpdatedValues[name] = value;
    setUpdatedValues(newUpdatedValues);
    localStorage.setItem("hotelData", JSON.stringify(newUpdatedValues));
  };
  return (
    <div>
      <div className="d-block  d-md-flex justify-content-center ">
        <div className="form-floating w-50 d-none d-md-block">
          <input
            onChange={handleFrom}
            name="hotelName"
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="From"
          />
          <label htmlFor="floatingInput">CITY/HOTEL/RESORT/AREA</label>
        </div>
        {/* for mobile */}
        <div className="form-floating  d-block d-md-none mb-3">
          <input 
          onChange={handleFrom}
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="From" />
          <label htmlFor="floatingInput">CITY/HOTEL/RESORT/AREA</label>
        </div>
        <div className="date ms-0  ms-lg-3 my-3 my-lg-0 d-block d-lg-flex">
          <div className="form-floating mb-3">
            <input
              onChange={handleFrom}
              name="check-in"
              type="date"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">CHECK IN</label>
          </div>
          <div className="form-floating ">
            <input
              onChange={handleFrom}
              name="check-out"
              type="date"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">CHECK OUT</label>
          </div>
        </div>
        <div className="form-floating w-25 d-none d-lg-block  ms-0 ms-lg-3">
          <select
            onChange={handleFrom}
            name="room"
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option >--Select Room & Guests--</option>
            <option value="1 Room, 3 Guests">1 Room, 3 Guests</option>
            <option value="1 Room, 2 Guests">1 Room, 2 Guests</option>
            <option value="2 Room, 5 Guests">2 Room, 5 Guests</option>
          </select>
          <label htmlFor="floatingSelect">ROOMS & GUESTS</label>
        </div>

        {/* for mobile device input */}
     
        <div className="form-floating w-100 d-block d-lg-none  ms-0 ms-lg-3">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option >1 Room, 2 Guests</option>
            <option value="1 Room, 3 Guests">1 Room, 3 Guests</option>
            <option value="1 Room, 2 Guests">1 Room, 2 Guests</option>
            <option value="2 Room, 5 Guests">2 Room, 5 Guests</option>
          </select>
          <label htmlFor="floatingSelect">ROOMS & GUESTS</label>
        </div>
      </div>

      <div className="search-btn">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 mx-auto ">
              <Link to="/hotel">
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

export default Hotel;
