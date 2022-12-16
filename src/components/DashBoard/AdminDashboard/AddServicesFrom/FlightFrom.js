import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdAddToPhotos } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const FlightFrom = () => {
  // react hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    axios.post("  https://mr-travel-server.onrender.com/add-flight", data).then(res => {
      if (res.data.insertedId) {
        toast.success("Add Successful", {
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
                <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-floating mb-3">
                    <input
                      {...register("from")}
                      required
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label for="floatingInput">From </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      {...register("to")}
                      required
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="TO"
                    />
                    <label for="floatingInput">TO </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      {...register("journeyDate")}
                      required
                      type="date"
                      class="form-control"
                      id="floatingInput"
                      placeholder="journey Date"
                    />
                    <label for="floatingInput">Journey Date </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      {...register("returnDate")}
                      required
                      type="date"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Return Date"
                    />
                    <label for="floatingInput">Return Date </label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      {...register("class")}
                      required
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option value="Business">Business</option>
                      <option value="Economic">Economic</option>
                    </select>
                    <label for="floatingSelect">Select Class Type</label>
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
                     {...register("planeName")}
                      required
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="planeName"
                    />
                    <label for="floatingInput">Plane Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                    {...register("startDate")}
                     required
                      type="time"
                      class="form-control"
                      id="floatingInput"
                      placeholder="startDate"
                    />
                    <label for="floatingInput">Start Date</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                    {...register("endDate")}
                    required
                      type="time"
                      class="form-control"
                      id="floatingInput"
                      placeholder="endDate"
                    />
                    <label for="floatingInput">End Date</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                    {...register("totalTime")}
                     required
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="totalTime"
                    />
                    <label for="floatingInput">Total Time</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                    {...register("img")}
                     required
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="ImgLink"
                    />
                    <label for="floatingInput">Img link</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                    {...register("types")}
                     required
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option defaultValue="Flight">Flight</option>
                    </select>
                    <label for="floatingSelect">Service Type</label>
                  </div>
                  <div className="ms-1 mt-3 ">
                  <button type="submit" className="confirm w-100">
                  <MdAddToPhotos/>  Add Flight Services
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

export default FlightFrom;
