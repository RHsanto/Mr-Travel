import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/common/Navbar'
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
      <div className="flights">
      {flight?.planeName}
      </div>
    </div>
  );
};

export default FlightDetails;