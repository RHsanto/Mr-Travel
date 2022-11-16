import React from "react";
// import Add1 from '../../../images/add1.png'
// import Add2 from '../../../images/add2.png'
// import Add3 from '../../../images/add3.png'
// import Add4 from '../../../images/add4.png'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Add = () => {
  return (
    <div className="reviews-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ">
            <div className="review-item">
              <div className="reviewer">
                <img
                  src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-5.png"
                  alt=""
                />
              </div>
              <div className=" d-flex justify-content-center ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div className="review-text p-4 text-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime amet mollitia
                  nulla, fugit eum magni? Esse, culpa ex. Animi, ut quod! Unde vel repudiandae esse
                  velit architecto quos quaerat!
                </p>
                <h5 className="clients">Husaain jaif</h5>
                <small>Travelers</small>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="review-item">
              <div className="reviewer">
                <img
                  src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-5.png"
                  alt=""
                />
              </div>
              <div className=" d-flex justify-content-center ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div className="review-text p-4 text-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime amet mollitia
                  nulla, fugit eum magni? Esse, culpa ex. Animi, ut quod! Unde vel repudiandae esse
                  velit architecto quos quaerat!
                </p>
                <h5 className="clients">Husaain jaif</h5>
                <small>Travelers</small>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="review-item">
              <div className="reviewer">
                <img
                  src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-5.png"
                  alt=""
                />
              </div>
              <div className=" d-flex justify-content-center ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div className="review-text p-4 text-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime amet mollitia
                  nulla, fugit eum magni? Esse, culpa ex. Animi, ut quod! Unde vel repudiandae esse
                  velit architecto quos quaerat!
                </p>
                <h5 className="clients">Husaain jaif</h5>
                <small>Travelers</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
