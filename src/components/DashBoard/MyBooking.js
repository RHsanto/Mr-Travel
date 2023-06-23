import React from "react";
import { AiOutlineSwap, AiTwotoneDelete } from "react-icons/ai";
// import { SiFampay } from "react-icons/si";
// import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import Navbar from "../common/Navbar";
import "./dashboard.css";
import useSWR, { mutate } from "swr";
import { Triangle } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const MyBooking = () => {
  const { user } = useFirebase();

  const { data: bookingData, error } = useSWR(
    ` https://mr-travel-server.onrender.com/booking/${user?.email}`,
    fetcher
  );

  if (!error && !bookingData)
    return (
      <div className="d-flex justify-content-center">
        <Triangle
          height="400"
          width="150"
          color="#396cf0"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
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
      <Navbar />
      <div className="container">
        {/* here show order info */}
        <div className="my-5">
          <div className="container ">
          <div className="row row-cols-1 row-cols-md-2 g-4">
              {bookingData &&
                bookingData.map(data => (
                  <div className="flight mt-3" key={data._id}>
                    {/* <h1>{data?.role}</h1> */}
                    <div className="card mb-3 ps-0">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={data?.img}
                            className="img-fluid  h-100 rounded-start"
                            alt="img"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body ">
                            <div>
                              {data?.from ? (
                                <div className="d-flex  align-items-center">
                                  <h6 className="card-title fw-bold">{data?.from}</h6>
                                  <h6 className="arrow mx-5">
                                    <AiOutlineSwap />
                                  </h6>
                                  <h6 className="card-title fw-bold">{data?.to}</h6>
                                </div>
                              ) : (
                                <>
                                  <h5 className="card-title fw-bold">{data?.TourName}</h5>
                                  <h5 className="card-title fw-bold">{data?.hotelName}</h5>
                                </>
                              )}
                            </div>
                            <h6>booking of {data?.types}</h6>

                            <div className="d-flex justify-content-between align-items-center mt-5">
                              <div className="d-flex">
                                <h6 className="mx-1">
                                  <b>
                                    {" "}
                                    {data?.price} {data?.sum}
                                  </b>
                                </h6>
                                <p>
                                  <small>(Per Person)</small>
                                </p>
                              </div>
                              <div className=" gap-2 d-flex">
                                {/* <Link to={`/payment/${data?._id}`}>
                                  <button className="btn payment-btn">
                                    <SiFampay /> Payment
                                  </button>
                                </Link>                              */}
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
