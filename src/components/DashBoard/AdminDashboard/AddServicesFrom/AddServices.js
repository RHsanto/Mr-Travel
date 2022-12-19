import React from "react";
import AdminDashHeader from "../AdminDashHeader";
import FlightFrom from "./FlightFrom";
import HotelFrom from "./HotelFrom";
import TourFrom from "./TourFrom";

const AddServices = () => {
  return (
    <div>
      <AdminDashHeader />
      <div className="container-fluid px-1">
       <div className="row">
        <div className="col-lg-4 mb-5">
          <FlightFrom/>
        </div>
        <div className="col-lg-4 mb-5">
          <HotelFrom/>
        </div>
        <div className="col-lg-4 mb-5">
          <TourFrom/>
        </div>
       </div>
      </div>
    </div>
  );
};

export default AddServices;
