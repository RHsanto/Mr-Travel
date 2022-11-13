/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { useEffect } from "react";
// import BusResults from "./ModifyResult/BusResults";

const ModifyBus = () => {
  const [from, setFrom] = useState([]);
  const [searchTo, setSearchTo] = useState([]);
  const [updatedValues, setUpdatedValues] = useState();
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(" https://mr-travel-server.onrender.com/busInfo")
      .then(res => res.json())
      .then(data => {
        setResults(data);
        setFrom(data);
      });
  }, []);

  const handleFrom = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newUpdatedValues = { ...updatedValues };
    newUpdatedValues[name] = value;
    setUpdatedValues(newUpdatedValues);
    localStorage.setItem('busData', JSON.stringify(newUpdatedValues))
  };
  console.log(updatedValues);

  const handleResults = e => {
    const searchResults = results.filter(items => {
      if (updatedValues?.from || updatedValues?.to === items?.from || items?.to) {
        return items;
      }
    });
    setSearchTo(searchResults);
    // console.log(searchResults);
  };

  return (
    <div className="pb-5">
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
              <option value="">--Select From Destination--</option>
              {from.map(tours => (
                <option value={tours?.from}>{tours?.from}</option>
              ))}
            </select>
            <label htmlFor="floatingSelect">FROM</label>
          </div>
          <div className="form-floating w-50 ms-2 ">
            <select
            name="to"
              onChange={handleFrom}
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option value="">--Select From Destination--</option>
              {from.map(tours => (
                <option value={tours?.to}>{tours?.to}</option>
              ))}
            </select>
            <label htmlFor="floatingSelect">TO</label>
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
          <label htmlFor="floatingInput">JOURNEY DATE</label>
        </div>
        {/* for mobile */}
        <div className="form-floating  mt-3 mt-md-0  d-block d-md-none">
          <input
            type="date"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">JOURNEY DATE</label>
        </div>

        <button onClick={handleResults} className="modify-btn mt-md-0 mt-3 py-3py-lg-0">
          Modify Search
        </button>
      </div>
      {searchTo.map(data=>
        <li>{data?.from}</li>)}
    </div>
  );
};

export default ModifyBus;
