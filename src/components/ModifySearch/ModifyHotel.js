import React, { useEffect, useState } from "react";

const ModifyHotel = () => {

  const [updatedValues, setUpdatedValues] = useState();
  const [from, setFrom] = useState([]);
  const [results, setResults] = useState([]);
  const [searchTo, setSearchTo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/busInfo")
      .then(res => res.json())
      .then(data => {
        setResults(data);
        setFrom(data);
      });
  }, []);

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newUpdatedValues = { ...updatedValues };
    newUpdatedValues[name] = value;
    setUpdatedValues(newUpdatedValues);
    localStorage.setItem('hotelData', JSON.stringify(newUpdatedValues))
  };

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
      <div className="d-block  d-md-flex justify-content-center ">
        <div className="form-floating w-50 d-none d-md-block">
          <input
            onChange={handleInput}
            name="hotelName"
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="From" />
          <label for="floatingInput">CITY/HOTEL/RESORT/AREA</label>
        </div>
       
        <div className="date ms-0  ms-lg-3 my-3 my-lg-0 d-flex">
          <div className="form-floating ">
            <input
              onChange={handleInput}
              name="check-in"
              type="date"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">CHECK IN</label>
          </div>
          <div className="form-floating ms-2">
            <input
              onChange={handleInput}
              name="check-out"
              type="date"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
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
         <div className="form-floating  d-block d-md-none">
          <input type="text" className="form-control" id="floatingInput" placeholder="From" />
          <label for="floatingInput">CITY/HOTEL/RESORT/AREA</label>
        </div>
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

        <button className="modify-btn mt-md-0 mt-3 py-3 py-lg-0">Modify Search</button>
      </div>
    </div>
  );
};

export default ModifyHotel;
