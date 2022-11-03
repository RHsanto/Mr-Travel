/* eslint-disable no-lone-blocks */
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineSwapRight, AiOutlineSmallDash } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Navbar from "../../components/common/Navbar";
import "react-toastify/dist/ReactToastify.css";
import "./Details.css";
import axios from "axios";
const FlightDetails = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    fetch(` http://localhost:8000/flights/${id}`)
      .then(response => response.json())
      .then(data => setFlight(data));
  });
  // react hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);

    data.types = flight.types;
    data.img = flight.img;
    data.planeName = flight.planeName;
    data.from = flight.from;
    data.to = flight.to;
    data.class = flight.class;
    data.price = flight.price;

    axios.post(" http://localhost:8000/booking", data).then(res => {
      if (res.data.insertedId) {
        toast.success("Booking Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="flight-details">
        <div className="container">
          <div className="row">
            <h4 className="ms-1 pb-3 fw-bold">Review Your Booking</h4>
            <div className="col-lg-8 ">
              <div className="row  shadow bg d-flex  mx-1">
                <div className="col-lg-5 px-0">
                  <img src={flight?.img} className="w-100" alt="" />
                </div>
                <div className="col-lg-7 p-4">
                  <div className="d-flex justify-content-between ">
                    <div className="">
                      <h5>
                        {flight?.from}
                        <AiOutlineSwapRight className="mx-2 " />
                        {flight?.to}
                      </h5>
                      <p>{flight?.planeName}</p>
                    </div>
                    <div className="">
                      <h6>({flight?.class})</h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6>
                        Time :{" "}
                        <b>
                          {flight?.startDate}
                          <AiOutlineSmallDash className="mx-2 " />
                          {flight?.endDate}
                        </b>
                      </h6>
                      <h6>{flight?.journeyDate}</h6>
                    </div>
                    <p>
                      <small>({flight?.totalTime})</small>
                    </p>
                  </div>
                  <h4 className="mt-0 mt-lg-5">BDT {flight?.price}</h4>
                </div>
              </div>
              {/* accordion */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="accordion-item bg shadow mt-4 mx-1 ">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <h5>Enter Traveler Details</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <h5>Personal Details</h5>
                      <div className="d-flex justify-content-between mt-5">
                        <div className="form-floating mb-3 w-100 me-lg-3 me-2">
                          <input
                            type="text"
                            required
                            {...register("firstName")}
                            className="form-control"
                            id="floatingInput"
                            placeholder="firstName"
                          />
                          <label for="floatingInput">First Name</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                          <input
                            type="text"
                            required
                            {...register("lastName")}
                            className="form-control"
                            id="floatingInput"
                            placeholder="lastName"
                          />
                          <label for="floatingInput">Last Name</label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between ">
                        <div className="form-floating mb-3 w-100 me-lg-3 me-2">
                          <input
                            type="email"
                            required
                            {...register("email")}
                            className="form-control"
                            id="floatingInput"
                            placeholder="Email"
                          />
                          <label for="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                          <input
                            type="tel"
                            required
                            {...register("PhoneNumber")}
                            className="form-control"
                            id="phone"
                            placeholder="Number"
                          />
                          <label for="floatingInput">Phone Number</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ms-1 mt-3 ">
                  <button type="submit" className="confirm w-100">
                    Confirm Booking
                  </button>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
