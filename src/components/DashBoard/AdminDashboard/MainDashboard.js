import React from 'react';
import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const MainDashboard = () => {
  return (
    <div>
      <div className="">
        <div className=" dashboard-header">
          <div className=" d-flex justify-content-between align-items-center">
           <Link to='/'>
            <h5 className='d-flex align-items-center text-dark'>
             <FcHome className='me-1'/> Home</h5>
          </Link>
           <div><h3>Profile</h3></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;