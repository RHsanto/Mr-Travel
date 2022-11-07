/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../common/Navbar";
import ModifyBus from "../ModifySearch/ModifyBus";
import { RiArrowLeftRightFill, RiArrowRightLine } from "react-icons/ri";
import { SiAirplayaudio } from "react-icons/si";
import { Link } from "react-router-dom";

const BusSearch = () => {
  // here get local storage items
  const results = localStorage.getItem("busData");
  const [busData, setBusData] = useState([]);
  const[searchResults,setSearResult] =useState([])

  // here data parsed
  let parsed 
  if(results != undefined)
  {parsed = JSON.parse(results);}
  console.log(parsed);

  // here fetch api
  useEffect(() => {
    fetch(" http://localhost:8000/busInfo")
      .then(res => res.json())
      .then(data => setBusData(data));
  }, []);

// here get data and fetch data filter
useEffect(()=>{
  const searchResults = busData.filter((items)=>{
    if( parsed?.from || parsed?.to ==  items?.from || items?.to ){
      return (items)
    }
  })
  setSearResult(searchResults)
},[busData])

  return (
    <div>
      <Navbar /> 
  {/* here search input */}
      <div className=" all-inputs">
        <div className=" rounded  pt-5 pb-3 px-4">
          <div className="container">
            <ModifyBus />
          </div>
        </div>
      </div>
   {/* here result */}
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
  );
};

export default BusSearch;
