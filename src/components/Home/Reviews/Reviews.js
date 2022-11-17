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
    className: "center",
    centerMode: true,
    
   
   
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
    <div className='review-section'>
      <h1 className='text-center title mb-5'> Traveler Experience</h1>
      <div className="container">
       <div className="row ">
       <Slider  {...settings}>
        {reviews.map(data=>
        <div key={data?._id} className="col-lg-4 ">
        <div className="review-item m-2 ">
          <div className="reviewer">
            <img
              src={data?.client_image}
              alt="img"
            />
          </div>
          <div className=" d-flex justify-content-center ratings">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <div className="review-text p-4 text-center">
            <p> {data?.description}</p>
            <h5 className="clients">{data?.client}</h5>
            <small>Travelers</small>
          </div>
        </div>
      </div>
          )}
         
       
        
        </Slider>
       </div>
     </div> 
    </div>
  );
};

export default Reviews;