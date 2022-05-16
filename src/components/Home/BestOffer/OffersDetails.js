import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {AiOutlineStar,AiFillStar} from "react-icons/ai";
import Navbar from '../../common/Navbar';
import Rating from 'react-rating';
import './offer.css'


const OffersDetails = () => {
  const {id}=useParams();
  const [offer,setOffer]=useState([])
  const sum = (parseFloat(offer?.price) + parseFloat(offer?.service) + parseFloat(offer?.tax))
  useEffect(()=>{
    fetch(`http://localhost:8000/offers/${id}`)
    .then(response=>response.json())
    .then(data=>setOffer(data))
  })
  return (
    <div>
      <Navbar/>
    <div className="container my-5">
      <div className="row mb-3 d-flex  align-items-center">
        <div className="col-lg-6 ">
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
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={offer?.img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src={offer?.slider1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={offer?.slider2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={offer?.slider3} class="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
      {/* sliders */}
       <p className='py-4 lh-lg'>{offer?.description}</p>
       </div>
        </div>
        <div className="col-lg-4">
         <div className="single-info shadow ">
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
          <button className=''>Booking Now</button> 
          </div>
         </div>
        </div>
      </div>
      <div className="row ps-4 pe-3">
        <div className="col-lg-10  shadow">
            {/* accordion */}
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <div class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
     <h4 className='fw-bold'> Summary of Charges</h4>
    <span className=' subtotal'><><h5 className='fw-bold'>{sum}</h5> </>USD Subtotal</span>
    
      </div>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
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
      </div>
    </div>
   </div>
  );
};

export default OffersDetails;