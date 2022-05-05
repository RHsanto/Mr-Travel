/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-section'>
       <div className="container pt-3 px-5 px-lg-0  d-flex justify-content-between align-items-center">
      <div className="logos">
      <h1><Link to='/'>  Mr.Travel</Link></h1>
     </div>
     <div className="sign-in">
       <button className='rounded '>Sign-in</button>
     </div>
     </div>
    </div>
  );
};

export default Navbar;