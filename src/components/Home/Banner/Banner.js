/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SearchResult from "../SearchResult/SearchResult";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import { IoIosArrowDown } from "react-icons/io";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { FaUserCircle, FaTags, FaUserAlt } from "react-icons/fa";
import logos from "../../../images/t-logo.png";
const Banner = () => {
  const { user, logOut } = useFirebase();
  return (
    <div className="banner-section">
      <header>
        <div className="container pt-3  d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/">
              <div className="d-flex ">
                <img src={logos} alt="img" className="logo-image" />
                <h1 className="text-white ms-3"> Mr.Travel </h1>
              </div>
            </Link>
          </div>

          {/* here use login functionality */}
          <div className="d-flex align-items-center">
            {user.email ? (
              <>
                <FaUserCircle className="text-light fs-1" />
                <div className="dropdown">
                  <div
                    className="text-light ms-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <IoIosArrowDown className=" fw-bold fs-5" />
                  </div>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <span className=" dropdown-item">
                      <FaUserAlt className="me-1" /> Profile
                    </span>
                    <span>
                      <Link to="/my-booking" className="dropdown-item ">
                        <FaTags className="me-1" /> My Booking
                      </Link>
                    </span>
                    <span className="dropdown-item w-100" onClick={logOut}>
                      <FiLogOut className="me-1" /> Sign-out
                    </span>
                  </ul>
                </div>
              </>
            ) : (
              <div className="sign-in">
                <Link to="/sign-in">
                  <button className="rounded ">
                    {" "}
                    <FiLogIn /> Sign-in
                  </button>{" "}
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      {/* add search section */}

      <SearchResult />
    </div>
  );
};

export default Banner;
