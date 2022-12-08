import React from 'react';
import useSWR from 'swr';
import AdminDashHeader from './AdminDashHeader';
import { MdGridView } from "react-icons/md";

// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const Services = () => {

  const { data: allTravelsData } = useSWR(`https://mr-travel-server.onrender.com/allTravelsData`, fetcher);

  return (
    <div>
      <AdminDashHeader/>
      <div className="service-info-section p-3">
      <h3>Services</h3>
         {/* here booking and payment table */}
         <div className="container-fluid px-1 mt-5">
          <div className="row ">
            <div className="col">
              <div className="booking-table shadow rounded">
                <h4 className="table-title ps-4">Recent Booking</h4>
                <hr  />
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Service</th>
                      <th scope="col">Location</th>
                      <th scope="col">Category</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTravelsData?.map(data => (
                      <tr>
  
                        <td>{data?.hotelName || data?.TourName || data?.types  } </td>
                        <td>{data?.location || "Dhaka"}</td>
                        <td>{data?.types}</td>
                        <td>${data?.price}</td>
                        <td>{data?.types}</td>
                        <td > <div className='view-btn'>
                        <MdGridView/> View
                          </div> </td>
              
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