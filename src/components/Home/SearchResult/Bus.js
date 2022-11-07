import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Bus = () => {
  const [updatedValues, setUpdatedValues] = useState();
  const[busInfo,setBusInfo]=useState([]);

  // here fetch data
  useEffect(()=>{
    fetch('http://localhost:8000/busInfo')
    .then(res=>res.json())
    .then(data=>setBusInfo(data))
  },[])

  return (
    <div>
      <div className="d-block  d-md-flex  gap-3">
        <div className="d-flex  w-100">
          {/* from data input  */}
          <div className="form-floating w-50 ms-2 ">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              {busInfo.map(busData=>(
                <option key={busData?.id} value={busData?.from}>{busData?.from}</option>
              ))}
            </select>
            <label for="floatingSelect">FROM</label>
          </div>
          {/* to data input */}
          <div className="form-floating w-50 ms-2 ">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
             {busInfo.map(busData=>(
                <option key={busData?.id} value={busData?.to}>{busData?.to}</option>
              ))}
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
