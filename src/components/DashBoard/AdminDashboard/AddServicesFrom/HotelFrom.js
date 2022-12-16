import React from "react";
import { FaHotel } from "react-icons/fa";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { MdAddToPhotos } from "react-icons/md";

const HotelFrom = () => {
  // react hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    axios.post("  https://mr-travel-server.onrender.com/add-hotel", data).then(res => {
      if (res.data.insertedId) {
        toast.success("Add Successfully", {
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-floating mb-3">
                      <input
                       {...register("hotelName")}
                        required
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="hotelName"
                      />
                      <label for="floatingInput">Hotel Name </label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                       {...register("img")}
                        required
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="mainImg"
                      />
                      <label for="floatingInput">Img Link </label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                       {...register("slider1")}
                       required
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="sliderImg"
                      />
                      <label for="floatingInput">Slider Img one </label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                       {...register("slider2")}
                       required
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="sliderImg"
                      />
                      <label for="floatingInput">Slider Img Two </label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                       {...register("slider3")}
                       required
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="sliderImg"
                      />
                      <label for="floatingInput">Slider Img Three </label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                       {...register("checkIn")}
                       required
                        type="date"
                        class="form-control"
                        id="floatingInput"
                        placeholder="checkIn"
                      />
                      <label for="floatingInput">Check In </label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                       {...register("checkOut")}
                       required
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
                         {...register("room")}
                          required
                          type="number"
                          class="form-control "
                          id="floatingInput"
                          placeholder="room"
                        />
                        <label for="floatingInput">Total Room </label>
                      </div>
                      <div class="form-floating mb-3 ">
                        <input
                         {...register("guest")}
                         required
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
                         {...register("tax")}
                          required
                          type="number"
                          class="form-control "
                          id="floatingInput"
                          placeholder="tax"
                        />
                        <label for="floatingInput">Tax Fee </label>
                      </div>
                      <div class="form-floating mb-3 ">
                        <input
                         {...register("service")}
                         required
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
                       {...register("price")}
                       required
                        type="number"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Price"
                      />
                      <label for="floatingInput">Price</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                       {...register("rating")}
                       required
                        type="number"
                        class="form-control"
                        id="floatingInput"
                        placeholder="ratings"
                      />
                      <label for="floatingInput">Ratings</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                       {...register("location")}
                       required
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Location"
                      />
                      <label for="floatingInput">Location</label>
                    </div>
                    <div class="form-floating mb-3">
                      <select
                       {...register("types")}
                       required
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
                       {...register("description")}
                       required
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                      ></textarea>
                      <label for="floatingTextarea">Description</label>
                    </div>
                   <div className="ms-1 mt-3 ">
                  <button type="submit" className="confirm w-100">
                  <MdAddToPhotos/>  Add Hotel Services
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
      </div>
    </div>
  );
};

export default HotelFrom;
