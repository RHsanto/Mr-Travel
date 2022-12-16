import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const Flight = () => {
  const { data: flightsData } = useSWR(`https://mr-travel-server.onrender.com/flightInfo`, fetcher);

  const [updatedValues, setUpdatedValues] = useState();

  // get input items when selected
  const handleFrom = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newUpdatedValues = { ...updatedValues };
    newUpdatedValues[name] = value;
    setUpdatedValues(newUpdatedValues);
    localStorage.setItem("flightData", JSON.stringify(newUpdatedValues));
  };
  return (
    <div>
      <div className="d-block  d-md-flex  justify-content-center ">
        <div className="d-flex w-100 ">
          <div className="form-floating w-100">
            <select
              onChange={handleFrom}
              name="from"
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option>--Select From Destination--</option>
              {flightsData?.map(data => (
                <option key={data?._id} value={data?.from}>
                  {data?.from}
                </option>
              ))}
            </select>
            <label htmlFor="floatingSelect">FROM</label>
            {/* comment input field */}
            {/* <input
              onChange={handleFrom}
              name="from"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="From"
            />
            <label htmlFor="floatingInput">FROM</label> */}
          </div>
          <div className="form-floating ms-2 w-100">
            {/* <input
              onChange={handleFrom}
              name="to"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="To"
            /> */}
            <select
              onChange={handleFrom}
              name="to"
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option>--Select To Destination--</option>
              {flightsData?.map(data => (
                <option key={data?._id} value={data?.to}>
                  {data?.to}
                </option>
              ))}
            </select>
            <label htmlFor="floatingSelect">TO</label>
            {/* <label htmlFor="floatingInput">TO</label> */}
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
            <label htmlFor="floatingInput">JOURNEY DATE</label>
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
            <label htmlFor="floatingInput">RETURN DATE</label>
          </div>
        </div>
        <div className="form-floating w-50 ms-2 d-none d-lg-block">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option value="">Open this select class</option>
            <option value="Economic">Economic</option>
            <option value="Business">Business</option>
          </select>
          <label htmlFor="floatingSelect">TRAVELER CLASS</label>
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
            <label htmlFor="floatingInput">JOURNEY DATE</label>
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
            <label htmlFor="floatingInput">RETURN DATE</label>
          </div>
        </div>
        <div className="form-floating w-100  d-lg-none">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option value="">Open this select class</option>
            <option value="Economic">Economic</option>
            <option value="Business">Business</option>
          </select>
          <label htmlFor="floatingSelect">TRAVELER CLASS</label>
        </div>
      </div>
      <div className="search-btn">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 px-0  mx-auto mt-3">
              {updatedValues ? (
                <Link to="/flight">
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

export default Flight;
