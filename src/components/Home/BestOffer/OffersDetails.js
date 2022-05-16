import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {AiOutlineStar,AiFillStar} from "react-icons/ai";
import Navbar from '../../common/Navbar';
import Rating from 'react-rating';
import './offer.css'
import OfferImgSlider from './OfferImgSlider';

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
       {/* <img src={offer?.img} className='border' alt="" /> */}
       <OfferImgSlider/>
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
            <li><b>Room(s) :</b> 1</li>
            <li><b>Guest(s) per room :</b> 2</li> 
          </div>
          <div className="d-flex justify-content-between align-items-center px-2 py-3">
            <h3>${sum}</h3>
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