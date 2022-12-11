import React from "react";
import useSWR, { useSWRConfig } from "swr";
import AdminDashHeader from "./AdminDashHeader";
import { ToastContainer, toast } from "react-toastify";
import { HiShieldCheck } from "react-icons/hi";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BiLoader } from "react-icons/bi";

// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const Payments = () => {
  const { mutate } = useSWRConfig();
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
        alert("Order Approved");
        if (data?.acknowledged) {
          toast.success("Booking Approved ", {
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
      <div className="booking-list-section p-3">
        <h3>Payment History</h3>
        <div className="container-fluid px-0 pt-4">
          <div className="row">
            <div className="col">
              <div className="booking-table shadow rounded">
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
                        <td >
                         <div className="d-flex">
                         {data?.status === "pending" ? (
                            <>
                              <h6 className="text-primary mb-3"><BiLoader/> pending...</h6>
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
                         </div>
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

export default Payments;
