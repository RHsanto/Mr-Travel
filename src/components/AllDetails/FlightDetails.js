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
import useSWR from "swr";
import useFirebase from "../../hooks/useFirebase";
import { SiFampay } from "react-icons/si";
//  use useSwr fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const FlightDetails = () => {
  const { user } = useFirebase();
  const { id } = useParams();
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    fetch(`  https://mr-travel-server.onrender.com/flights/${id}`)
      .then(response => response.json())
      .then(data => setFlight(data));
  });

  // here pick booking date
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  // here get user info
  const { data: userData } = useSWR(
    `https://mr-travel-server.onrender.com/user/${user.email}`,
    fetcher
  );
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
    data.bookingDate = date;
    data.userImg = userData?.[0]?.imageLink;
    data.status = "pending";

    axios.post("https://mr-travel-server.onrender.com/booking", data)
    .then(res => {
      window.location.replace(res.data.url);
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
                          <label htmlFor="floatingInput">First Name</label>
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
                          <label htmlFor="floatingInput">Last Name</label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between ">
                        <div className="form-floating mb-3 w-100 me-lg-3 me-2">
                          <input
                            type="email"
                            {...register("email")}
                            className="form-control"
                            id="floatingInput"
                            placeholder="Email"
                            required
                          />
                          <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                          <input
                            type="tel"
                            required
                            {...register("phoneNumber")}
                            className="form-control"
                            id="phone"
                            placeholder="Number"
                          />
                          <label htmlFor="floatingInput">Phone Number</label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between ">
                        <div className="form-floating mb-3 w-100 me-lg-3 me-2">
                          <input
                            type="text"
                            {...register("address")}
                            className="form-control"
                            id="floatingInput"
                            placeholder="address"
                          />
                          <label htmlFor="floatingInput">Address</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                          <input
                            type="number"
                            required
                            {...register("NID")}
                            className="form-control"
                            id="phone"
                            placeholder="Number"
                          />
                          <label htmlFor="floatingInput">NID</label>
                        </div>
                      </div>
                      <div className="form-floating mb-3 w-50 ">
                        <input
                          type="text"
                          required
                          {...register("passportNo")}
                          className="form-control"
                          id="phone"
                          placeholder="Number"
                        />
                        <label htmlFor="floatingInput">Passport Number</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ms-1 mt-3 ">
                  <button type="submit" className="confirm w-100">
                  <SiFampay/>  Payment
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
