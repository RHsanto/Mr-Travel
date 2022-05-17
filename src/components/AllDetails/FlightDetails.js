import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/common/Navbar'
import './Details.css'
const FlightDetails = () => {
  const {id}=useParams()
  const [flight,setFlight]=useState([])
  
  useEffect(()=>{
    fetch(`https://desolate-oasis-91427.herokuapp.com/flights/${id}`)
    .then(response=>response.json())
    .then(data=>setFlight(data))
  })
  return (
    <div>
      <Navbar/>
      <div className="flight-details">
      <div className="container">
        <div className="row">
         <div className="col-lg-8">
           <div className="flight-info1 shadow d-flex align-items-center">
             <img src={flight?.img} className='fd-img' alt="" />
            <div> <h6>{flight?.planeName}</h6></div>
           </div>
         </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FlightDetails;