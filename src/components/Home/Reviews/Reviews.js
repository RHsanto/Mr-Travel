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
    <div className='review-section '>
      <h1 className='text-center title mb-5'> Traveler Experience</h1>
      <div className="container-fluid ">
       <div className="row ">
       <Slider  {...settings}>
        {reviews.map(data=>
        <div className="col-lg-4 ">
        <div className="review-item m-2 ">
          <div className="reviewer">
            <img
              src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-5.png"
              alt=""
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime amet mollitia
              nulla, fugit eum magni? Esse, culpa ex. Animi, ut quod! Unde vel repudiandae esse
              velit architecto quos quaerat!
            </p>
            <h5 className="clients">Husaain jaif</h5>
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