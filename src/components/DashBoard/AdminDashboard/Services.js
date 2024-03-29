import React from "react";
import useSWR from "swr";
import AdminDashHeader from "./AdminDashHeader";

// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const Services = () => {
  // const [singleData,setSingleData]=useState({})
  const { data: FlightData } = useSWR(`https://mr-travel-server.onrender.com/flightInfo`, fetcher);
  const { data: HotelData } = useSWR(`https://mr-travel-server.onrender.com/hotelInfo`, fetcher);
  const { data: TourData } = useSWR(`https://mr-travel-server.onrender.com/tourInfo`, fetcher);

  // const handleModal = (data)=>{
  //   setSingleData(data)
  // }
  // console.log(singleData);
  return (
    <div>
      <AdminDashHeader />
      <div className="service-info-section p-3">
        {/* here booking and payment table */}
        <div className="container-fluid px-1 mt-5">
          <div className="row ">
            <div className="col">
              <div className="title-box">
                <h5>All Service</h5>
              </div>
              <div className="booking-table shadow ">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Service</th>
                      <th scope="col">Location</th>
                      <th scope="col">Category</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {FlightData?.map(data => (
                      <tr key={data?._id}>
                        <td>
                          <img className="service-img me-2" src={data?.img} alt="img" />
                          {data?.hotelName || data?.TourName || data?.planeName}{" "}
                        </td>
                        <td>{data?.location || "Dhaka"}</td>
                        <td>{data?.types}</td>
                        <td>${data?.price}</td>
                        <td>{data?.types}</td>
                       
                      </tr>
                    ))}
                    {HotelData?.map(data => (
                      <tr key={data?._id}>
                        <td>
                          <img className="service-img me-2" src={data?.img} alt="img" />
                          {data?.hotelName || data?.TourName || data?.planeName}{" "}
                        </td>
                        <td>{data?.location || "Dhaka"}</td>
                        <td>{data?.types}</td>
                        <td>${data?.price}</td>
                        <td>{data?.types}</td>
                       
                      </tr>
                    ))}
                    {TourData?.map(data => (
                      <tr key={data?._id}>
                        <td>
                          <img className="service-img me-2" src={data?.img} alt="img" />
                          {data?.hotelName || data?.TourName || data?.planeName}{" "}
                        </td>
                        <td>{data?.location || "Dhaka"}</td>
                        <td>{data?.types}</td>
                        <td>${data?.price}</td>
                        <td>{data?.types}</td>
                      
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

export default Services;
