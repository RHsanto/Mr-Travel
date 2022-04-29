import React from 'react';
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import Slider from "react-slick";
const Reviews = () => {

  var settings = {
    infinite: true,
    speed: 2000,
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
      <div className="container ">
       {/* <div className="row mb-5">
         <div className="col-lg-6 mx-auto text-center text-light ">
         <h1 className='review-title fw-bold'> TO REVIEWS</h1>
         <p className='review-info mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quas ad dolor consequatur repudiandae nostrum accusamus facere quod
        iusto laudantium obcaecati qui molestias, sequi saepe.</p>
         </div>
       </div> */}
       <div className="row sliders">
       <Slider  {...settings}>
         <div className="col-lg-4">
           <div className=" review-card bg-light p-3 
           align-items-center rounded-3 d-block d-lg-flex gap-4">
            <div className="review-img">
              <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-5.png" alt="" />
            </div>
            <div className="review-info">
             <h4><b>Cox Bazars</b></h4>
             <div className="d-flex review-icon ">
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiOutlineStar/></li>
             </div>
             <p>Lorem ipsum, dolor sit amet  iste ipsam ea rerum eius voluptatem voluptate.</p>
              <h6><b>Rakibul Hasan</b></h6>
            </div>
           </div>
         </div>
         <div className="col-lg-4 ">
           <div className="review-card  bg-light p-3
            align-items-center rounded-3 d-block d-lg-flex gap-4">
            <div className="review-img">
              <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-5.png" alt="" />
            </div>
            <div className="review-info">
             <h4><b>Cox Bazars</b></h4>
             <div className="d-flex review-icon ">
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiOutlineStar/></li>
             </div>
             <p>Lorem ipsum, dolor sit amet  iste ipsam ea rerum eius voluptatem voluptate.</p>
              <h6><b>Rakibul Hasan</b></h6>
            </div>
           </div>
         </div>
         <div className="col-lg-4 ">
           <div className=" review-card bg-light
            p-3 align-items-center rounded-3 d-block d-lg-flex gap-4">
            <div className="review-img">
              <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-5.png" alt="" />
            </div>
            <div className="review-info">
             <h4><b>Cox Bazars</b></h4>
             <div className="d-flex review-icon ">
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiOutlineStar/></li>
             </div>
             <p>Lorem ipsum, dolor sit amet  iste ipsam ea rerum eius voluptatem voluptate.</p>
              <h6><b>Rakibul Hasan</b></h6>
            </div>
           </div>
         </div>
         <div className="col-lg-4 ">
           <div className="  review-card bg-light p-3
            align-items-center rounded-3 d-block d-lg-flex gap-4">
            <div className="review-img">
              <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-5.png" alt="" />
            </div>
            <div className="review-info">
             <h4><b>Cox Bazars</b></h4>
             <div className="d-flex review-icon ">
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiOutlineStar/></li>
             </div>
             <p>Lorem ipsum, dolor sit amet  iste ipsam ea rerum eius voluptatem voluptate.</p>
              <h6><b>Rakibul Hasan</b></h6>
            </div>
           </div>
         </div>
         <div className="col-lg-4 ">
           <div className=" review-card bg-light p-3
            align-items-center rounded-3 d-block d-lg-flex gap-4">
            <div className="review-img">
              <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-5.png" alt="" />
            </div>
            <div className="review-info">
             <h4><b>Cox Bazars</b></h4>
             <div className="d-flex review-icon ">
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiOutlineStar/></li>
             </div>
             <p>Lorem ipsum, dolor sit amet  iste ipsam ea rerum eius voluptatem voluptate.</p>
              <h6><b>Rakibul Hasan</b></h6>
            </div>
           </div>
         </div>
         <div className="col-lg-4 ">
           <div className=" review-card bg-light p-3
            align-items-center rounded-3 d-block d-lg-flex gap-4">
            <div className="review-img">
              <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-5.png" alt="" />
            </div>
            <div className="review-info">
             <h4><b>Cox Bazars</b></h4>
             <div className="d-flex review-icon ">
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiOutlineStar/></li>
             </div>
             <p>Lorem ipsum, dolor sit amet  iste ipsam ea rerum eius voluptatem voluptate.</p>
              <h6><b>Rakibul Hasan</b></h6>
            </div>
           </div>
         </div>
        
        </Slider>
       </div>
     </div></div>  
     
    </div>
  );
};

export default Reviews;