/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { GiCommercialAirplane, GiPalmTree } from "react-icons/gi";
import { RiHotelFill } from "react-icons/ri";
import { FaBus } from "react-icons/fa";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Tour from "./Tour";
import Bus from "./Bus";
import { useState } from "react";

const SearchResult = () => {
  const [info, setInfo] = useState(<Bus />);

  const handleFlight = e => {
    setInfo(<Flight />);
  };
  const handleTour = e => {
    setInfo(<Tour />);
  };
  const handleHotel = e => {
    setInfo(<Hotel />);
  };
  const handleBus = e => {
    setInfo(<Bus />);
  };

  return (
    <div className="search-section ">
      <div className="container ">
        <div className="search-field">
          <div className="row">
            <div className="col-lg-6 mx-auto col-11 ">
              <div className="all-category rounded shadow-lg">
                <ul className="d-flex  ps-0 justify-content-between align-items-center ">
                  <li onClick={handleBus} className="active">
                    <FaBus /> Bus
                  </li>
                  <li onClick={handleFlight}>
                    <GiCommercialAirplane /> Flight
                  </li>
                  <li onClick={handleHotel}>
                    <RiHotelFill /> Hotel
                  </li>
                  <li onClick={handleTour}>
                    <GiPalmTree /> Tour
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* search body */}
          <div className="row">
            <div className="col-12">
              <div className="all-inputs bg-white rounded shadow-lg pt-5 pb-3 px-4">
                <h4 className="text-center pt-2 pb-4">SELECTED YOU DESTINATION</h4>
                {info}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
