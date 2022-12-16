import React from "react";
import { FaHotel } from "react-icons/fa";
import { GiCommercialAirplane, GiPalmTree } from "react-icons/gi";
import AdminDashHeader from "./AdminDashHeader";

const AddServices = () => {
  return (
    <div>
      <AdminDashHeader />
      <div className="container-fluid px-1">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="row py-3 px-2 g-4">
            <div className="col-lg-4">
              <div className="box-flight">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <GiCommercialAirplane className="me-2" /> ADD FLIGHT ITEMS
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="add-flight-from">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="From"
                          />
                          <label for="floatingInput">From </label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="TO"
                          />
                          <label for="floatingInput">TO </label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="date"
                            class="form-control"
                            id="floatingInput"
                            placeholder="journey Date"
                          />
                          <label for="floatingInput">Journey Date </label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="date"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Return Date"
                          />
                          <label for="floatingInput">Return Date </label>
                        </div>
                        <div class="form-floating mb-3">
                          <select
                            class="form-select"
                            id="floatingSelect"
                            aria-label="Floating label select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="Business">Business</option>
                            <option value="Economic">Economic</option>
                          </select>
                          <label for="floatingSelect">Select Class Type</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Price"
                          />
                          <label for="floatingInput">Price</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="planeName"
                          />
                          <label for="floatingInput">Plane Name</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="time"
                            class="form-control"
                            id="floatingInput"
                            placeholder="startDate"
                          />
                          <label for="floatingInput">Start Date</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="time"
                            class="form-control"
                            id="floatingInput"
                            placeholder="endDate"
                          />
                          <label for="floatingInput">End Date</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="totalTime"
                          />
                          <label for="floatingInput">Total Time</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Imglink"
                          />
                          <label for="floatingInput">Img link</label>
                        </div>
                        <div class="form-floating mb-3">
                          <select
                            class="form-select"
                            id="floatingSelect"
                            aria-label="Floating label select example"
                          >
                            <option defaultValue="Flight">Flight</option>
                          </select>
                          <label for="floatingSelect">Service Type</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-hotel">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      <FaHotel className="me-2" /> ADD HOTEL ITEMS
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended to demonstrate the{" "}
                      <code>.accordion-flush</code> class. This is the second item's accordion body.
                      Let's imagine this being filled with some actual content.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-tour">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      <GiPalmTree className="me-1" /> ADD TOUR ITEMS
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended to demonstrate the{" "}
                      <code>.accordion-flush</code> class. This is the third item's accordion body.
                      Nothing more exciting happening here in terms of content, but just filling up
                      the space to make it look, at least at first glance, a bit more representative
                      of how this would look in a real-world application.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
