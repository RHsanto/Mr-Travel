/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsGeoAltFill, BsGlobe } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdTipsAndUpdates, MdPanTool } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Navbar from "../common/Navbar";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./Details.css";
const TourDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState([]);
  useEffect(() => {
    fetch(` https://mr-travel-server.onrender.com/tours/${id}`)
      .then(res => res.json())
      .then(data => setTour(data));
  });

  // react hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    // console.log(data);

    // here put booking info
    data.types = tour.types;
    data.img = tour.img;
    data.TourName = tour.TourName;
    data.totalTime = tour.totalTime;
    data.member = tour.member;
    data.price = tour.price;

    axios.post("  http://localhost:8000/booking", data).then(res => {
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
            <div className="col-lg-10 ">
              <div className="row shadow bg d-flex mx-1">
                <div className="col-lg-8 px-0">
                  <img src={tour?.img} className="w-100 h-100" alt="" />
                </div>
                <div className="col-lg-4 p-4">
                  <h4>{tour?.TourName}</h4>
                  <p>
                    <BsGeoAltFill className="color" /> {tour?.area}
                  </p>
                  <div className="d-flex gap-4 ">
                    <p>
                      <AiOutlineFieldTime className="color" /> {tour?.totalTime} hours
                    </p>
                    <p>
                      <FaUsers className="color" /> {tour?.member} people
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <h3>Price: {tour?.price}</h3> <small>BDT(per person)</small>{" "}
                  </div>
                </div>
              </div>
              {/* accordion */}
              <div className="row mt-5 shadow mx-1 bg">
                <div className="col-lg-8 px-0">
                  {/* accordion */}
                  <div
                    className="accordion accordion-flush bg-light border-bottom border-1"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <div
                          className="accordion-button collapsed "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          <h5>
                            <BsGlobe className="re-icons" /> Description
                          </h5>
                        </div>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p className=" lh-lg">
                            <>
                              Imagine exploring the tourist spots of the world's largest sea beach,
                              Cox's Bazar in a double-decker tourist bus. Having the wide ocean view
                              on one side and hill view on the other, this tour is an excellent
                              opportunity for you to enjoy an entire day while fulfilling a major
                              portion of your Cox's Bazar checklist. Driving through the iconic
                              marine drive, Aquaholic Tourist Caravan offers you a stoppage at every
                              spot to hop around comfortably. This tour also comes with special meal
                              services, a mini library, washroom and refreshments - all inside the
                              tourist bus! Overall, this unique experience of roaming around and
                              visiting spots in a double-decker tourist bus is definitely going to
                              be one of the activities to cherish with your friends or family in
                              Cox's Bazar.
                            </>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* accordion 2*/}
                  <div
                    className="accordion accordion-flush bg-light border-bottom border-1"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <div
                          className="accordion-button collapsed "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          <h5>
                            <BsGeoAltFill className="re-icons" /> Location
                          </h5>
                        </div>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p className=" lh-lg">
                            Pick-up: Ground Floor, Motel Upal, Shaibal Road, Cox's Bazar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* accordion 3*/}
                  <div
                    className="accordion accordion-flush bg-light border-bottom border-1"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <div
                          className="accordion-button collapsed "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          <h5>
                            <AiOutlineFieldTime className="re-icons" /> Timing
                          </h5>
                        </div>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <>9:00 AM - 6:00 PM</>
                          <p>
                            <b>Duration</b> : {tour?.totalTime} hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* accordion 4*/}
                  <div
                    className="accordion accordion-flush bg-light border-bottom border-1"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <div
                          className="accordion-button collapsed "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          <h5>
                            <MdTipsAndUpdates className="re-icons" /> Travel Tips
                          </h5>
                        </div>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Carry drinking water. Stay hydrated, travel healthy.</li>
                            <li>It is advised to carry a set of fresh clothes for the beach.</li>
                            <li>
                              Always be respectful of the rules and guidelines of the tourist spots.
                            </li>
                            <li>Please do not litter. Use a polybag as a portable trash bin.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* accordion 5*/}
                  <div
                    className="accordion accordion-flush bg-light border-bottom border-1"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFive">
                        <div
                          className="accordion-button collapsed "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          <h5>
                            <MdPanTool className="re-icons" /> Inclusion & Exclusion
                          </h5>
                        </div>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <div className="list">
                            <li>
                              <span>✔</span> All Entry Tickets of Hopping Destinations
                            </li>
                            <li>
                              <span>✔</span> Welcome Breakfast
                            </li>
                            <li>
                              <span>✔</span> Lunch Platter
                            </li>
                            <li>
                              <span>✔</span> Evening Snacks
                            </li>
                            <li>
                              <span>✔</span> Washroom
                            </li>
                            <li>
                              <span>✔</span> Library
                            </li>
                            <li>
                              <span>✔</span> WIFI
                            </li>
                            <li>
                              <span>✔</span> First Aid Kit (In case of emergency)
                            </li>
                            <li>
                              <span className="text-danger">✕</span> Personal expenses
                            </li>
                            <li>
                              <span className="text-danger">✕</span> Anything else that isn't
                              mentioned on Inclusions
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* booking form */}
                <div className="col-lg-4 p-2 shadow-lg mt-5 mt-lg-0 ">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form border p-3 rounded">
                      <div className="form-floating mb-3">
                        <input
                          type="date"
                          required
                          {...register("date")}
                          className="form-control"
                          id="floatingInput"
                          placeholder="date"
                        />
                        <label htmlFor="floatingInput">Journey date</label>
                      </div>
                      <div className="form-floating mb-4">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          {...register("traveler")}
                          aria-label="Floating label select example"
                        >
                          <option value="1" >
                            1
                          </option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <label htmlFor="floatingSelect">TRAVELER </label>
                      </div>
                      <div className="form-floating mb-3 ">
                        <input
                          type="text"
                          required
                          {...register("firstName")}
                          className="form-control"
                          id="floatingInput"
                          placeholder="firstName"
                        />
                        <label htmlFor="floatingInput">Enter Name</label>
                      </div>
                      <div className="form-floating mb-3 ">
                        <input
                          type="email"
                          required
                          {...register("email")}
                          className="form-control"
                          id="floatingInput"
                          placeholder="Email"
                        />
                        <label htmlFor="floatingInput">Email</label>
                      </div>
                      <div className="form-floating mb-3 ">
                        <input
                          type="tel"
                          required
                          {...register("PhoneNumber")}
                          className="form-control"
                          id="phone"
                          placeholder="Number"
                        />
                        <label htmlFor="floatingInput">Phone Number</label>
                      </div>

                      <>
                        <button type="submit" className="w-100 btn btn-warning">
                          Confirm Booking
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
                        </button>
                      </>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
