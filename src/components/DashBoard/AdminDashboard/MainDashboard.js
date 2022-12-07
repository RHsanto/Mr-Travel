/* eslint-disable no-unused-vars */
import React from "react";
import { FaQrcode, FaRegUser, FaUserCircle } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import useSWR from "swr";
import useFirebase from "../../../hooks/useFirebase";
import AdminDashHeader from "./AdminDashHeader";
import { BsBookmarkStarFill } from "react-icons/bs";
import { RiPaypalFill } from "react-icons/ri";

//  use useSwr fetcher
// const fetcher = (...args) => fetch(...args).then(res => res.json());

const MainDashboard = () => {
  // const { user, logOut } = useFirebase();
  // // here use useSwr methods
  // const { data } = useSWR(`https://mr-travel-server.onrender.com/user/${user.email}`, fetcher);

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
          <div className="row">
            <div className="col-lg-6">
              <div className="booking-table shadow rounded">
                <h4 className="table-title ps-4">Recent Booking</h4>
                <hr />
                <table className="table ">
                  <thead >
                    <tr >
                      <th scope="col">Clients</th>
                      <th scope="col">Date</th>
                      <th scope="col">Service</th>
                      <th scope="col">Status</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="payment-table">
                <h2>hviohioph</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
