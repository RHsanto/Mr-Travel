import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsGeoAltFill,BsGlobe} from "react-icons/bs";
import { AiOutlineFieldTime} from "react-icons/ai";
import { FaUsers} from "react-icons/fa";
import { HiCurrencyDollar} from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Navbar from '../common/Navbar';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Details.css'
const TourDetails = () => {
  const {id} =useParams();
  const[tour,setTour]=useState([]);
  useEffect(()=>{
    fetch(`https://young-cliffs-75372.herokuapp.com/tours/${id}`)
    .then(res=>res.json())
    .then(data=>setTour(data))
  })

    // // react hook form
    // const { register, handleSubmit ,reset} = useForm();
    // const onSubmit = data => {
    //   console.log(data)
    //   data.types=tour.types
    //   axios.post(' https://young-cliffs-75372.herokuapp.com/booking',data)
    //   .then(res =>{
    //     if(res.data.insertedId){
    //       toast.success('Booking Successful', {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         });
    //       reset();
    //     }
      
    //   })
    
    // };
  return (
    <div>
      <Navbar/>
      <div className="flight-details">
      <div className="container">
        <div className="row">
          <h4 className='ms-1 pb-3 fw-bold'>Review Your Booking</h4>
         <div className="col-lg-10 ">
           <div className="row shadow bg d-flex mx-1">
            <div className="col-lg-8 px-0">
            <img src={tour?.img} className='w-100 h-100' alt="" />
            </div>
          <div className="col-lg-4 p-4">     
           <h4>{tour?.TourName}</h4>    
           <p><BsGeoAltFill className='color'/> {tour?.area}</p>    
            
            <div className="d-flex gap-4 ">
              <p><AiOutlineFieldTime className='color'/> {tour?.totalTime} hours</p>
              <p><FaUsers className='color'/> {tour?.member} people</p>
            </div>
          </div>  
          </div>
          {/* accordion */}
          <div className="row mt-5 shadow mx-1 bg">
            <div className="col-lg-8 px-0">
              {/* accordion */}
              <div class="accordion accordion-flush bg-light border-bottom border-1" id="accordionFlushExample">
               <div class="accordion-item">
                 <h2 class="accordion-header" id="flush-headingOne">
                   <div class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                     <h5 ><BsGlobe className='re-icons'/> Description</h5>  
                   </div>
                 </h2>
               <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <p className=' lh-lg'><small>Imagine exploring the tourist spots of the world's largest sea beach, Cox's Bazar in a double-decker tourist bus. Having the wide ocean view on one side and hill view on the other, this tour is an excellent opportunity for you to enjoy an entire day while fulfilling a major portion of your Cox's Bazar checklist. Driving through the iconic marine drive, Aquaholic Tourist Caravan offers you a stoppage at every spot to hop around comfortably. This tour also comes with special meal services, a mini library, washroom and refreshments - all inside the tourist bus! Overall, this unique experience of roaming around and visiting spots in a double-decker tourist bus is definitely going to be one of
                      the activities to cherish with your friends or family in Cox's Bazar.</small></p>
                  </div>
                 </div>
                </div>
              </div>
            {/* accordion 2*/}
              <div class="accordion accordion-flush bg-light border-bottom border-1" 
                id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <div class="accordion-button collapsed " type="button"
                     data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" 
                     aria-expanded="false" aria-controls="flush-collapseThree">
                   <h5 ><BsGeoAltFill className='re-icons'/> Location</h5>  
                    </div>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                    <p className=' lh-lg'>Pick-up: Ground Floor, Motel Upal, Shaibal Road, Cox's Bazar</p>
                   </div>
                </div> 
               </div>
             </div>
            </div>
            <div className="col-lg-4">
              <p>ssjkgdkopsdjgp</p>
              <p>ssjkgdkopsdjgp</p>
              <p>ssjkgdkopsdjgp</p>
            </div>
          </div>
         </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TourDetails;