import React from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { RiPaypalFill } from 'react-icons/ri';
import { FaUsers,FaStarHalfAlt,FaServicestack ,FaLayerGroup} from 'react-icons/fa';
import  './Admin.css'

const AdminDash = () => {
  return (
    <div className='main-admin-dash'>
       <div className="container-fluid p-4">
        <div className="row">
          <div className="col-lg-2 admin-sidebar">
            <h1>Side bar</h1>
            <div className="admin-menu">
              <li className='dropdown-item'><MdOutlineDashboard className='me-2'/> Dashboard</li>
              <li className='dropdown-item'><FaLayerGroup className='me-2'/> Categories</li>
              <li className='dropdown-item'><FaServicestack className='me-2'/> Services</li>
              <li className='dropdown-item'><BsBookmarkStarFill className='me-2'/> Booking List</li>
              <li className='dropdown-item'><RiPaypalFill className='me-2'/> Payments</li>
              <li className='dropdown-item'><FaStarHalfAlt className='me-2'/> Ratings</li>
              <li className='dropdown-item'><FaUsers className='me-2'/> Users</li>
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