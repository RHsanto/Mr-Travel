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
                    <GiCommercialAirplane className="me-2"/>  ADD FLIGHT ITEMS 
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended to demonstrate the{" "}
                      <code>.accordion-flush</code> class. This is the first item's accordion body.
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
                      <FaHotel className="me-2"/> ADD HOTEL ITEMS
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
                      <GiPalmTree className="me-1"/> ADD TOUR ITEMS
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
