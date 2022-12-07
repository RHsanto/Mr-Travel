import React from "react";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import useSWR from "swr";
import useFirebase from "../../../hooks/useFirebase";

//  use useSwr fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const AdminDashHeader = () => {
  const { user, logOut } = useFirebase();
  // here use useSwr methods
  const { data } = useSWR(`https://mr-travel-server.onrender.com/user/${user.email}`, fetcher);

  return (
    <div>
      <div className="">
        <div className=" dashboard-header">
          <div className="px-3 d-flex justify-content-between align-items-center">
            <Link to="/">
              <h5 className="d-flex align-items-center text-dark ">
                <FcHome className="me-1" /> Home
              </h5>
            </Link>
            <div>
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashHeader;
