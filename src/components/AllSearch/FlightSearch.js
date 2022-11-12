
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */import React, { useState } from "react";
import { useEffect } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { AiOutlineSwap } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import "../AllSearch/Allcss.css";

const FlightSearch = () => {
  // here get local storage items
  const results = localStorage.getItem("flightData");
  const [flights, setFlights] = useState([]);
  const [searchResults, setSearResult] = useState([]);
  const [updatedValues, setUpdatedValues] = useState();
  // here data parsed
  let parsed;
  if (results != undefined) {
    parsed = JSON.parse(results);
  }
  // console.log(parsed);

  useEffect(() => {
    fetch("  http://localhost:8000/flightInfo")
      .then(response => response.json())
      .then(data => setFlights(data));
  }, []);

    // get modify input data
  const handleFrom = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newUpdatedValues = { ...updatedValues };
    newUpdatedValues[name] = value;
    setUpdatedValues(newUpdatedValues);
    localStorage.setItem("flightData", JSON.stringify(newUpdatedValues));
  };
  // console.log(updatedValues);

  // here get data and fetch data filter
  useEffect(() => {
    const searchResults = flights.filter(items => {
      if (parsed?.to === items?.to) {
        return items;
      }
    });
    setSearResult(searchResults);
  }, [flights]);

  const handleResults = e => {
    const searchResults = flights.filter(items => {
      if (updatedValues?.to === items?.to) {
        return items;
      }
    });
    setSearResult(searchResults);
    // console.log(searchResults);
  };

  return (
    <div>
      <Navbar />
      {/* here search input */}
      <div className="modify-flight-section p-5">
        <div className="container">
            <div className="d-block  d-md-flex  justify-content-center ">
              <div className="d-flex w-100 ">
                <div className="form-floating w-100">
                  <input
                    onChange={handleFrom}
                    name="from"
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="From"
                  />
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
               {/* for mobile */}
               <div className="d-block d-lg-none date w-100  my-3">
                <div className="form-floating w-100 mb-3">
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
                    name="journey-date"
                    type="date"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">RETURN DATE</label>
                </div>
              </div>
              <div className="form-floating w-100  d-block d-lg-none">
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
              <button onClick={handleResults}  className="modify-btn mt-md-0 mt-3 py-3 py-lg-0">
                Modify Search
              </button>
            </div>
        </div>
      </div>
      {/* here input result */}
      <div className="common-section ">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {searchResults.map(flight => (
              <div className="flight mt-5">
                <div className="card  mb-3 ps-0">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={flight?.img} className="fla-img rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-around mb-5">
                          <div>
                            <h6 className="card-title fw-bold">{flight?.from}</h6>
                            <h6 className="card-title">
                              <small>{flight?.startDate}</small>
                            </h6>
                          </div>
                          <h6 className="mx-5 arrow">
                            <AiOutlineSwap />
                          </h6>
                          <div>
                            <h6 className="card-title fw-bold">{flight?.to}</h6>
                            <h6 className="card-title">
                              <small>{flight?.endDate}</small>
                            </h6>
                          </div>
                          <div className="time ms-5">
                            <h6>{flight?.totalTime}</h6>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <h5 className="ms-1 fw-bold">BDT {flight?.price}</h5>
                            <s className="ms-3 text-secondary">{flight?.oldPrice}</s>
                          </div>
                          <div className="select flights">
                            <Link to={`/flights/${flight?._id}`}>
                              <button>
                                Booking <RiArrowRightLine className="ms-5 fs-5" />
                              </button>{" "}
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

export default FlightSearch;
