import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { SiFampay } from "react-icons/si";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import Navbar from "../common/Navbar";
import "./dashboard.css";
import useSWR from "swr";
import { Triangle } from "react-loader-spinner";

// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const MyBooking = () => {
  const { user } = useFirebase();

  const { data: bookingData, error } = useSWR(
    ` https://mr-travel-server.onrender.com/booking/${user?.email}`,
    fetcher
  );

  if (!error && !bookingData)
   return(
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
   )
;

  return (
    <div>
      <Navbar />
      <div className="container">
        {/* here show order info */}
        <div className="my-5">
          <div className="container ">
            {/* {!bookingData &&
               (
                <div className="text-center">
                <h3 className="mb-5">Ooops. It's Empty </h3>
                <img
                  className=""
                  src="https://ouch-cdn2.icons8.com/8ly2UKxjmBZ-vzfWTtRw0InBYa56IV277LHx1cSi5kI/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTEw/L2ExNGNhNjM0LWMy/NTMtNDExMC05MmU5/LTY5Mzk3YzJkNzE4/Yy5zdmc.png"
                  alt=""
                />
              </div>
               )} */}
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
                              <div className="select-btn gap-2 d-flex">
                                <Link to={`/payment/${data?._id}`}>
                                  <button className="btn payment-btn">
                                    <SiFampay /> Payment
                                  </button>
                                </Link>
                                <button className="btn btn-danger">
                                  <MdDelete /> Delete
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
