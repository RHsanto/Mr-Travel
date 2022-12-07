/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaQrcode, FaRegUser, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useSWR from "swr";
import useFirebase from "../../../hooks/useFirebase";
import AdminDashHeader from "./AdminDashHeader";
import { BsBookmarkStarFill } from "react-icons/bs";
import { RiPaypalFill } from "react-icons/ri";

const MainDashboard = () => {
  const { user } = useFirebase();
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("https://mr-travel-server.onrender.com/booking")
      .then(res => res.json())
      .then(data => setBooking(data));
  }, [user?.email]);
  // console.log(booking);
  return (
    <div>
      <AdminDashHeader />
      <div className="p-3">
        <h2>Welcome Admin!</h2>
        {/* here admin header info */}
        <div className="container-fluid px-0">
          <div className="row g-4 my-4">
            <div className="col-lg-3">
              <div className="admin-card shadow">
                <div>
                  <FaRegUser className="admin-icons" />
                </div>
                <div className="text-end">
                  <h6>145</h6>
                  <h4>User</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="admin-card shadow">
                <div>
                  <FaQrcode className="admin-icons" />
                </div>
                <div className="text-end">
                  <h6>145</h6>
                  <h4>Services</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="admin-card shadow">
                <div>
                  <BsBookmarkStarFill className="admin-icons" />
                </div>
                <div className="text-end">
                  <h6>145</h6>
                  <h4>Booking</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="admin-card shadow">
                <div>
                  <RiPaypalFill className="admin-icons" />
                </div>
                <div className="text-end">
                  <h6>145</h6>
                  <h4>Payment</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* here booking and payment table */}
        <div className="container-fluid px-1 mt-5">
          <div className="row ">
            <div className="col">
              <div className="booking-table shadow rounded">
                <h4 className="table-title ps-4">Recent Booking</h4>
                <hr />
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Clients</th>
                      <th scope="col">Date</th>
                      <th scope="col">Service</th>
                      <th scope="col">Status</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {booking.map(data => (
                      <tr>
                        <th scope="row">{data?.firstName}</th>
                        <td>{data?.bookingDate ? data?.bookingDate : "8/2/2022"}</td>
                        <td>{data?.types}</td>
                        <td>
                          <button className="border-0  bg-warning p-1 rounded">
                            <small>pending</small>
                          </button>
                          <button className="border-0 fs-6 bg-success text-light ms-3 p-1 rounded">
                            <small>Approved</small>
                          </button>
                        </td>
                        <td>${data?.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mt-5">
              <div className="booking-table shadow rounded">
                <h4 className="table-title ps-4">Payments</h4>
                <hr />
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Clients</th>
                      <th scope="col">Service</th>
                      <th scope="col">Status</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {booking.map(data => (
                      <tr>
                        <td>{data?.bookingDate ? data?.bookingDate : "8/2/2022"}</td>
                        <th scope="row">{data?.firstName}</th>
                        <td>{data?.types}</td>
                        <td>${data?.price}</td>
                        <td>
                          <button className="border-0  bg-warning p-1 rounded">
                            <small>pending</small>
                          </button>
                          <button className="border-0 fs-6 bg-success text-light ms-3 p-1 rounded">
                            <small>Approved</small>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
