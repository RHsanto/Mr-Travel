import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineSwapRight,AiOutlineSmallDash} from "react-icons/ai";
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
          <h5 className='ms-1 pb-3'>Review Your Booking</h5>
         <div className="col-lg-8 ">
           <div className="row shadow d-flex p-4 mx-1">
            <div className="col-lg-5">
            <img src={flight?.img} className='fd-img p-5' alt="" />
            </div>
          <div className="col-lg-7 ">
          <div className="d-flex justify-content-between">
          <div className=''>
              <h5>{flight?.from}<AiOutlineSwapRight className='mx-2 '/>{flight?.to}</h5>
               <p>{flight?.planeName}</p>
          </div>
          <div className=''>
              <h6>({flight?.class})</h6>
              
          </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
            <h6>Time : <b>{flight?.startDate}<AiOutlineSmallDash className='mx-2 '/>{flight?.endDate}</b></h6>
            <h6>{flight?.journeyDate}</h6>
             </div>
           <p><small>({flight?.totalTime})</small></p>
          </div>
         <h4 className='mt-0 mt-lg-5'>BDT {flight?.price}</h4>
          </div>
          
          
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
          </div>
          <div class="accordion-item shadow mt-4 mx-1">
     <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Flight Details
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
       </div>
         </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FlightDetails;