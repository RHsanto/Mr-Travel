/* eslint-disable no-unused-vars */
import React from "react";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import useSWR from "swr";
import useFirebase from "../../../hooks/useFirebase";
import AdminDashHeader from "./AdminDashHeader";

//  use useSwr fetcher
// const fetcher = (...args) => fetch(...args).then(res => res.json());

const MainDashboard = () => {
  // const { user, logOut } = useFirebase();
  // // here use useSwr methods
  // const { data } = useSWR(`https://mr-travel-server.onrender.com/user/${user.email}`, fetcher);

  return (
    <div>
      <AdminDashHeader/>
      <div className="">
      </div>
    </div>
  );
};

export default MainDashboard;
