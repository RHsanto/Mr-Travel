import React from 'react';
import  './Admin.css'
const AdminDash = () => {
  return (
    <div className='main-admin-dash'>
       <div className="container-fluid p-4">
        <div className="row">
          <div className="col-lg-2 admin-sidebar">
            <h1>Side bar</h1>
            <div className="admin-menu">
             <ul>
              <li>Dashboard</li>
              <li>Services</li>
              <li>Booking List</li>
              <li>Payments</li>
              <li>Ratings</li>
              <li>Users</li>
             </ul>
            </div>
          </div>
          <div className="col-lg-10 admin-field">
            <h1>result section</h1>
          </div>
        </div>
       </div>
    </div>
  );
};

export default AdminDash;