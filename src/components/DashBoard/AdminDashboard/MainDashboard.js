/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { FaQrcode, FaRegUser, FaUserCircle } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";
import { RiPaypalFill } from "react-icons/ri";
import { HiShieldCheck } from "react-icons/hi";
import { BiLoader } from "react-icons/bi";
import AdminDashHeader from "./AdminDashHeader";

// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const MainDashboard = () => {
  //  useSwr fetching

  const [bookingData,setBookingData]=useState([])
  useEffect(()=>{
    fetch("https://mr-travel-server.onrender.com/booking")
    .then(res=>res.json())
    .then(data=>setBookingData(data?.reverse()))
  },[])


  const { data: allUserData } = useSWR(`https://mr-travel-server.onrender.com/allUser`, fetcher);
  const { data: allTravelsData } = useSWR(
    `https://mr-travel-server.onrender.com/allTravelsData`,
    fetcher
  );

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
                  <h6>{allUserData?.length}</h6>
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
                  <h6>{allTravelsData?.length}</h6>
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
                  <h6>{bookingData?.length}</h6>
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
                <h4 className="table-title p-4 border-bottom">Recent Booking</h4>

                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Clients</th>
                      <th scope="col">Date</th>
                      <th scope="col">Service</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingData?.map(data => (
                      <tr key={data?._id}>
                        <th>
                          {data?.userImg ? (
                            <img className="dash-img me-2" src={data?.userImg} alt="img" />
                          ) : (
                            <FaUserCircle className="fs-1 me-2" />
                          )}
                          {data?.firstName}
                        </th>
                        <td>{data?.bookingDate ? data?.bookingDate : "8/2/2022"}</td>
                        <td>{data?.types}</td>
                        <td>${data?.price || data?.sum}</td>
                        <td>
                          {data?.status === "pending" ? (
                            <>
                              <h6 className="text-primary">
                                <BiLoader /> Pending...
                              </h6>
                            </>
                          ) : (
                            <>
                              <h6 className="text-success">
                                <HiShieldCheck /> Approved
                              </h6>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mt-5">
              <div className="booking-table shadow rounded">
                <h4 className="table-title p-4 border-bottom">Payments</h4>

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Clients</th>
                      <th scope="col">Date</th>
                      <th scope="col">Service</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingData?.map(data => (
                      <tr>
                        <th>
                          {data?.userImg ? (
                            <img className="dash-img me-2" src={data?.userImg} alt="img" />
                          ) : (
                            <FaUserCircle className="fs-1 me-2" />
                          )}
                          {data?.firstName}
                        </th>
                        <td>{data?.bookingDate ? data?.bookingDate : "8/2/2022"}</td>
                        <td>{data?.types}</td>
                        <td>${data?.price || data?.sum}</td>
                        <td>
                          {data?.status === "pending" ? (
                            <>
                              <h6 className="text-primary">
                                <BiLoader /> Pending...
                              </h6>
                            </>
                          ) : (
                            <>
                              <h6 className="text-success">
                                <HiShieldCheck /> Approved
                              </h6>
                            </>
                          )}
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
