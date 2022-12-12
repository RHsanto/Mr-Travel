import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tour = () => {
  const [updatedValues, setUpdatedValues] = useState();
  const [tourInfo, setTourInfo] = useState([]);

  // here fetch data
  useEffect(() => {
    fetch("  https://mr-travel-server.onrender.com/tourInfo")
      .then(res => res.json())
      .then(data => setTourInfo(data));
  }, []);

  // get input items when selected
  const handleFrom = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newUpdatedValues = { ...updatedValues };
    newUpdatedValues[name] = value;
    setUpdatedValues(newUpdatedValues);
    localStorage.setItem("tourData", JSON.stringify(newUpdatedValues));
  };

  return (
    <div>
      <div className="form-floating w-100">
        <select
          onChange={handleFrom}
          name="TourName"
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option>--Select Tour Destination--</option>
          {tourInfo.map(tourData => (
            <option key={tourData?._id} value={tourData?.TourName}>
              {tourData?.TourName}
            </option>
          ))}
        </select>
        <label htmlFor="floatingInput">LOCATION / TOUR</label>
      </div>
      <div className="search-btn">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 px-0 mx-auto mt-3">
              {updatedValues ? (
                <Link to="/tour">
                  {" "}
                  <button> Search </button>
                </Link>
              ) : (
                <>
                  <button className="bg-secondary" title="Please select destination">
                    {" "}
                    Search{" "}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
