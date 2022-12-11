import React from "react";
import { Link } from "react-router-dom";
import "./Add.css";
const Add = () => {
  return (
    <div className="add-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5"> </div>
          <div className="col-lg-7">
            <div className="member-info">
              <small>Join to us</small>
              <h1 className="fw-bold mb-3">Not a Member Yet?</h1>
              <p className="mb-5 lh-lg">Join us! Our members can access savings of up to 50% and earn <br/>Trip Coins while booking.</p>
              <Link to='/sign-in'>
              <button className="sign-btn">SIGN IN</button>
              </Link>
              <Link to='/sign-up'>
              <button className="register-btn">REGISTER</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
