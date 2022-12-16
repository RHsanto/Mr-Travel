import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { BsBookmarkStarFill } from "react-icons/bs";
import { RiImageAddFill, RiMenuFoldFill, RiPaypalFill } from "react-icons/ri";
import {
  FaUsers,
  FaStarHalfAlt,
  FaLayerGroup,
  FaQrcode,
  FaUserAlt,
  FaUserCircle,
} from "react-icons/fa";
import MainDashboard from "./MainDashboard";
import Services from "./Services";
import BookingList from "./BookingList";
import Payments from "./Payments";
import Ratings from "./Ratings";
import AllUser from "./AllUser";
import "./Admin.css";
import logo from "../../../images/t-logo.png";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import useFirebase from "../../../hooks/useFirebase";
import useSWR from "swr";
import AddServices from "./AddServicesFrom/AddServices";


//  use useSwr fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const AdminDash = () => {
  const [dashList, setDashList] = useState(<MainDashboard />);
  const { user, logOut } = useFirebase();
  // here use useSwr methods
  const { data } = useSWR(`https://mr-travel-server.onrender.com/user/${user.email}`, fetcher);

  const handleDashboard = () => {
    setDashList(<MainDashboard />);
  };
  const handleAddServices = () => {
    setDashList(<AddServices />);
  };

  const handleServices = () => {
    setDashList(<Services />);
  };

  const handleBookingList = () => {
    setDashList(<BookingList />);
  };

  const handlePayments = () => {
    setDashList(<Payments />);
  };
  const handleRatings = () => {
    setDashList(<Ratings />);
  };

  const handleUsers = () => {
    setDashList(<AllUser />);
  };

  return (
    <div className="main-admin-dash">
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-lg-2 admin-sidebar d-none d-lg-block">
            <div className="d-flex my-3 ">
              <img className="dash-logo" src={logo} alt="img" srcSet="" />
              <h2 className="ms-3">MR TRAVEL</h2>
            </div>
            <hr />
            <div className="admin-menu">
              <li onClick={handleDashboard} className="dropdown-item">
                <MdOutlineDashboard className="me-2" /> Dashboard
              </li>
              <li onClick={handleServices} className="dropdown-item">
                <FaQrcode className="me-2" /> Services
              </li>
              <li onClick={handleBookingList} className="dropdown-item">
                <BsBookmarkStarFill className="me-2" /> Booking List
              </li>
              <li onClick={handlePayments} className="dropdown-item">
                <RiPaypalFill className="me-2" /> Payments
              </li>
              <li onClick={handleRatings} className="dropdown-item">
                <FaStarHalfAlt className="me-2" /> Ratings
              </li>
              <li onClick={handleUsers} className="dropdown-item">
                <FaUsers className="me-2" /> Users
              </li>
              <li onClick={handleAddServices} className="dropdown-item">
                <RiImageAddFill className="me-2" /> Add Services
              </li>
            </div>
          </div>
          {/*mobile-view menu btn */}
          <div className=" dashboard-header d-block d-lg-none shadow">
            <div className="px-3 d-flex justify-content-between align-items-center">
              {/* menu bar btn*/}
              <div className="mobile-view--menu-section  ">
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <RiMenuFoldFill className="fs-3 " />
                </a>
                <div
                  className="offcanvas offcanvas-start"
                  tabindex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                      <img className="dash-img" src={logo} alt="" /> MR TRAVEL
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <div className="admin-menu">
                      <li onClick={handleDashboard} className="dropdown-item">
                        <MdOutlineDashboard className="me-2" /> Dashboard
                      </li>
                      <li onClick={handleAddServices} className="dropdown-item">
                        <FaLayerGroup className="me-2" /> Categories
                      </li>
                      <li onClick={handleServices} className="dropdown-item">
                        <FaQrcode className="me-2" /> Services
                      </li>
                      <li onClick={handleBookingList} className="dropdown-item">
                        <BsBookmarkStarFill className="me-2" /> Booking List
                      </li>
                      <li onClick={handlePayments} className="dropdown-item">
                        <RiPaypalFill className="me-2" /> Payments
                      </li>
                      <li onClick={handleRatings} className="dropdown-item">
                        <FaStarHalfAlt className="me-2" /> Ratings
                      </li>
                      <li onClick={handleUsers} className="dropdown-item">
                        <FaUsers className="me-2" /> Users
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              {/* home btn section */}
              <div className="home-btn-section">
                <Link to="/">
                  <h5 className="d-flex align-items-center text-dark ">
                    <FcHome className="me-1" /> Home
                  </h5>
                </Link>
              </div>
              {/* div-3 */}
              <div className="dropdown">
                <div
                  className=" ms-2"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {data?.[0]?.imageLink ? (
                    <img className="nav-img" src={data?.[0]?.imageLink} alt="img" />
                  ) : (
                    <FaUserCircle className="user-icons" />
                  )}
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <span>
                    <Link to="/user-profile" className=" dropdown-item">
                      <FaUserAlt className="me-1" /> Profile
                    </Link>
                  </span>
                  <span className="dropdown-item w-100" onClick={logOut}>
                    <FiLogOut className="me-1" /> Sign-out
                  </span>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-10 admin-field">{dashList}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
