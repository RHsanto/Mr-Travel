/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import useFirebase from "../../hooks/useFirebase";
import { Link } from "react-router-dom";
import { GiCommercialAirplane, GiPalmTree } from "react-icons/gi";
import { RiHotelFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle, FaBus } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useFirebase();
  return (
    <>
      <div className="nav-sections ">
        <div className="container  pt-3 px-5 px-lg-0  d-flex justify-content-between align-items-center">
          <div className="logos">
            <h1>
              <Link to="/"> Mr.Travel</Link>
            </h1>
          </div>
          <div className="d-none d-lg-block">
            <nav>
              <ul className="">
                <li>
                  <Link to="/">
                    <FaBus /> Bus
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <GiCommercialAirplane /> Flight
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <GiPalmTree /> Tour
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <RiHotelFill /> Hotel
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* here use login functionality */}
          <div className="d-flex align-items-center">
            {user.email ? (
              <>
                {user.photoURL ? (
                  <img className="UserImg mb-2" src={user.photoURL} alt="" />
                ) : (
                  <>
                    <FaUserCircle className="text-blue fs-1" />
                  </>
                )}
                <div className="dropdown">
                  <div
                    className="text-dark ms-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <IoIosArrowDown className=" fw-bold fs-5" />
                  </div>
                  <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                    <span className="ms-3 py-3">{user?.displayName}</span>
                    <span className="dropdown-item ">
                      <Link to="/my-booking" className="text-dark">
                        My Booking
                      </Link>{" "}
                    </span>
                    <a>
                      <span className="dropdown-item w-100 bg-danger text-light" onClick={logOut}>
                        <FiLogOut /> Sign-out
                      </span>
                    </a>
                  </ul>
                </div>
              </>
            ) : (
              <div className="sign-in">
                <Link to="/sign-in">
                  <button className="rounded text-dark"> Sign-in</button>{" "}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
