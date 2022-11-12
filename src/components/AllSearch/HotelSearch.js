/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import { RiArrowRightLine } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const HotelSearch = () => {
  const results = localStorage.getItem("hotelData");
  const [hotels, setHotels] = useState([]);
  const [searchResults, setSearResult] = useState([]);
  const [updatedValues, setUpdatedValues] = useState();
  // here data parsed
  let parsed;
  if (results != undefined) {
    parsed = JSON.parse(results);
  }

  // here fetch data
  useEffect(() => {
    fetch("http://localhost:8000/hotelInfo")
      .then(response => response.json())
      .then(data => setHotels(data));
  }, []);

  // get modify input data
  const handleFrom = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newUpdatedValues = { ...updatedValues };
    newUpdatedValues[name] = value;
    setUpdatedValues(newUpdatedValues);
    localStorage.setItem("hotelData", JSON.stringify(newUpdatedValues));
  };

  // here get data and fetch data filter
  useEffect(() => {
    const searchResults = hotels.filter(items => {
      if (parsed?.hotelName === items?.hotelName) {
        return items;
      }
    });
    setSearResult(searchResults);
  }, [hotels]);

  // here click modify
  const handleResults = e => {
    const searchResults = hotels.filter(items => {
      if (updatedValues?.hotelName === items?.hotelName) {
        return items;
      }
    
    });
    setSearResult(searchResults);
    // console.log(searchResults);
   
  };

  return (
    <div>
      <Navbar />
      {/* here modify input section */}

      <div className="modify-hotel-input p-5">
        <div className="container">
          <div className="input-section">
            <div className="d-block  d-md-flex justify-content-center ">
              <div className="form-floating w-50 d-none d-md-block">
                <input
                  onChange={handleFrom}
                  name="hotelName"
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="From"
                  required
                />
                <label for="floatingInput">CITY/HOTEL/RESORT/AREA</label>
              </div>
              {/* for mobile */}
              <div className="form-floating  d-block d-md-none">
                <input
                  onChange={handleFrom}
                  name="hotelName"
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="From"
                  required
                />
                <label for="floatingInput">CITY/HOTEL/RESORT/AREA</label>
              </div>
              <div className="date ms-0  ms-lg-3 my-3 my-lg-0 d-lg-flex d-block">
                <div className="form-floating ">
                  <input
                    onChange={handleFrom}
                    name="check-in"
                    type="date"
                    className="form-control"
                    id="floatingInput"
                    required
                  />
                  <label for="floatingInput">CHECK IN</label>
                </div>
                <div className="form-floating mt-2 mt-lg-0 ms-0 ms-lg-2">
                  <input
                    onChange={handleFrom}
                    name="check-out"
                    type="date"
                    className="form-control"
                    id="floatingInput"
                    required
                  />
                  <label for="floatingInput">CHECK OUT</label>
                </div>
              </div>

              <div className="form-floating w-25 d-none d-lg-block  ms-0 ms-lg-3">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>1 Room, 2 Guests</option>
                  <option value="1 Room, 3 Guests">1 Room, 3 Guests</option>
                  <option value="1 Room, 2 Guests">1 Room, 2 Guests</option>
                  <option value="2 Room, 5 Guests">2 Room, 5 Guests</option>
                </select>
                <label for="floatingSelect">ROOMS & GUESTS</label>
              </div>
              {/* for mobile device input */}

              <div className="form-floating w-100 d-block d-lg-none  ms-0 ms-lg-3">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>1 Room, 2 Guests</option>
                  <option value="1 Room, 3 Guests">1 Room, 3 Guests</option>
                  <option value="1 Room, 2 Guests">1 Room, 2 Guests</option>
                  <option value="2 Room, 5 Guests">2 Room, 5 Guests</option>
                </select>
                <label for="floatingSelect">ROOMS & GUESTS</label>
              </div>

              <button onClick={handleResults} className="modify-btn mt-md-0 mt-3 py-3 py-lg-0">
                Modify Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* here result */}
      <div className="common-section ">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {searchResults.map(hotel => (
              <div className="flight mt-5">
                <div className="card mb-3 ps-0">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={hotel?.img} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body ">
                        <div className="d-flex hotel ">
                          <p className="hotel">{hotel?.type}</p>
                          <Rating
                            className="ms-2  mt-1 star-color"
                            emptySymbol={<AiOutlineStar className="fs-5 " />}
                            fullSymbol={<AiFillStar className="fs-5 " />}
                            readonly
                            initialRating={hotel?.rating}
                          />
                        </div>
                        <h5 className="fw-bold">{hotel?.hotelName}</h5>
                        <h6>
                          <MdLocationPin /> {hotel?.location}, Bangladesh
                        </h6>

                        <div className="d-flex justify-content-between align-items-center mt-5">
                          <div className="d-flex">
                            <h6 className="mx-1">
                              <b>$ {hotel?.price}</b>
                            </h6>
                            <p>
                              <small>(Per Person)</small>
                            </p>
                          </div>
                          <div className="select">
                            <Link to={`/offers/${hotel?._id}`}>
                              <button>
                                Booking <RiArrowRightLine className="ms-2 fs-5" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
