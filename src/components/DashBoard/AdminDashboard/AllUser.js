import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { ImUserPlus } from 'react-icons/im';
import { RiAdminFill } from 'react-icons/ri';
import useSWR from 'swr';
import AdminDashHeader from './AdminDashHeader';
// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const AllUser = () => {
  const { data: allUserData } = useSWR(`https://mr-travel-server.onrender.com/allUser`, fetcher);
  return (
    <div>
      <AdminDashHeader/>
      <div className="allUser-section p-3">
        <h3>Users</h3>
        <div className="container-fluid px-0 mt-5">
        <div className="row">
          <div className="col">
          <div className="booking-table shadow rounded">    
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Contact No</th>
                      <th scope="col">Role</th>
                      <th scope="col">Address</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUserData?.map(data => (
                      <tr>
                        <td>
                        {data?.imageLink ? (
                            <img className="dash-img me-2" src={data?.imageLink} alt="img" />
                          ) : (
                            <FaUserCircle className="fs-1 me-2" />
                          )}
                          {data?.displayName}
                        </td>
                        <td>{data?.email}</td>
                        <td>{data?.PhoneNumber || "N/A"}</td>
                        <td>{data?.role}</td>
                        <td>{data?.Address || "N/A"}</td>
                        <td>
                          {data?.role === "user" 
                          ? <><button className='btn btn-primary'><ImUserPlus/> Make Admin</button></>
                        :
                        <>
                        <button className='btn btn-success'> <RiAdminFill/> Admin</button>
                        </>}
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

export default AllUser;