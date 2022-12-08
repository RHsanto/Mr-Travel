/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaQrcode, FaRegUser, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";
import useFirebase from "../../../hooks/useFirebase";
import AdminDashHeader from "./AdminDashHeader";
import { BsBookmarkStarFill, BsCheckCircleFill, BsShieldFillCheck } from "react-icons/bs";
import { RiPaypalFill } from "react-icons/ri";
import { HiShieldCheck } from "react-icons/hi";
import { AiTwotoneDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const MainDashboard = () => {
  const { mutate } = useSWRConfig();

  //  useSwr fetching
  const { data: bookingData } = useSWR(`https://mr-travel-server.onrender.com/booking`, fetcher);

  // here orders status update
  const updateOrders = id => {
    const url = `https://mr-travel-server.onrender.com/booking/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert("Order Approved");
        mutate("https://mr-travel-server.onrender.com/booking");
      });
  };

  // Here orders delete
  const handleDelete = id => {
    const proceed = window.confirm("Are you sure , you want to delete ?");
    if (proceed) {
      const url = `https://mr-travel-server.onrender.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data?.acknowledged) {
            toast.success("Delete Successful", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          mutate("https://mr-travel-server.onrender.com/booking");
        });
    }
  };

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
                    {bookingData?.map(data => (
                      <tr>
                        <th scope="row">{data?.firstName}</th>
                        <td>{data?.bookingDate ? data?.bookingDate : "8/2/2022"}</td>
                        <td>{data?.types}</td>
                        <td className="d-flex ">
                          {data?.status === "pending" ? (
                            <>
                              <h6 className="text-primary mb-3">pending...</h6>
                              {/* Approved btn */}
                              <button
                                onClick={() => updateOrders(data?._id)}
                                className="border-0 fs-6 bg-success text-light  p-1 ms-3 rounded"
                              >
                                <HiShieldCheck /> Approve
                              </button>
                              {/* Delete btn */}
                              <button
                                onClick={() => handleDelete(data._id)}
                                className="border-0 fs-6 bg-danger text-light ms-3 px-2 py-1 rounded"
                              >
                                <ToastContainer
                                  position="top-right"
                                  autoClose={5000}
                                  hideProgressBar={false}
                                  newestOnTop={false}
                                  closeOnClick
                                  rtl={false}
                                  pauseOnFocusLoss
                                  draggable
                                  pauseOnHover
                                />
                                <AiTwotoneDelete className="me-1" />
                                Delete
                              </button>
                            </>
                          ) : (
                            <h6 className="text-success mb-3">
                              {" "}
                              <HiShieldCheck /> Approved
                            </h6>
                          )}
                        </td>
                        <td>${data?.price || data?.sum}</td>
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
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingData.map(data => (
                      <tr>
                        <td>{data?.bookingDate ? data?.bookingDate : "8/2/2022"}</td>
                        <th scope="row">{data?.firstName}</th>
                        <td>{data?.types}</td>
                        <td>${data?.price}</td>
                        <td className="d-flex ">
                          {data?.status === "pending" ? (
                            <>
                              <h6 className="text-primary mb-3">pending...</h6>
                              {/* approved btn */}
                              <button
                                onClick={() => updateOrders(data?._id)}
                                className="border-0 fs-6 bg-success text-light  p-1 ms-3 rounded"
                              >
                                <HiShieldCheck /> Approve
                              </button>

                              {/* delete btn */}
                              <button
                                onClick={() => handleDelete(data?._id)}
                                className="border-0 fs-6 bg-danger text-light ms-3 px-2 py-1 rounded"
                              >
                                <AiTwotoneDelete className="me-1" />
                                Delete
                              </button>
                            </>
                          ) : (
                            <h6 className="text-success mb-3">
                              {" "}
                              <HiShieldCheck /> Approved
                            </h6>
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
