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
      <AdminDashHeader/>
      <div className="p-3">
        <h2>Welcome Admin!</h2>
        <div className="container-fluid px-0">
          <div className="row g-4 mt-4">
            <div className="col-lg-3">
              <div className="admin-card shadow">
              <div>
                <FaRegUser className="admin-icons"/>
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
                <FaQrcode className="admin-icons"/>
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
                <BsBookmarkStarFill className="admin-icons"/>
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
                <RiPaypalFill className="admin-icons"/>
              </div>
              <div className="text-end">
                <h6>145</h6>
                <h4>Payment</h4>
              </div>
              </div>
              
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
