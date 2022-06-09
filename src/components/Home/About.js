import React from 'react';
import card1 from '../../images/c-1.avif'
import card2 from '../../images/c-2.avif'
import card3 from '../../images/c-6.avif'
import card4 from '../../images/c-7.avif'
import { RiUserStarLine } from "react-icons/ri";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { FaUserNurse } from "react-icons/fa";

const About = () => {

  return (
    <div className='about-section text-center'>
     <p className='text-secondary'><b>MR.TRAVEL SPECIALS</b></p>
     <h1 className='fw-bold pb-5 title'>Why Travel with Mr.Travel</h1>
     <div className="container">
     <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card">
      <img src={card1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <div className="card-icons shadow"><FaUserNurse/></div>
        <h5 className="card-title fw-bold">2000+ Our Worldwide  Guide available </h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={card2} className="card-img-top" alt="..."/>
      <div className="card-body"> 
      <div className="card-icons shadow"><MdOutlineAirplaneTicket/></div>
        <h5 className="card-title fw-bold">100% Trusted Our Tour Agency</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={card3} className="card-img-top" alt="..."/>
      <div className="card-body">
      <div className="card-icons shadow"><SiYourtraveldottv/></div>
        <h5 className="card-title fw-bold">12+ Years of Travel Experience</h5>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card ">
      <img src={card4} className="card-img-top" alt="..."/>
      <div className="card-body">
      <div className="card-icons shadow"><RiUserStarLine/></div>
        <h5 className="card-titles fw-bold">98% of Our Travelers are Happy</h5>
      </div>
    </div>
  </div>
</div>
     </div>
    </div>
  );
};

export default About;