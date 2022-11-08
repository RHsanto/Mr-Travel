/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../common/Navbar";
import { RiArrowLeftRightFill, RiArrowRightLine } from "react-icons/ri";
import { SiAirplayaudio } from "react-icons/si";
import { Link } from "react-router-dom";

const BusSearch = () => {
  // here get local storage items
  const results = localStorage.getItem("busData");
  const [busData, setBusData] = useState([]);
  const [searchResults, setSearResult] = useState([]);
  const [updatedValues, setUpdatedValues] = useState();
  // here data parsed
  let parsed;
  if (results != undefined) {
    parsed = JSON.parse(results);
  }
  console.log(parsed);

  // here fetch api
  useEffect(() => {
    fetch(" http://localhost:8000/busInfo")
      .then(res => res.json())
      .then(data => setBusData(data));
  }, []);

  const handleFrom = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newUpdatedValues = { ...updatedValues };
    newUpdatedValues[name] = value;
    setUpdatedValues(newUpdatedValues);
    localStorage.setItem("busData", JSON.stringify(newUpdatedValues));
  };
  // console.log(updatedValues);
  
  // here get data and fetch data filter
  useEffect(() => {
    const searchResults = busData.filter(items => {
      if (parsed?.from === items?.from) {
        return items;
      }
    });
    setSearResult(searchResults);
  }, [busData]);

  const handleResults = e => {
    const searchResults = busData.filter(items => {
      if (updatedValues?.from === items?.from) {
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
      {/* <div className=" all-inputs">
        <div className=" rounded  pt-5 pb-3 px-4">
          <div className="container">
            <ModifyBus />
          </div>
        </div>
      </div> */}

  {/*here main results section  */}
      <div className="results-section">
 {/* here modify section */}
        <div className="modify-section p-5">
          <div className="container">
            <div className="d-block  d-md-flex  gap-3">
              <div className="d-flex  w-100">
                <div className="form-floating w-50 ms-2 ">
                  <select
                    name="from"
                    onChange={handleFrom}
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option>--Select From Destination--</option>
                    {busData.map(tours => (
                      <option value={tours?.from}>{tours?.from}</option>
                    ))}
                  </select>
                  <label for="floatingSelect">FROM</label>
                </div>
                <div className="form-floating w-50 ms-2 ">
                  <select
                    name="to"
                    onChange={handleFrom}
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option>--Select To Destination--</option>
                    {busData.map(tours => (
                      <option value={tours?.to}>{tours?.to}</option>
                    ))}
                  </select>
                  <label for="floatingSelect">TO</label>
                </div>
              </div>
              <div className="form-floating  mt-3 mt-md-0 w-50 d-none d-md-block">
                <input
                  name="date"
                  onChange={handleFrom}
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

              <button onClick={handleResults} 
              className="modify-btn mt-md-0 mt-3 py-3 py-lg-0">
                Modify Search
              </button>
            </div>
          </div>
        </div>
  {/* here modify data  results */}
        <div className="common-section ">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {searchResults.map(bus => (
                <div key={bus._id} className="flight mt-5">
                  <div className="card mb-3 ps-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={bus?.img} className="img-fluid  h-100 rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-around ">
                            <div>
                              <h6 className="card-title fw-bold">{bus?.from}</h6>
                              <h6 className="card-title">
                                <small>{bus?.startDate}</small>
                              </h6>
                            </div>
                            <h6 className="mx-5 arrow">
                              <RiArrowLeftRightFill />
                            </h6>
                            <div>
                              <h6 className="card-title fw-bold">{bus?.to}</h6>
                              <h6 className="card-title">
                                <small>{bus?.endDate}</small>
                              </h6>
                            </div>
                            <div className="time ms-5">
                              <h6>{bus?.totalTime}</h6>
                            </div>
                          </div>
                          <h6 className="m-2">
                            <SiAirplayaudio /> {bus?.type}
                          </h6>

                          <div className="d-flex justify-content-between mt-5">
                            <div className="d-flex">
                              <h5 className="mx-1 fw-bold">BDT {bus?.price}</h5>
                              <small>(per person)</small>
                            </div>
                            <div className="select">
                              <Link to={`/bus/${bus._id}`}>
                                {" "}
                                <button>
                                  view sites <RiArrowRightLine className="ms-4 fs-5" />
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
      {/* here result */}
    </div>
  );
};

export default BusSearch;
