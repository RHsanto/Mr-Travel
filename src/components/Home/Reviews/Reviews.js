import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Slider from "react-slick";
const Reviews = () => {

  const [reviews,setReviews] =useState([])

  useEffect(()=>{
   fetch("https://mr-travel-server.onrender.com/reviews")
   .then(res=>res.json())
   .then(data=>setReviews(data))

  },[])
  var settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false ,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplaySpeed: 2000,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        }
      }
    ]
  };
  return (
    <div className='review-section '>
      <div className="reviews">
      <h1 className='text-center title mb-5'> Clients Reviews</h1>
      <div className="container ">
       <div className="row sliders">
       <Slider  {...settings}>
        {reviews.map(data=>
        <div key={data?._id} className="col-lg-4">
        <div className="card p-3 m-4">
           <img className="card-img" src={data?.client_image} alt="" />
         <div className="card-body">
           <h3>{data?.client}</h3>
             <div className="ratings">
              <li><FaStar/></li>
              <li><FaStar/></li>
              <li><FaStar/></li>
              <li><FaStar/></li>
              <li><FaStarHalfAlt/></li>
             </div>             
            <p className='card-text mt-2'>{data?.description}</p>
              
         </div>
        </div>
      </div>
          )}
         
       
        
        </Slider>
       </div>
     </div></div>  
     
    </div>
  );
};

export default Reviews;