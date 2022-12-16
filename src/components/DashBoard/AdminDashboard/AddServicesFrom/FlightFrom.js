import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";

const FlightFrom = () => {
  return (
    
      <div className="flight-from">
        <div className="accordion accordion-flush" id="accordionFlushExample">
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
                      <input type="text" class="form-control" id="floatingInput" placeholder="TO" />
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
      </div>
    
  );
};

export default FlightFrom;
