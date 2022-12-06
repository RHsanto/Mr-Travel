import React, { useState } from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { RiPaypalFill } from 'react-icons/ri';
import { FaUsers,FaStarHalfAlt,FaServicestack ,FaLayerGroup} from 'react-icons/fa';
import  './Admin.css'
import MainDashboard from './MainDashboard'
import Categories from './Catergories'
import Services from './Services'
import BookingList from './BookingList'
import Payments from './Payments'
import Ratings from './Ratings'
import AllUser from './AllUser'

const AdminDash = () => {
  const [dashList,setDashList] = useState(<MainDashboard/>)

  const handleDashboard=()=>{
    setDashList(<MainDashboard/>)
  }
  const handleCategories=()=>{
    setDashList(<Categories/>)
  }
  
  const handleServices=()=>{
    setDashList(<Services/>)
  }
  
  const handleBookingList=()=>{
    setDashList(<BookingList/>)
  }
  
  const handlePayments=()=>{
    setDashList(<Payments/>)
  }
  const handleRatings=()=>{
    setDashList(<Ratings/>)
  }
  
  const handleUsers=()=>{
    setDashList(<AllUser/>)
  }
  




  return (
    <div className='main-admin-dash'>
       <div className="container-fluid p-4">
        <div className="row">
          <div className="col-lg-2 admin-sidebar">
            <h1>Side bar</h1>
            <div className="admin-menu">
              <li onClick={handleDashboard} className='dropdown-item'><MdOutlineDashboard className='me-2'/> Dashboard</li>
              <li onClick={handleCategories} className='dropdown-item'><FaLayerGroup className='me-2'/> Categories</li>
              <li onClick={handleServices} className='dropdown-item'><FaServicestack className='me-2'/> Services</li>
              <li onClick={handleBookingList} className='dropdown-item'><BsBookmarkStarFill className='me-2'/> Booking List</li>
              <li onClick={handlePayments} className='dropdown-item'><RiPaypalFill className='me-2'/> Payments</li>
              <li onClick={handleRatings} className='dropdown-item'><FaStarHalfAlt className='me-2'/> Ratings</li>
              <li onClick={handleUsers} className='dropdown-item'><FaUsers className='me-2'/> Users</li>
            </div>
          </div>
          <div className="col-lg-10 admin-field">
            {dashList}
          </div>
        </div>
       </div>
    </div>
  );
};

export default AdminDash;