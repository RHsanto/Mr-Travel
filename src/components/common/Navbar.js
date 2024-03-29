/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import useFirebase from "../../hooks/useFirebase";
import { Link } from "react-router-dom";
import { GiCommercialAirplane, GiPalmTree } from "react-icons/gi";
import { RiAdminFill, RiHotelFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { FaUserCircle, FaUserAlt, FaTags } from "react-icons/fa";
import logos from "../../images/t-logo.png";
import useSWR from "swr";

//  use useSwr fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const Navbar = () => {
  const { user, logOut } = useFirebase();
  const { data } = useSWR(`https://mr-travel-server.onrender.com/user/${user.email}`, fetcher);

  return (
    <div className="nav-sections ">
      <div className="container  py-3  d-flex justify-content-between align-items-center">
        <div className="logos">
          <Link to="/">
            <div className="d-flex align-items-center">
              <img src={logos} alt="img" className="logo-image" />
              <h1 className="text-dark ms-3"> Mr.Travel </h1>
            </div>
          </Link>
        </div>
        <div className="d-none d-lg-block">
          <nav>
            <ul className="mb-0">
              {/* <li>
                <Link to="/">
                  <FaBus /> Bus
                </Link>
              </li> */}
              <li>
                <Link to="/">
                  <GiCommercialAirplane /> Flight
                </Link>
              </li>
              <li>
                <Link to="/">
                  <RiHotelFill /> Hotel
                </Link>
              </li>
              <li>
                <Link to="/">
                  <GiPalmTree /> Tour
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* here use login functionality */}
        <div className="d-flex align-items-center">
          {user?.email ? (
            <>
              <>
                {data?.[0]?.imageLink ? (
                  <img className="nav-img" src={data?.[0]?.imageLink} alt="img" />
                ) : (
                  <FaUserCircle className="fs-1 text-dark" />
                )}
              </>
              <div className="dropdown">
                <div
                  className="text-light ms-2"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IoIosArrowDown className=" fw-bold text-dark fs-5" />
                </div>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {data?.[0]?.role === 'admin' ? <>
                    <span>
                    <Link to="/admin-dash" className=" dropdown-item">
                      <RiAdminFill className="me-1 fs-4" /> Admin Dashboard
                    </Link>
                  </span></> : <></>
                    }
                  <span>
                    <Link to="/user-profile" className=" dropdown-item">
                      <FaUserAlt className="me-1" /> Profile
                    </Link>
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
    </div>
  );
};

export default Navbar;
