import React, { useEffect, useState } from 'react';
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import icon1 from '../../../images/icons-1.webp'
import icon2 from '../../../images/icons-2.webp'
import icon3 from '../../../images/icon-3.webp'
import icon4 from '../../../images/icons-4.webp'
import { Link } from 'react-router-dom';

const BestOffer = () => {
  const [offers,setOffers]=useState([])

  useEffect(()=>{
    fetch('https://mr-trav-el-servers-n8cl.vercel.app/offersInfo')
    .then(response=>response.json())
    .then(data=>setOffers(data.slice(4,8)))
  })
  return (
    <div className='offer-section '>
      <h2 className='text-center title'><b>THE BEST OFFERS WITH ROOMS</b></h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-5 m-0">
         {offers.map(offer=>(
            <div className="col-lg-6 ">
            <div className="row ">
              <div className="col-lg-6 offer-img">
                <img className='border' src={offer?.img} alt="" />
             <div className="subs-title">{offer?.hotelName}</div>
              </div>
              <div className="col-lg-6 ">
                <div className="offer-info">
                    <div className="d-flex align-items-center">
                    <div className="price">
                      <h1>${offer?.price}</h1>
                     <div className="d-flex justify-content-around">
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiOutlineStar/></li>
                     </div>
                    </div>
                    <p className='ms-2'>per night</p>
                    </div>
                    <p className='text-start py-3'> {offer?.description}</p>
                      <div className="offer-icons d-flex gap-4">
                        <li><img src={icon1} alt="" /></li>
                        <li><img src={icon2} alt="" /></li>
                        <li><img src={icon3} alt="" /></li>
                        <li><img src={icon4} alt="" /></li>
                      </div>
                   <Link to={`/offers/${offer?._id}`}> <button className='read'>READ MORE</button></Link>
                </div>
              </div>
            </div>
          </div>
         ))} 
        </div>
      </div>
    </div>
  );
};

export default BestOffer;