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
     <h1 className='fw-bold pb-5'>Why Travel with Mr.Travel</h1>
     <div className="container">
     <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
      <img src={card1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <div className="card-icons shadow"><FaUserNurse/></div>
        <h5 class="card-title fw-bold">2000+ Our Worldwide Guide</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={card2} class="card-img-top" alt="..."/>
      <div class="card-body"> 
      <div className="card-icons shadow"><MdOutlineAirplaneTicket/></div>
        <h5 class="card-title fw-bold">100% Trusted Our Tour Agency</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={card3} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div className="card-icons shadow"><SiYourtraveldottv/></div>
        <h5 class="card-title fw-bold">12+ Years of Travel Experience</h5>
      </div>
    </div>
  </div>
  <div class="col ">
    <div class="card ">
      <img src={card4} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div className="card-icons shadow"><RiUserStarLine/></div>
        <h5 class="card-titles fw-bold">98% of Our Travelers are Happy</h5>
      </div>
    </div>
  </div>
</div>
     </div>
    </div>
  );
};

export default About;