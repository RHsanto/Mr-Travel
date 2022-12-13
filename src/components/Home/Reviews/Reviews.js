import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {  RotatingSquare } from "react-loader-spinner";
import Rating from "react-rating";
import Slider from "react-slick";
import useSWR from "swr";
import "./Reviews.css";
// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const Reviews = () => {
  const { data: reviewsData } = useSWR("https://mr-travel-server.onrender.com/reviews", fetcher);

  if (!reviewsData)
    return (
      <div>
        <h1 className="text-center title py-5"> Traveler Experience</h1>
        <div className="d-flex justify-content-center">
          <RotatingSquare
            height="200"
            width="150"
            color="#0A58CA"
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    );
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
    <div className="review-section mx-5">
      <h1 className="text-center title py-5"> Traveler Experience</h1>

      <div className="container">
        <div className="row ">
          <Slider {...settings}>
            {reviewsData?.map(data => (
              <div key={data?._id} className="col-lg-4 ">
                <div className=" review-item m-4 ">
                  <div className="reviewer">
                    <img src={data?.client_image} alt="img" />
                  </div>
                  <Rating
                    className=" mt-3 re-icons d-flex justify-content-center"
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
