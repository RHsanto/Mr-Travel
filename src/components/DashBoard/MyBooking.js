import React from 'react';
import { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

import Navbar from '../common/Navbar';

const MyBooking = () => {
  const{user}=useFirebase();
  const [booking,setBooking]=useState([]);
  console.log(user?.email);
  fetch(`https://young-cliffs-75372.herokuapp.com/booking/${user?.email}`)
  .then(res=>res.json())
  .then(data=>console.log(data))
  return (
    <div>
      <Navbar/>
     <div className="container">
      <h1>Here all order </h1>
      {/* here show order info */}
     </div>
    </div>
  );
};

export default MyBooking;