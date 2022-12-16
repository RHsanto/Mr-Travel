import React from "react";
import { GiPalmTree } from "react-icons/gi";

const TourFrom = () => {
  return (
    <div className="tour-from">
      <div className="accordion accordion-flush" id="accordionFlushExample">
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
                <div className="add-tour-from">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="area" />
                    <label for="floatingInput">Location </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="tourName"
                    />
                    <label for="floatingInput">Tour Name </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="date"
                      class="form-control"
                      id="floatingInput"
                      placeholder="checkIn"
                    />
                    <label for="floatingInput">Check In</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="date"
                      class="form-control"
                      id="floatingInput"
                      placeholder="checkout"
                    />
                    <label for="floatingInput">Check Out</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="date"
                      class="form-control"
                      id="floatingInput"
                      placeholder="checkout"
                    />
                    <label for="floatingInput">Check Out</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option value="3 to 20">3 to 20</option>
                      <option value="5 to 25">5 to 25</option>
                      <option value="7 to 30">7 to 30</option>
                    </select>
                    <label for="floatingSelect">Total Member</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="number"
                      class="form-control"
                      id="floatingInput"
                      placeholder="TotalTime"
                    />
                    <label for="floatingInput">Total Time</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="number"
                      class="form-control"
                      id="floatingInput"
                      placeholder="price"
                    />
                    <label for="floatingInput">Price</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="price"
                    />
                    <label for="floatingInput">Img Link</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option defaultValue="Tour">Tour</option>
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

export default TourFrom;
