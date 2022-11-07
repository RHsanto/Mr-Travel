/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
// import ModifyHotel from "../ModifySearch/ModifyHotel";
import { RiArrowRightLine } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const HotelSearch = () => {
  const results = localStorage.getItem("hotelData");
  const [hotels, setHotels] = useState([]);
  const[searchResults,setSearResult] =useState([])
// here data parsed
   let parsed 
   if(results != undefined)
   {parsed = JSON.parse(results);}
  //  console.log(parsed?.hotelName);

 
// here fetch data
  useEffect(() => {
    fetch("http://localhost:8000/hotelInfo")
      .then(response => response.json())
      .then(data => setHotels(data));
  }, []);

// here get data and fetch data filter
useEffect(()=>{
  const searchResults = hotels.filter((items)=>{
    if( parsed?.hotelName ===  items?.hotelName){
      return (items)
      
    }
    // console.log(items);
  })
  setSearResult(searchResults)
},[hotels])


  return (
    <div>
      <Navbar />
 {/* here search input */}
      {/* <div className=" all-inputs">
        <div className=" rounded  pt-5 pb-3 px-4">
          <div className="container">
            <ModifyHotel />
          </div>
        </div>
      </div> */}



 {/* here result */}
      <div className="common-section ">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            
            {searchResults.map(hotel => (
              <div className="flight mt-5">
                <div className="card mb-3 ps-0">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={hotel?.img} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body ">
                        <div className="d-flex hotel ">
                          <p className="hotel">{hotel?.type}</p>
                          <Rating
                            className="ms-2  mt-1 star-color"
                            emptySymbol={<AiOutlineStar className="fs-5 " />}
                            fullSymbol={<AiFillStar className="fs-5 " />}
                            readonly
                            initialRating={hotel?.rating}
                          />
                        </div>
                        <h5 className="fw-bold">{hotel?.hotelName}</h5>
                        <h6>
                          <MdLocationPin /> {hotel?.location}, Bangladesh
                        </h6>

                        <div className="d-flex justify-content-between align-items-center mt-5">
                          <div className="d-flex">
                            <h6 className="mx-1">
                              <b>$ {hotel?.price}</b>
                            </h6>
                            <p>
                              <small>(Per Person)</small>
                            </p>
                          </div>
                          <div className="select">
                            <Link to={`/offers/${hotel?._id}`}>
                              <button>
                                Booking <RiArrowRightLine className="ms-2 fs-5" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
