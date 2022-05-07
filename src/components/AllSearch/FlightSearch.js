import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../common/Navbar';
import ModifyFlight from '../ModifySearch/ModifyFlight';
import '../AllSearch/Allcss.css'
const FlightSearch = () => {
  const[flights,setFlights]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:8000/flights')
    .then(response=>response.json())
    .then(data=>setFlights(data))

  },[])
  return (
    <div>
     <Navbar/>
     {/* here search input */}
    <div className=' all-inputs'>
    <div className=" rounded  pt-5 pb-3 px-4">
      <div className="container">
        <ModifyFlight/>
      </div>
     </div>
    </div>
    {/* here input result */}
    <div className="flights-section ">
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {flights.map(flight=>(
         <div className="flight mt-5">
           <div class="card mb-3 ps-0">
         <div class="row g-0">
           <div class="col-md-4">
             <img src={flight?.img} class="img-fluid  h-100 rounded-start" alt="..."/>
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
             </div>
           </div>
         </div>
       </div>
         </div>
        ))}
      </div>
     </div>
    </div>
    </div>
  );
};

export default FlightSearch;