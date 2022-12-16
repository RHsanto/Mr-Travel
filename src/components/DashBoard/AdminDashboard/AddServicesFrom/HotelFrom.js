import React from "react";
import { FaHotel } from "react-icons/fa";

const HotelFrom = () => {
  return (
    <div className="hotel-from">
      <div className="accordion accordion-flush" id="accordionFlushExample">
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
                <div className="add-hotel-from">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="hotelName"
                    />
                    <label for="floatingInput">Hotel Name </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="mainImg"
                    />
                    <label for="floatingInput">Img Link </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="sliderImg"
                    />
                    <label for="floatingInput">Slider Img one </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="sliderImg"
                    />
                    <label for="floatingInput">Slider Img Two </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="sliderImg"
                    />
                    <label for="floatingInput">Slider Img Three </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="date"
                      class="form-control"
                      id="floatingInput"
                      placeholder="checkIn"
                    />
                    <label for="floatingInput">Check In </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="date"
                      class="form-control"
                      id="floatingInput"
                      placeholder="checkIn"
                    />
                    <label for="floatingInput">Check Out </label>
                  </div>
                  <div className="d-flex">
                    <div class="form-floating mb-3 ">
                      <input
                        type="number"
                        class="form-control "
                        id="floatingInput"
                        placeholder="room"
                      />
                      <label for="floatingInput">Total Room </label>
                    </div>
                    <div class="form-floating mb-3 ">
                      <input
                        type="number"
                        class="form-control ms-2"
                        id="floatingInput"
                        placeholder="guest"
                      />
                      <label for="floatingInput">Total Guest </label>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div class="form-floating mb-3 ">
                      <input
                        type="number"
                        class="form-control "
                        id="floatingInput"
                        placeholder="tax"
                      />
                      <label for="floatingInput">Tax Fee </label>
                    </div>
                    <div class="form-floating mb-3 ">
                      <input
                        type="number"
                        class="form-control ms-2"
                        id="floatingInput"
                        placeholder="serviceFee"
                      />
                      <label for="floatingInput">Service Fee </label>
                    </div>
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
                      type="number"
                      class="form-control"
                      id="floatingInput"
                      placeholder="ratings"
                    />
                    <label for="floatingInput">Ratings</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Location"
                    />
                    <label for="floatingInput">Location</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option defaultValue="Hotel">Hotel</option>
                    </select>
                    <label for="floatingSelect">Service Type</label>
                  </div>
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea">Description</label>
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

export default HotelFrom;
