import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiPlayCircleLine } from "react-icons/ri";
import { TiUser } from "react-icons/ti";
import { FcHome } from "react-icons/fc";
import { MdLanguage } from "react-icons/md";
import { AiOutlineFieldTime ,AiOutlineStar,AiFillStar} from "react-icons/ai";
import Navbar from '../../common/Navbar';
import Rating from 'react-rating';
import './offer.css'
import OfferImgSlider from './OfferImgSlider';

const OffersDetails = () => {
  const {id}=useParams();
  console.log(id);
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
      <div className="row d-flex  align-items-center">
        <div className="col-lg-6 ">
       <div className="img-box px-3">
         <button className='type-btn'>{offer?.type}</button>
        
         <div className="d-flex justify-content-between align-items-center mb-3">
           <div >
           <h3>{offer?.hotelName}</h3>
           </div>
           <div className='re-icons  '>
           <Rating className='ms-2  mt-1 text-warning'
                   emptySymbol={<AiOutlineStar className='fs-4 '/>}
                   fullSymbol={<AiFillStar className='fs-4 '/>}
                   readonly
                  initialRating={offer?.rating}
                  > 
            </Rating>
            </div>
         </div>
       {/* <img src={offer?.img} className='border' alt="" /> */}
       <OfferImgSlider/>
       <p className='mt-4 lh-lg'>{offer?.description}</p></div>
        </div>
        <div className="col-lg-4">
         <div className="single-info shadow p-5">
          <h3><b>${offer?.price}</b></h3>
          <div className='info-icons'>
            <li><span><FcHome/></span> Instructor : Fahad</li>
            <li><span><RiPlayCircleLine/></span> Class : {offer?.class} </li>
            <li><span><TiUser/></span> Students : {offer?.students} </li>
            <li><span><MdLanguage/></span> Language : English/Bangla</li>
            <li><span><AiOutlineFieldTime/></span> Duration : 12h 20m 20s</li>
          </div>
          <button>Enroll Now</button>
         </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default OffersDetails;