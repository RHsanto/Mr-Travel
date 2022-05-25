import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsGeoAltFill} from "react-icons/bs";
import { AiOutlineFieldTime} from "react-icons/ai";
import { FaUsers} from "react-icons/fa";
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

    // react hook form
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
      console.log(data)
      data.types=tour.types
      axios.post(' https://young-cliffs-75372.herokuapp.com/booking',data)
      .then(res =>{
        if(res.data.insertedId){
          toast.success('Booking Successful', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          reset();
        }
      
      })
    
    };
  return (
    <div>
      <Navbar/>
      <div className="flight-details">
      <div className="container">
        <div className="row">
          <h4 className='ms-1 pb-3 fw-bold'>Review Your Booking</h4>
         <div className="col-lg-10 ">
           <div className="row shadow bg d-flex mx-1">
            <div className="col-lg-5 px-0">
            <img src={tour?.img} className='w-100 h-100' alt="" />
            </div>
          <div className="col-lg-7 p-4">     
           <h4>{tour?.TourName}</h4>    
           <p><BsGeoAltFill className='color'/> {tour?.area}</p>    
            
            <div className="d-flex gap-4 ">
              <p><AiOutlineFieldTime className='color'/> {tour?.totalTime} hours</p>
              <p><FaUsers className='color'/> {tour?.member} people</p>
            </div>
          </div>  
          </div>
          {/* accordion */}
       <form onSubmit={handleSubmit(onSubmit)}>
       <div class="accordion-item bg shadow mt-4 mx-1 ">
       <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h5>Enter Traveler Details</h5>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h5>Personal Details</h5>
        <div className="d-flex justify-content-between mt-5">
        <div class="form-floating mb-3 w-100 me-lg-3 me-2">
         <input type="text" required {...register("firstName")} 
         class="form-control" id="floatingInput" placeholder="firstName"/>
         <label for="floatingInput">First Name</label>
       </div>
        <div class="form-floating mb-3 w-100">
         <input type="text" required {...register("lastName")}
         class="form-control" id="floatingInput" placeholder="lastName"/>
         <label for="floatingInput">Last Name</label>
       </div>
        </div>
        <div className="d-flex justify-content-between ">
        <div class="form-floating mb-3 w-100 me-lg-3 me-2">
         <input type="email" required {...register("email")}
         class="form-control" id="floatingInput" placeholder="Email"/>
         <label for="floatingInput">Email</label>
       </div>
        <div class="form-floating mb-3 w-100">
         <input type="tel" required {...register("PhoneNumber")}
         class="form-control" id="phone" placeholder="Number"/>
         <label for="floatingInput">Phone Number</label>
        
       </div>
        </div>
      
      </div>
    </div>
       </div>
       <div className='ms-1 mt-3 '>
         <button type='submit'  className='confirm w-100'>Confirm Booking</button>
         <ToastContainer
             position="top-right"
             autoClose={5000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             />
        </div>
       </form>
       
         </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TourDetails;