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
          <button className='mx-2 mt-4'>Booking Now</button> 
         </div>
        </div>
      </div>
      <div className="row ps-4 pe-3">
        <div className="col-lg-10  shadow">
            {/* accordian */}
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <div class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
     <h4 className='fw-bold'> Summary of Charges</h4>
    
      </div>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
</div>

          {/* accordian */}
        </div>
      </div>
    </div>
   </div>
  );
};

export default OffersDetails;