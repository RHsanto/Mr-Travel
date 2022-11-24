import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar,} from "react-icons/ai";
import Rating from "react-rating";
import Slider from "react-slick";
import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetch("https://mr-travel-server.onrender.com/reviews")
  //     .then(res => res.json())
  //     .then(data => setReviews(data));
  // }, []);

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await axios.get('https://mr-travel-server.onrender.com/reviews')
      setReviews(res.data)
    }
    fetchData()
  },[])
  // here slider settings
  var settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplaySpeed: 2000,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="review-section">
      <h1 className="text-center title py-5"> Traveler Experience</h1>
      <div className="sub">

      </div>
      <div className="container">
        <div className="row ">
          <Slider {...settings}>
            {reviews.map(data => (
              <div key={data?._id} className="col-lg-4 ">
                <div className=" review-item m-4 ">
                  <div className="reviewer">
                    <img src={data?.client_image} alt="img" />
                  </div>
                  <Rating
                            className=" mt-3 star-color d-flex justify-content-center"
                            emptySymbol={<AiOutlineStar className="fs-5 " />}
                            fullSymbol={<AiFillStar className="fs-5 " />}
                            readonly
                            initialRating={data?.ratings}
                          />
                  <div className="review-text p-4 text-center">
                    <p> {data?.description}</p>
                    <h5 className="clients">{data?.client}</h5>
                    <small>Travelers</small>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
