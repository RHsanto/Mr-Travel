/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
// import ModifyTour from "../ModifySearch/ModifyTour";
import { RiArrowRightLine } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { HiClock } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const TourSearch = () => {
  // here get local storage items
  const results = localStorage.getItem("tourData");
 const [tours, setTours] = useState([]);
 const [searchResults, setSearResult] = useState([]);
 const [updatedValues, setUpdatedValues] = useState();
 // here data parsed
 let parsed;
 if (results != undefined) {
   parsed = JSON.parse(results);
 }

  useEffect(() => {
    fetch("  http://localhost:8000/tourInfo")
      .then(response => response.json())
      .then(data => setTours(data));
  }, []);

  const handleFrom = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newUpdatedValues = { ...updatedValues };
    newUpdatedValues[name] = value;
    setUpdatedValues(newUpdatedValues);
    localStorage.setItem("tourData", JSON.stringify(newUpdatedValues));
  };

  
  // here get data and fetch data filter
  useEffect(() => {
    const searchResults = tours.filter(items => {
      if (parsed?.TourName === items?.TourName) {
        return items;
      }
    });
    setSearResult(searchResults);
  }, [parsed?.TourName, tours]);

  const handleResults = e => {
    const searchResults = tours.filter(items => {
      if (updatedValues?.TourName === items?.TourName) {
        return items;
      }
    });
    setSearResult(searchResults);
  };




  return (
    <div>
      <Navbar />
    <div className="modify-tour-data p-5">
      <div className="container">
         <div className="d-flex ">
         <div className="form-floating w-100">
        <select
          onChange={handleFrom}
          name="TourName"
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          required
        >
          <option>--Select Tour Destination--</option>
          {tours.map(tourData => (
            <option key={tourData?.id} value={tourData?.TourName}>
              {tourData?.TourName}
            </option>
          ))}
        </select>
        <label for="floatingInput">LOCATION / TOUR</label>
      </div>
      <button onClick={handleResults}
       className="modify-btn mt-md-0 mt-3 py-3 py-lg-0">Modify Search
       </button>
       
    </div>
      </div>
    </div>
   {/* here result */}
      <div className="common-section ">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {searchResults.map(tour => (
              <div className="flight mt-5">
                <div className="card mb-3 ps-0">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={tour?.img} className="img-fluid  h-100 rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body ">
                        <h5 className="card-title fw-bold">{tour?.TourName}</h5>
                        <h6>
                          <MdLocationPin /> {tour?.area}, Bangladesh
                        </h6>

                        <div className="ms-1">
                          <small>
                            <HiClock /> {tour?.totalTime} hour
                          </small>
                          ,
                          <small className="ms-2">
                            <FaUsers /> {tour?.member} people
                          </small>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-5">
                          <div className="d-flex">
                            <h6 className="mx-1">
                              <b>BDT {tour?.price}</b>
                            </h6>
                            <p>
                              <small>(Per Person)</small>
                            </p>
                          </div>
                          <div className="select">
                            <Link to={`/tours/${tour._id}`}>
                              <button>
                                Booking <RiArrowRightLine className="ms-4 fs-5" />
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

export default TourSearch;
