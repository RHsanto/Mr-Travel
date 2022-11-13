import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Bus = () => {
  const [updatedValues, setUpdatedValues] = useState();
  const[busInfo,setBusInfo]=useState([]);

  // here fetch data
  useEffect(()=>{
    fetch(' https://mr-travel-server.onrender.com/busInfo')
    .then(res=>res.json())
    .then(data=>setBusInfo(data))
  },[])


  // get input items when selected 
  const handleFrom = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newUpdatedValues = { ...updatedValues };
    newUpdatedValues[name] = value;
    setUpdatedValues(newUpdatedValues);
    localStorage.setItem('busData', JSON.stringify(newUpdatedValues))
 
  };
  return (
    <div>
      <div className="d-block  d-md-flex  gap-3">
        <div className="d-flex  w-100">
          {/* from data input  */}
          <div className="form-floating w-50 ms-2 ">
            <select
              onChange={handleFrom}
              name="from"
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option >--Select From Destination--</option>
              {busInfo.map(busData=>(
                <option key={busData?.id} value={busData?.from}>{busData?.from}</option>
              ))}
            </select>
            <label for="floatingSelect">FROM</label>
          </div>
          {/* to data input */}
          <div className="form-floating w-50 ms-2 ">
            <select
              onChange={handleFrom}
              name="to"
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
            <option >--Select To Destination--</option>
             {busInfo.map(busData=>(
                <option key={busData?.id} value={busData?.to}>{busData?.to}</option>
              ))}
            </select>
            <label for="floatingSelect">TO</label>
          </div>
        </div>
        <div className="form-floating  mt-3 mt-md-0 w-50 d-none d-md-block">
          <input
            name="date"
            type="date"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">JOURNEY DATE</label>
        </div>

        {/* for mobile device*/}
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
