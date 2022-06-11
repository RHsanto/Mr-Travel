import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {AiOutlineStar,AiFillStar} from "react-icons/ai";
import {BsGlobe,BsGeoAltFill} from "react-icons/bs";
import {HiCurrencyDollar} from "react-icons/hi";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Rating from 'react-rating';
import './offer.css'
import Navbar from '../../common/Navbar';


const OffersDetails = () => {
  const {id}=useParams();
  const [offer,setOffer]=useState([])
  const sum = (parseFloat(offer?.price) + parseFloat(offer?.service) + parseFloat(offer?.tax))
  useEffect(()=>{
    fetch(` https://young-cliffs-75372.herokuapp.com/offers/${id}`)
    .then(response=>response.json())
    .then(data=>setOffer(data))
  })

   // react hook form
   const { register, handleSubmit ,reset} = useForm();
   const onSubmit = data => {
     console.log(data)

  // here put booking info
     data.types=offer.types
     data.img=offer.img
     data.hotelName=offer.hotelName
     data.room=offer.room
     data.guest=offer.guest
     data.sum=sum


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
    <div >
      <Navbar/>
   <div className='offersDetails'>
   <div className="container py-5">
      <div className="row mb-3 d-flex  align-items-center">
        <div className="col-lg-8 ">
       <div className="img-box px-3">
         <button className='type-btn '>{offer?.type}</button>
         <Rating className='ms-4  mt-1 re-icons'
                   emptySymbol={<AiOutlineStar className='fs-4 '/>}
                   fullSymbol={<AiFillStar className='fs-4 '/>}
                   readonly
                  initialRating={offer?.rating}
                  > 
          </Rating>
         <div className=" mb-3">
           <div >
           <h3>Review Reservation Details</h3>
           </div>
         </div>
      {/* sliders */}
      <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={offer?.img} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={offer?.slider1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={offer?.slider2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={offer?.slider3} className="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
      {/* sliders */}
      
       </div>
        </div>
        <div className="col-lg-4">
         <div className="single-info shadow">
          <div className='info-icons'>
            <h3>{offer?.hotelName}</h3>
            <p className='re-icons'><b>ROOM DETAILS</b></p>
            <li><b>Check in :</b> Friday, May 27, 2022</li>
            <li><b>Check out :</b> Saturday, May 28, 2022</li>
            <li><b>Room(s) : {offer?.room}</b> </li>
            <li><b>Guest(s) per room : {offer?.guest}</b> </li> 
          </div>
          <div className="d-flex justify-content-between align-items-center px-2 py-3">
            <div className='d-flex'><h3>${sum}</h3><small>(per night)</small></div>
          </div>
         </div>
        </div>
      </div>
      <div className="row ps-4 pe-3 mt-5 ">
        <div className="col-lg-8 p-0 shadow">
{/* accordion */}
  <div className="accordion accordion-flush bg-light border-bottom border-1" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <div className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
     <h5 className='re-icons'><BsGlobe/> Overview</h5>  
      </div>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <p className=' lh-lg'>{offer?.description}</p>
     </div>
    </div>
  </div>
  </div>
  {/* accordion 2*/}
  <div className="accordion accordion-flush bg-light border-bottom border-1" 
  id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <div className="accordion-button collapsed " type="button"
       data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" 
       aria-expanded="false" aria-controls="flush-collapseThree">
     <h5 className='re-icons'><BsGeoAltFill/> Location</h5>  
      </div>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <p className=' lh-lg'>{offer?.location}</p>
     </div>
    </div>
  </div>
  </div>
  {/* accordion 3 */}
  <div className="accordion accordion-flush bg-light" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <div className="accordion-button collapsed " type="button"
       data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">
     <h5 className='re-icons'><HiCurrencyDollar/> Summary of Charges</h5>
    <span className=' subtotal d-none d-lg-block'><><h5 className='fw-bold'>{sum}</h5> </>USD Subtotal</span>
    
      </div>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
       <h6 className='fw-bold'>Member Flexible Rate</h6>
       <h6 className='re-icons fw-bold'>RATE DETAILS</h6>
       <div className="charge-info mt-5">
         <div className="d-flex justify-content-between border-bottom border-1">
          <div>
            <p><b>1 room for 1 night</b></p>
            <p> {offer?.checkIn}</p>
          </div>
          <div>
            <p>Price in USD</p>
            <p className='ms-3 fw-bold'>{offer?.price}</p>
          </div>
         </div>
         <div className="d-flex justify-content-between border-bottom border-1 mt-3">
          <div>
            <p>Total cash rate</p>
            <p> Service Charge</p>
            <p>Estimated government taxes and fees</p>
          </div>
          <div className='me-5 fw-bold'>
            <p>{offer?.price}</p>
            <p>{offer?.service}</p>
            <p>{offer?.tax}</p>
          </div>
         </div>
         <div className="d-flex justify-content-between  mt-3">
          <div>
            <p>Total pay</p>
           
          </div>
          <div className='me-5 fw-bold'>
            <p>{sum}</p>
          </div>
         </div>
       </div>
     </div>
    </div>
  </div>
  </div>

     {/* accordion */}
        </div>
        <div className="col-lg-4 bg shadow p-3">
         <div className="confirm-form border rounded">
         <form onSubmit={handleSubmit(onSubmit)}  >
            <div className="form border p-3 rounded">
            <div className="form-floating mb-3 ">
             <input type="text" required {...register("firstName")} 
             className="form-control" id="floatingInput" placeholder="firstName"/>
             <label for="floatingInput">Enter Name</label>
            </div>
            <div className="form-floating mb-3 ">
           <input type="email" required {...register("email")}
            className="form-control" id="floatingInput" placeholder="Email"/>
           <label for="floatingInput">Email</label>
          </div>
           <div className="form-floating mb-3 ">
            <input type="tel" required {...register("PhoneNumber")}
            className="form-control" id="phone" placeholder="Number"/>
            <label for="floatingInput">Phone Number</label>
          </div>
           
            <>
            <button  type='submit' className='w-100 btn confirm-btn text-light'>
               Confirm Booking
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
              </button> 
            </> 
             </div>
            </form>
         </div>
        </div>
      </div>
    </div>
   </div>
   </div>
  );
};

export default OffersDetails;